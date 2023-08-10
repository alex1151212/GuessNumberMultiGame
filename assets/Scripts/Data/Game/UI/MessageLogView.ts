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
import { ClientEventType, GameEventType } from "../../../System/Event.type";
import { PlayingDataType } from "../../../Toolkit/Types/Message.type";
import Client from "../../../System/Client/Client";
const { ccclass, property } = _decorator;

@ccclass("MessageLogView")
export class MessageLogView extends Component {
  @property(UITransform)
  private readonly scrollContent: UITransform = null;

  @property(Prefab)
  private readonly messageLogItemPrefab: Prefab = null;

  @property(Vec2)
  private readonly verticalSpacing: Vec2 = null;

  private _root: Node = null;

  private readonly _logPool: NodePool = new NodePool();

  private get currentLogs() {
    return this._root.getComponentsInChildren(Label);
  }

  protected onLoad(): void {
    this._root = this.scrollContent.node;

    GameEvent.on(GameEventType.Playing, this._displayLog.bind(this));
    GameEvent.on(GameEventType.GameStart, () => {
      if (this.currentLogs) {
        this._reset;
      }
    });
  }

  private _displayLog(message: PlayingDataType) {
    let resp: string;
    if (message.round === Client.Instance.playerId) {
      resp = "這回合提示: " + message.resp.a + "A" + message.resp.b + "B";
    } else {
      resp =
        "對手這回合得到的提示: " + message.resp.a + "A" + message.resp.b + "B";
    }
    const newNode = this._getNewLog();

    newNode.string = resp;
    newNode.node.parent = this._root;
  }

  private _getNewLog() {
    const node =
      this._logPool.get() ??
      (() => {
        const newNode = instantiate(this.messageLogItemPrefab);
        newNode.on("recycle", () => {
          this._recycleLog(newNode.getComponent(Label));
        });

        return newNode;
      })();

    return node.getComponent(Label);
  }

  private _recycleLog(log: Label) {
    this._logPool.put(log.node);
  }

  private _reset() {
    this.currentLogs.forEach((log) => {
      log.node.parent = null;
      this._recycleLog(log);
    });
  }
}
