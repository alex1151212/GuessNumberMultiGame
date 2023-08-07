import {
  _decorator,
  Component,
  instantiate,
  Label,
  Node,
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

  private get currentLogs() {
    return this._root.getComponentsInChildren(Label);
  }

  protected onLoad(): void {
    this._root = this.scrollContent.node;
    GameEvent.on(GameEventType.Playing, this._displayLog.bind(this));
  }

  private _displayLog(message: PlayingDataType) {
    let resp: string;
    if (message.round === Client.Instance.playerId) {
      resp = "這回合提示: " + message.resp.a + "A" + message.resp.b + "B";
    } else {
      resp = "對手這回合得到的提示: " + message.resp.a + "A" + message.resp.b + "B";
    }

    this._getNewLog().string = resp;
    // this._updateScrollViewContentSize();
  }

  private _getNewLog() {
    const node = instantiate(this.messageLogItemPrefab);
    node.parent = this.scrollContent.node;
    return node.getComponent(Label);
  }
  // private _updateScrollViewContentSize() {
  //   const uiTransform = this.scrollContent;

  //   uiTransform.setContentSize(
  //     uiTransform.contentSize.x,
  //     this.verticalSpacing.y * (this.currentLogs.length + 1)
  //   );
  // }
}
