import { _decorator, Button, Component, Label, Node } from "cc";
import Client from "../../../System/Client/Client";
import { ButtonEventType, GameEventType } from "../../../System/Event.type";
const { ccclass, property } = _decorator;

@ccclass("GameRoomItem")
export class GameRoomItem extends Component {
  @property(Label)
  private readonly gameNameLabel: Label = null;

  @property(Label)
  private readonly playerAmountLabel: Label = null;

  @property(Button)
  private readonly button: Button = null;

  private _gameName: string = null;
  private _playerAmount: string = null;

  public get gameName() {
    return this._gameName;
  }

  protected onLoad(): void {
    this.button.node.on(Button.EventType.CLICK, () => {
      GameEvent.emit(ButtonEventType.OnOpenInputGameAnswerPopupClick);
    });
  }

  public setData(gameName: string, playerAmount: number) {
    this._gameName = gameName.toString();
    this._playerAmount = playerAmount.toString();
    this.setDisplay();
  }

  private setDisplay() {
    this.gameNameLabel.string = this._gameName;
    this.playerAmountLabel.string = this._playerAmount;
  }
}
