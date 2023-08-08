import { EventTarget } from "cc";

export enum ClientEventType {
  OnMessage = "OnMessage",
}
export enum GameEventType {
  GetGames = "GetGames",
  CreateGames = "CreateGames",
  GetPlayers = "GetPlayers",
  JoinGame = "JoinGame",
  Playing = "Playing",
  GameStart = "GameStart",
  NormalEnd = "NormalEnd",

  SendValue = "SendValue",
}


window.GameEvent = new EventTarget();
