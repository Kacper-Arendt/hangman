export interface StartGame {
	status: GameStatus;
	hiddenWord: Array<string>;
	typedLetters: Array<string>;
	lives: number;
	message: GameMessage | null;
	score: 2 | 1 | 0;
}

export interface GameMessage {
	type: 'success' | 'danger';
	value: string;
	content?: string;
}

export interface EndMessage {
	score: StartGame['score'];
	message: StartGame['message'];
}

export enum GameStatus {
	'end' = 'end',
	'during' = 'during',
	'idle' = 'idle',
}
