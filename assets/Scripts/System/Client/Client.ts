import { EventTarget, log } from "cc";
import Connection from "./Connection/Connection";
import Application from "../Application";
import {
  JoinGameDataType,
  Message,
  PlayingDataType,
  CreateGameDataType,
} from "../../Toolkit/Types/Message.type";
import { GameEventType } from "../Event.type";

export default class Client extends EventTarget {
  private static instance: Client = null;

  public playerId: string = null;

  private constructor() {
    super();
  }

  public static get Instance() {
    if (!this.instance) {
      this.instance = new Client();
    }
    return this.instance;
  }

  private _connection: Connection = null;

  private _send(data: Message) {
    const jsonMessage = JSON.stringify(data);
    this._connection.websocket.send(jsonMessage);
  }

  /**
   * 建立連線
   */
  public async init() {
    this._connection = new Connection(
      Application.config.serverAddress,
      Application.config.name
    );

    const startHandler = (playerId: string) => {
      this.playerId = playerId;
    };

    await this._connection.createConnection(startHandler.bind(this));
    await new Promise((resolve) => {
      setInterval(() => {
        if (this.playerId != null) resolve(this.playerId);
      }, 500);
    });
    this.getGames();
    return this.playerId;
  }

  public getGames() {
    const getGamesMessage: Message = {
      type: GameEventType.GetGames,
    };
    this._send(getGamesMessage);
  }

  public joinGame(gameId: string) {
    const data: JoinGameDataType = {
      gameId: gameId,
    };
    const getGamesMessage: Message = {
      type: GameEventType.JoinGame,
      data: data,
    };
    this._send(getGamesMessage);
  }

  public playGame(guessNumber: string) {
    const data: PlayingDataType = {
      value: guessNumber,
    };
    const PlayingMessage: Message = {
      type: GameEventType.Playing,
      data: data,
    };
    this._send(PlayingMessage);
  }

  public createGame(gameId: string) {
    const data: CreateGameDataType = {
      gameId: gameId,
    };
    const getGamesMessage: Message = {
      type: GameEventType.CreateGame,
      data: data,
    };
    this._send(getGamesMessage);
  }
}
