import * as cc from "cc";
import { ButtonEventType } from "../../../System/Event.type";
import Client from "../../../System/Client/Client";

const { ccclass, property } = cc._decorator;

// 一般縮放基類
@ccclass("CreateGame")
export class CreateGame extends cc.Component {
  @property(cc.EditBox)
  protected readonly gameIdInput: cc.EditBox = null;

  @property(cc.Button)
  protected readonly enterButton: cc.Button = null;

  private _gameId: string = null;

  public set gameId(value: string) {
    this._gameId = value;
  }
  public get gameId() {
    return this._gameId;
  }

  protected onLoad(): void {
    this.gameIdInput.node.on(
      cc.EditBox.EventType.TEXT_CHANGED,
      () => {
        this.gameId = this.gameIdInput.string;
      },
      this
    );
    this.enterButton.node.on(
      cc.Button.EventType.CLICK,
      this._createGameEnter,
      this
    );
    GameEvent.on(ButtonEventType.OnCreateGameBtnClick, (gameId: string) => {
      Client.Instance.createGame(gameId);
    });
  }

  private _createGameEnter() {
    GameEvent.emit(ButtonEventType.OnCreateGameBtnClick, this.gameId);
  }
}
