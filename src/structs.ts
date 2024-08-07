export interface ReaderConfig {
  // eslint-disable-next-line no-unused-vars
  debug: undefined | ((msg: string) => void);
  resolveAccountNames: boolean;
}

export type Parseable = Buffer | string;

export interface ReplayEncryption {
  isEncrypted?: boolean;
  encryptionKey?: Buffer;
}

export interface ReplayMeta {
  magic: number;
  fileVersion: number;
  lengthInMs: number;
  networkVersion: number;
  changelist: number;
  name: string;
  isLive: boolean;
  timestamp?: Date;
  isCompressed?: boolean;
}

export interface ReplayHeader {
  magic: number;
  networkVersion: number;
  networkChecksum: number;
  engineNetworkVersion: number;
  gameNetworkProtocol: number;
  id: string | undefined;
  version: {
    branch: string;
    major: number;
    minor: number;
    changelist: number;
    patch: number;
  };
  levelNamesAndTimes: any[];
  flags: number;
  gameSpecificData: any[];
}

export interface ReplayPlayer {
  name?: string;
  id?: string;
  isBot: boolean;
}

export interface ReplayElimination {
  eliminated: ReplayPlayer;
  eliminator: ReplayPlayer;
  gunType: string;
  knocked: boolean;
  timestamp: number;
}

export interface ReplayMatchStats {
  accuracy: number;
  assists: number;
  eliminations: number;
  weaponDamage: number;
  otherDamage: number;
  revives: number;
  damageTaken: number;
  damageToStructures: number;
  materialsGathered: number;
  materialsUsed: number;
  totalTraveled: number;
}

export interface ReplayTeamMatchStats {
  position: number;
  totalPlayers: number;
}
