import * as cc from "cc";

const { ccclass, property } = cc._decorator;

// 一般縮放基類
@ccclass("Popup")
export class Popup extends cc.Component {
  @property({ type: cc.Node, tooltip: "遮罩節點" })
  protected readonly mask: cc.Node = null;
  @property({ type: cc.Node, tooltip: "彈窗節點" })
  protected readonly window: cc.Node = null;
  @property({ type: cc.Button, tooltip: "開啟按鈕" })
  protected readonly openButton: cc.Button = null;
  @property({ type: cc.Button, tooltip: "關閉按鈕" })
  protected readonly closeButton: cc.Button = null;

  @property({ type: [cc.Button], tooltip: "更多的關閉按鈕" })
  protected readonly closeButtons: cc.Button[] = [];

  protected onLoad(): void {
    this.openButton?.node.on(cc.Button.EventType.CLICK, this.open.bind(this));
    this.closeButton?.node.on(cc.Button.EventType.CLICK, this.close.bind(this));
    this.closeButtons.forEach((closeButton) => {
      closeButton.node.on(cc.Button.EventType.CLICK, this.close.bind(this));
    });
  }

  public get isVisible() {
    return this.window.active;
  }

  private _openMask() {
    this.mask.active = true;
  }
  private _closeMask() {
    this.mask.active = false;
  }
  
  public open() {
    this._openMask();
    this.window.active = true;
  }
  public close() {
    this._closeMask();
    this.window.active = false;
  }
}
