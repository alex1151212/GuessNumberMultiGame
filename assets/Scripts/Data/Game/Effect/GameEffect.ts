import {
  _decorator,
  Button,
  Color,
  Component,
  EditBox,
  Label,
  math,
  Node,
  tween,
  Vec3,
} from "cc";
import { GameEventType } from "../../../System/Event.type";
import { NormalEndRespType } from "../../../Toolkit/Types/Message.type";
import Client from "../../../System/Client/Client";
const { ccclass, property } = _decorator;

const WIN_STRING = "Victory";
const LOSE_STRING = "Defeat";

@ccclass("Game")
export class GameEffect extends Component {
  @property(Label)
  private readonly gameStartLabel: Label = null;

  @property(Label)
  private readonly gameEndLabel: Label = null;

  protected onLoad(): void {
    GameEvent.on(GameEventType.GameStart, this._gameStartEffect, this);
    GameEvent.on(GameEventType.NormalEnd, this._gameEndEffect, this);
  }

  private _gameStartEffect() {
    console.log("Start");

    tween(this.gameStartLabel.node)
      .set({ scale: new Vec3(1, 1, 1) })
      .to(1.5, { scale: new Vec3(0, 0, 0) }, { easing: "fade" })
      .start();
  }
  
  private _gameEndEffect(message: NormalEndRespType) {
    console.log("Game End");

    if (message.winner == Client.Instance.playerId) {
      this.gameEndLabel.string = WIN_STRING;
    } else {
      this.gameEndLabel.string = LOSE_STRING;
    }

    tween(this.gameEndLabel.node)
      .set({ scale: new Vec3(0, 0, 0) })
      .to(1.5, { scale: new Vec3(1, 1, 1) }, { easing: "fade" })
      .start();
  }
}
