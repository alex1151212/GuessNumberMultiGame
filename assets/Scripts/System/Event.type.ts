import { EventTarget } from "cc";

export enum ClientEventType {
  OnMessage = "OnMessage",
}
export enum GameEventType {
  GetGames = "GetGames",
  CreateGame = "CreateGame",
  GetPlayers = "GetPlayers",
  JoinGame = "JoinGame",
  Playing = "Playing",
  GameStart = "GameStart",
  NormalEnd = "NormalEnd",

  SendValue = "SendValue",
}

export enum ButtonEventType {
  OnCreateGameBtnClick = "OnCreateGameBtnClick",
}

window.GameEvent = new EventTarget();
