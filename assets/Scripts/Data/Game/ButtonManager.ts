import * as cc from "cc";
import { ButtonEventType, GameEventType } from "../../System/Event.type";
import { GameRoomView } from "./UI/GameRoomView";
const { ccclass, property } = cc._decorator;

// 一般縮放基類
@ccclass("ButtonManager")
export class ButtonManager extends cc.Component {
  @property(GameRoomView)
  protected readonly gameRoomView: GameRoomView = null;

  @property(cc.Node)
  protected readonly game: cc.Node = null;

  @property(cc.Node)
  protected readonly lobby: cc.Node = null;

  protected onLoad(): void {
    GameEvent.on(ButtonEventType.OnJoinGameBtnClick, this._goToGame, this);
    GameEvent.on(
      ButtonEventType.OnBackLobbyBtnClick,
      () => {
        this._goToLobby();
      },
      this
    );
  }

  private _goToLobby() {
    this.lobby.active = true;
    this.gameRoomView.node.active = true;
    this.game.active = false;
  }
  private _goToGame() {
    this.lobby.active = false;
    this.gameRoomView.node.active = false;
    this.game.active = true;
  }
}
