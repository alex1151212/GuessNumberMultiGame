import * as cc from "cc";
import { Popup } from "./Popup";
import { ButtonEventType } from "../../../System/Event.type";

const { ccclass, property } = cc._decorator;

@ccclass("PopupB")
export class PopupB extends Popup {
  @property({ type: cc.CCString, tooltip: "開啟事件" })
  protected readonly buttonOpenEvent: string = "";

  @property({ type: cc.CCString, tooltip: "關閉事件" })
  protected readonly buttonCloseEvent: string = "";

  protected onLoad(): void {
    super.onLoad();
    GameEvent.on(this.buttonOpenEvent, this._popupOpen, this);
    GameEvent.on(this.buttonCloseEvent, this._popupClose, this);
  }

  private _popupOpen() {
    this.open();
  }

  private _popupClose() {
    this.close();
  }
}
