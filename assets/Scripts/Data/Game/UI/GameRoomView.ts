import {
  _decorator,
  Component,
  instantiate,
  Label,
  Node,
  NodePool,
  Prefab,
  ScrollView,
  UITransform,
  Vec2,
} from "cc";
import { ClientEventType } from "../../../System/Event.type";
import { GameRoomItem } from "./GameRoomItem";
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

  private readonly _gameRoomPool: NodePool = new NodePool();

  private get currentGameRooms() {
    return this._root.getComponentsInChildren(GameRoomItem);
  }

  protected onLoad(): void {
    this._root = this.scrollContent.node;
    GameEvent.on(ClientEventType.onMessage, this._displayGameRoom, this);
  }

  protected onDestroy(): void {
    GameEvent.off(ClientEventType.onMessage, this._displayGameRoom, this);
  }

  private _displayGameRoom(message: { data: string; type: string }) {
    if (message?.type == "GetGames") {
      this._reset();
      const jsonData = JSON.parse(message.data) as GameRoomType;

      for (let key in jsonData) {
        const newGameRoom = this._getGameRoom();
        newGameRoom.node.parent = this.scrollContent.node;
        newGameRoom.setData(jsonData[key].id, jsonData[key].playerAmount);

        this._updateScrollViewContentSize();
      }
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
        return newNode;
      })();
    return node.getComponent(GameRoomItem);
  }

  private _reset() {
    this.currentGameRooms.forEach((room) => {
      room.node.parent = null;
      room.node.emit("recycle");
    });
  }

  private _recycleGameRoom(book: GameRoomItem) {
    this._gameRoomPool.put(book.node);
  }

  private _updateScrollViewContentSize() {
    const uiTransform = this.scrollContent;

    uiTransform.setContentSize(
      this.horizontalSpacing.x * (this.currentGameRooms.length + 1),
      uiTransform.contentSize.y
    );
  }
}
