import { _decorator, Component, Label, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("GameRoomItem")
export class GameRoomItem extends Component {
  @property(Label)
  private readonly gameName: Label = null;

  @property(Label)
  private readonly playerAmount: Label = null;

  private _root: Node = null;

  protected onLoad(): void {}

  public setData(gameName: string, playerAmount: number) {
    this.gameName.string = gameName.toString();
    this.playerAmount.string = playerAmount.toString();
  }
}
