import { _decorator, Button, Component, EditBox, Label, Node } from "cc";
import { ButtonEventType, GameEventType } from "../../System/Event.type";
import Client from "../../System/Client/Client";
const { ccclass, property } = _decorator;

@ccclass("Game")
export class Game extends Component {
  @property(Button)
  private readonly enterButton: Button = null;

  @property(Button)
  private readonly backButton: Button = null;

  @property(EditBox)
  private readonly valueInputBox: EditBox = null;

  private _value: string = null;

  protected onLoad(): void {
    this.backButton.node.on(Button.EventType.CLICK, this._backToLobby, this);
    this.enterButton.node.on(Button.EventType.CLICK, this._sendValue, this);
    GameEvent.on(
      GameEventType.NormalEnd,
      () => {
        this.backButton.enabled = true;
      },
      this
    );
    GameEvent.on(
      GameEventType.LeaveGame,
      () => {
        Client.Instance.leaveGame();
      },
      this
    );
    GameEvent.on(GameEventType.GameStart, this.init, this);
    GameEvent.on(
      GameEventType.SendValue,
      (value: string) => {
        Client.Instance.playGame(value);
      },
      this
    );
  }
  public init() {
    this.backButton.enabled = true;
    this.valueInputBox.string = "";
  }

  private _sendValue() {
    GameEvent.emit(GameEventType.SendValue, this.valueInputBox.string);
  }

  private _backToLobby() {
    GameEvent.emit(GameEventType.LeaveGame);
    GameEvent.emit(ButtonEventType.OnBackLobbyBtnClick);
  }
}
