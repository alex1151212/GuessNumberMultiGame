/* eslint-disable no-var */

import { EventTarget } from "cc";

/* eslint-disable vars-on-top */
declare global {
  /**
   * 全局遊戲事件，負責處理所有遊戲中的所有自定義事件
   * @example
   * GameEvent.on(SomeEventType, callback);
   * GameEvent.emit(SomeEventType, arg1, arg2);
   */
  var GameEvent: EventTarget;
}

export {};
