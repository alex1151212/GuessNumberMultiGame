/* eslint-disable class-methods-use-this */
import {
  Component,
  LabelComponent,
  Node,
  Prefab,
  _decorator,
  director,
  game,
  instantiate,
} from "cc";
import ApplicationConfig from "../Data/Type/Application.type";
import Parameter from "../Toolkit/Utils/Parameter";
import Client from "./Client/Client";
import { ClientEventType, GameEventType } from "./Event.type";
import { Message, PlayingDataType } from "../Toolkit/Types/Message.type";
import { GameRoomView } from "../Data/Game/UI/GameRoomView";
import { MessageLogView } from "../Data/Game/UI/MessageLogView";

const { ccclass, property } = _decorator;

/**
 * FPS計算與顯示、音量控制、遊戲參數取得與提供
 */
@ccclass
export default class Application extends Component {
  @property(ApplicationConfig)
  private config: ApplicationConfig = null;

  @property(Node)
  private messageLogView: Node = null;

  @property(GameRoomView)
  private gameRoomView: GameRoomView = null;

  private static instance: Application = null;

  public static get Instance() {
    return this.instance;
  }

  public static get config(): Readonly<ApplicationConfig> {
    return this.instance.config;
  }

  public static get mutableConfig(): ApplicationConfig {
    return this.instance.config;
  }

  async onLoad() {
    if (Application.instance) {
      this.destroy();
      console.warn(`Multiple ${Application.name} is not allowed.`);
      return;
    }
    Application.instance = this;

    director.addPersistRootNode(this.node);
    // FPS設置60 or 30會出現問題 https://www.jianshu.com/p/8cc29216749b
    game.frameRate = 61;

    // 從 URL query string取得參數並覆蓋系統預設參數
    this.overrideDefaultConfig();

    await Client.Instance.init();
    GameEvent.on(ClientEventType.OnMessage, (message: Message) => {
      console.log(message);
      this._messageHandler(message);
    });
    GameEvent.on(
      GameEventType.GameStart,
      () => {
        this.gameRoomView.node.active = false;
        this.messageLogView.active = true;
      },
      this
    );
  }

  private _messageHandler(message: Message) {
    if (message) {
      switch (message.type) {
        case GameEventType.GetGames:
          GameEvent.emit(GameEventType.GetGames, message.data);
          break;
        case GameEventType.CreateGames:
          break;
        case GameEventType.GetPlayers:
          break;
        case GameEventType.JoinGame:
          break;
        case GameEventType.Playing:
          GameEvent.emit(
            GameEventType.Playing,
            message.data as PlayingDataType
          );
          break;
        case GameEventType.GameStart:
          GameEvent.emit(GameEventType.GameStart);
          break;
      }
    }
  }

  private overrideDefaultConfig(): void {
    const { config } = this;
    config.serverAddress = Parameter.get("gameDomain", config.serverAddress);
  }
}
