import { _decorator, Button, Component, EditBox, Node } from "cc";
import { GameEventType } from "../../System/Event.type";
import Client from "../../System/Client/Client";
const { ccclass, property } = _decorator;

@ccclass("Game")
export class Game extends Component {
  @property(Button)
  private readonly enterButton: Button = null;

  @property(EditBox)
  private readonly valueInputBox: EditBox = null;

  protected onLoad(): void {
    this.enterButton.node.on(Button.EventType.CLICK, this._sendValue, this);
  }

  private _sendValue() {
    Client.Instance.playGame(this.valueInputBox.string);
  }
}
