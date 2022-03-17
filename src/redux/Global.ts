import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { AlertType } from '../coreUI/elements/alerts/sections/Body';

interface GlobalState {
	alerts: Array<Alert>;
}

interface Alert {
	id?: string;
	type: AlertType;
	title?: string;
	value?: string;
	closeBtn?: boolean;
	progressBar?: boolean;
	initDelay?: string;
}

const initialState: GlobalState = {
	alerts: [],
};

// dispatch(addAlert({ value: 'blablabla', title: 'pierwszy', type: 'primary', closeBtn: true }));

export const global = createSlice({
	name: 'global',
	initialState,
	reducers: {
		addAlert: {
			reducer(state, action: PayloadAction<Alert>) {
				state.alerts.unshift(action.payload);
			},
			prepare(alert: Alert) {
				return {
					payload: {
						...alert,
						id: nanoid(),
						progressBar: alert.progressBar ?? true,
						closeBtn: alert.closeBtn ?? true,
						initDelay: alert.initDelay ?? '2000',
					},
				};
			},
		},
		removeAlert: (state, action: PayloadAction<string>) => {
			state.alerts = state.alerts.filter((el) => el.id !== action.payload);
		},
	},
});

export const { addAlert, removeAlert } = global.actions;

export default global.reducer;
