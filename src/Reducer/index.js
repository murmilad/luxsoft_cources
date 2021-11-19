import { combineReducers } from 'redux'
import {TOGGLE_ACTIVE, FILTER, FIRST_NAME_EDIT, START_LOADING, STOP_LOADING, ADD_DATA, ADD_USER} from '../Constants'

export function grid(state = gridRecords, action){
	switch (action.type) {
		case TOGGLE_ACTIVE:
			let newRecords = [...state.records];
			newRecords[action.value] = {...newRecords[action.value], active: !newRecords[action.value].active};
			return {...state, records: newRecords};
		case FIRST_NAME_EDIT:
			let newEditRecords = [...state.records];
			newEditRecords[action.value.index] = {...newEditRecords[action.value.index], firstName: action.value.value};
			return {...state, records: newEditRecords};
		case FILTER:
			return {...state, filter: action.value};
		case START_LOADING:
			return {...state, loading: true};
		case STOP_LOADING:
			return {...state, loading: false};
		case ADD_DATA:
			
			return {...state,
				records:[...action.value.map((record, i) => {
					if (state.records[i] && state.records[i].active) {
						return {...record, active : state.records[i].active}
					} else {
						return {...record}
					}
				})]
			};
		default:
			return state
	}
}

export function details(state = detailsRecords, action){
	switch (action.type) {
		case START_LOADING:
			return {...state, loading: true};
		case STOP_LOADING:
			return {...state, loading: false};
		case ADD_USER:
				return {...state,
					details:[...action.value]
				};
		default:
			return state
	}
}

let gridRecords = {
	filter:'',
	records: [],
	loading: false
},
detailsRecords = {
	details:[],
	loading: false
};

export const rootReducer = combineReducers({
	details,
	grid
});