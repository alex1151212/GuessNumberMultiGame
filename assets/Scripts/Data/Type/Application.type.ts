import { CCBoolean, Enum, CCString, _decorator } from "cc";

export enum ApplicationMode {
  Release = 0,
  Debug = 1,
}

enum WalletType {
  Single = 1,
  Multiple,
}

const { ccclass, property } = _decorator;

@ccclass("ApplicationConfig")
export default class ApplicationConfig {
  // default
  @property(CCString)
  name: string = "";

  @property(CCString)
  version: string = "";

  homeURL: string = "";

  showHome = true;

  // build parameter

  serverAddress: string = "";

  mode: ApplicationMode = ApplicationMode.Release;
}
