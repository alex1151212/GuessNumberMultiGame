import * as cc from "cc";
import { ButtonEventType, GameEventType } from "../../../System/Event.type";
import Client from "../../../System/Client/Client";

const { ccclass, property } = cc._decorator;

// 一般縮放基類
@ccclass("InputGameAnswer")
export class InputGameAnswer extends cc.Component {
  @property(cc.EditBox)
  protected readonly gameAnswerInput: cc.EditBox = null;

  @property(cc.Button)
  protected readonly enterButton: cc.Button = null;

  private _gameAnswer: string = null;

  private set gameAnswer(value: string) {
    this._gameAnswer = value;
  }
  private get gameAnswer() {
    return this._gameAnswer;
  }

  protected onLoad(): void {
    this.gameAnswerInput.node.on(
      cc.EditBox.EventType.TEXT_CHANGED,
      () => {
        this.gameAnswer = this.gameAnswerInput.string;
      },
      this
    );
    this.enterButton.node.on(
      cc.Button.EventType.CLICK,
      this._gameAnswerGameEnter,
      this
    );
    GameEvent.on(ButtonEventType.OnJoinGameBtnClick, () => {
      GameEvent.emit(GameEventType.JoinGame, this.gameAnswer);
    });
  }

  private _gameAnswerGameEnter() {
    GameEvent.emit(ButtonEventType.OnJoinGameBtnClick, this.gameAnswer);
    GameEvent.emit(ButtonEventType.OnCloseInputGameAnswerPopupClick);
  }
}
