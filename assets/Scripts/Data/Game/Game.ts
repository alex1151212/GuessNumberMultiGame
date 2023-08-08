import { _decorator, Button, Component, EditBox, Label, Node } from "cc";
import { GameEventType } from "../../System/Event.type";
import Client from "../../System/Client/Client";
const { ccclass, property } = _decorator;

@ccclass("Game")
export class Game extends Component {
  @property(Button)
  private readonly enterButton: Button = null;

  @property(EditBox)
  private readonly valueInputBox: EditBox = null;

  private _value: string = null;

  protected onLoad(): void {
    this.enterButton.node.on(Button.EventType.CLICK, this._sendValue, this);
    // this.valueInputBox.node.on(
    //   EditBox.EventType.EDITING_RETURN,
    //   (value: string) => {
    //     this._value = value;
    //   }
    // );
    GameEvent.on(
      GameEventType.SendValue,
      (value: string) => {
        Client.Instance.playGame(value);
      },
      this
    );
  }

  private _sendValue() {
    GameEvent.emit(GameEventType.SendValue, this.valueInputBox.string);
  }
}
