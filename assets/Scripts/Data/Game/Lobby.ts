import { _decorator, Button, Component, EditBox, Label, Node } from "cc";
import { GameEventType } from "../../System/Event.type";
import Client from "../../System/Client/Client";
import { GameRoomView } from "./UI/GameRoomView";
const { ccclass, property } = _decorator;

@ccclass("Lobby")
export class Lobby extends Component {
  protected onLoad(): void {
    this._init();
    GameEvent.on(GameEventType.BackToLobby, () => {
      GameEvent.emit(GameEventType.GetGames);
    });
  }

  private _init() {
    GameEvent.emit(GameEventType.GetGames);
  }
}
