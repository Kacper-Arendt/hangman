export interface StartMPGame {
	players: Array<Player>;
	admin: stringType;
	isOpen: boolean;
	status: MPGameStatus;
	hiddenWord: Array<string>;
	message: MPGameMessage | null;
	gameId: stringType;
}

type stringType = string | null;

interface Player {
	id: stringType;
	displayName: stringType;
	lives: number;
	typedLetters: Array<string>;
	score: number;
	status: MPGameStatus;
}

export interface MPGameMessage {
	type: 'success' | 'danger';
	value: string;
	content?: string;
}

export interface MPEndMessage {
	message: StartMPGame['message'];
}

export enum MPGameStatus {
	'end' = 'end',
	'during' = 'during',
	'idle' = 'idle',
	'waiting' = 'waiting',
}
