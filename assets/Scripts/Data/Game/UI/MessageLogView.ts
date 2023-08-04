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
import { ClientEventType } from "../../../System/Event.type";
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
    GameEvent.on(ClientEventType.onMessage, this._displayLog.bind(this));
  }

  private _displayLog(message: string) {
    this._getNewLog().string = message;
    this._updateScrollViewContentSize();
  }

  private _getNewLog() {
    const node = instantiate(this.messageLogItemPrefab);
    return node.getComponent(Label);
  }
  private _updateScrollViewContentSize() {
    const uiTransform = this.scrollContent;

    uiTransform.setContentSize(
      uiTransform.contentSize.x,
      this.verticalSpacing.y * (this.currentLogs.length + 1)
    );
  }
}
