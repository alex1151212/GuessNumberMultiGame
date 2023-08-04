import { error, Game, game, log, sys } from "cc";
import { ClientEventType } from "../../Event.type";

export default class NetworkWebsocket {
  public static readonly TIMEOUT_SYMBOL: Symbol = Symbol("TIMEOUT");

  private websocket: WebSocket = null;
  private connectionPromise: Promise<void> = null;

  public onReconnected: Function = null;

  public get readyState(): number {
    return this.websocket.readyState;
  }

  public constructor(
    private readonly serverHost: string,
    private readonly startHandler: (playerId: string) => void
  ) {
    this.connect();
  }
  public send(data: string) {
    this.websocket.send(data);
  }

  public disconnect() {
    this.websocket.close();
  }

  private connect() {
    this.websocket = new WebSocket(this.serverHost);
    this.websocket.onopen = () => {
      console.log("Open");
    };
    this.websocket.onmessage = (event: MessageEvent) => {
      const receiveData = JSON.parse(event.data);
      const jsonData =
        receiveData instanceof Object ? receiveData : JSON.parse(receiveData);
      if (jsonData?.Id) return this.startHandler(jsonData?.Id);
      GameEvent.emit(ClientEventType.onMessage, jsonData);
    };
    this.websocket.onerror = (event) => {
      error(event);
    };
    this.websocket.onclose = () => {
      console.log("Close");
    };
  }
}
