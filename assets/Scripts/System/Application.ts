/* eslint-disable class-methods-use-this */
import {
  Component,
  LabelComponent,
  Node,
  Prefab,
  _decorator,
  director,
  game,
  instantiate
} from "cc";
import ApplicationConfig from "../Data/Type/Application.type";
import Parameter from "../Toolkit/Utils/Parameter";
import Client from "./Client/Client";
import { ClientEventType } from "./Event.type";

const { ccclass, property } = _decorator;

/**
 * FPS計算與顯示、音量控制、遊戲參數取得與提供
 */
@ccclass
export default class Application extends Component {
  @property(ApplicationConfig)
  private config: ApplicationConfig = null;

  @property(Node)
  private messageViewContent: Node = null;

  @property(Prefab)
  private messageViewItem: Prefab = null;

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
    GameEvent.on(ClientEventType.onMessage, (message: { data: string }) => {
      const item = instantiate(this.messageViewItem);

      item.getComponent(LabelComponent).string = message.data;
    //   const itemHeight = item.getComponent(UITransform).contentSize.height;
    //   const contentItemAmount = this.messageViewContent.children.length;
    //   item.setPosition(
    //     new Vec3(
    //       item.position.x,
    //       -contentItemAmount * (itemHeight + 10),
    //       undefined
    //     )
    //   );
      item.parent = this.messageViewContent;
    });
  }
  private overrideDefaultConfig(): void {
    const { config } = this;
    config.serverAddress = Parameter.get("gameDomain", config.serverAddress);
  }
}
