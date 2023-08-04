import { EventTarget, log } from "cc";
import Connection from "./Connection/Connection";
import Application from "../Application";

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
    return this.playerId;
  }

  
}
