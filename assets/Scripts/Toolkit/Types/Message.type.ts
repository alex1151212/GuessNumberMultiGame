import { GameEventType } from "../../System/Event.type";

export interface Message {
  type: GameEventType;
  data?:
    | string
    | JoinGameDataType
    | PlayingDataType
    | NormalEndRespType
    | CreateGameDataType;
}
export interface JoinGameDataType {
  gameId: string;
  gameAnswer: string;
}
export interface CreateGameDataType {
  gameId: string;
}
export interface InputGameAnswerType {
  gameAnswer: string;
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

export interface NormalEndRespType {
  gameId: string;
  winner: string;
  gameStatus: string;
}
