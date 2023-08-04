import NetworkWebsocket from "./NetworkWebsocket";

export enum PathName {}

export default class Connection {
  private websocket: NetworkWebsocket;

  /** gameServer address + game id */
  private gameDomain: string = "";

  /**
   * 建立管理與 Game server溝通的 Connection
   */
  constructor(gameDomain: string, gameId: string) {
    // this.gameDomain = gameDomain.endsWith("/")
    //   ? gameDomain + gameId
    //   : `${gameDomain}/${gameId}`;
    this.gameDomain = gameDomain;
  }

  /**
   * 建立連線，並對通訊
   */
  public async createConnection(
    startHandler: (playerId: string) => void
  ): Promise<void> {
    this.websocket = new NetworkWebsocket(this.gameDomain, startHandler);
  }
}
