import { EventTarget } from "cc";

export enum ClientEventType {
  onMessage = "OnMessage",
}
export enum GameEventType {
  getGames = "GetGames",
  createGames = "CreateGames",
  getPlayers = "GetPlayers",
  joinGame = "JoinGame",
}

window.GameEvent = new EventTarget();
