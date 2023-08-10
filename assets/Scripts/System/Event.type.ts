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

  LeaveGame = "LeaveGame",
  BackToLobby = "BackToLobby",
}

export enum ButtonEventType {
  OnCreateGameBtnClick = "OnCreateGameBtnClick",
  OnJoinGameBtnClick = "OnJoinGameBtnClick",
  OnBackLobbyBtnClick = "OnBackLobbyBtnClick",
}

window.GameEvent = new EventTarget();
