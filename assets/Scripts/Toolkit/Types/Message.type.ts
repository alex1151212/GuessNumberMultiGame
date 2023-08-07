import { GameEventType } from "../../System/Event.type";

export interface Message {
  type: GameEventType;
  data?: string | JoinGameDataType | PlayingDataType;
}
export interface JoinGameDataType {
  gameId: string;
  playerId: string;
}

export interface PlayingDataType {
  value?: string;
  resp?: PlayingRespType;
  round?: string;
}

export interface PlayingRespType {
  a: string;
  b: string;
}
