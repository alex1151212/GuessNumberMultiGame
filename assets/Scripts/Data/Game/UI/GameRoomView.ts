import {
  _decorator,
  Button,
  Component,
  instantiate,
  Node,
  NodePool,
  Prefab,
  UITransform,
  Vec2,
} from "cc";
import { GameEventType } from "../../../System/Event.type";
import { GameRoomItem } from "./GameRoomItem";
import Client from "../../../System/Client/Client";
const { ccclass, property } = _decorator;

interface GameRoomType {
  [id: string]: { id: string; playerAmount: number };
}

@ccclass("GameRoomView")
export class GameRoomView extends Component {
  @property(UITransform)
  private readonly scrollContent: UITransform = null;

  @property(Prefab)
  private readonly gameRoomItemPrefab: Prefab = null;

  @property(Vec2)
  private readonly horizontalSpacing: Vec2 = null;

  private _root: Node = null;

  private _gameName: string = null;

  private readonly _gameRoomPool: NodePool = new NodePool();

  private get currentGameRooms() {
    return this._root.getComponentsInChildren(GameRoomItem);
  }

  private get gameName() {
    return this._gameName;
  }
  private set gameName(gameName: string) {
    this._gameName = gameName;
  }

  protected onLoad(): void {
    this._root = this.scrollContent.node;
    GameEvent.on(
      GameEventType.JoinGame,
      (gameAnswer: string) => {
        Client.Instance.joinGame(this.gameName, gameAnswer);
      },
      this
    );
    GameEvent.on(GameEventType.GetGames, this._displayGameRoom, this);
  }

  private _displayGameRoom(message: Object) {
    if (this.currentGameRooms.length > 0) this._reset();
    const gameRoomData = message as GameRoomType;

    for (let key in gameRoomData) {
      const newGameRoom = this._getGameRoom();
      newGameRoom.node.parent = this.scrollContent.node;
      newGameRoom.setData(gameRoomData[key].id, gameRoomData[key].playerAmount);
    }
  }

  private _getGameRoom(): GameRoomItem {
    const node =
      this._gameRoomPool.get() ??
      (() => {
        const newNode = instantiate(this.gameRoomItemPrefab);
        newNode.on("recycle", () => {
          this._recycleGameRoom(newNode.getComponent(GameRoomItem));
        });
        newNode.getComponent(Button).node.on(Button.EventType.CLICK, () => {
          this._gameName = newNode.getComponent(GameRoomItem).gameName;
        });

        return newNode;
      })();

    return node.getComponent(GameRoomItem);
  }

  private _reset() {
    this.currentGameRooms.forEach((room) => {
      room.node.parent = null;
      this._recycleGameRoom(room);
    });
  }

  private _recycleGameRoom(room: GameRoomItem) {
    this._gameRoomPool.put(room.node);
  }
}
