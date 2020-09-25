import * as actionTypes from '../actionTypes';

const initialState = {
	data: [],
};

const table = (state = initialState, action) => {

	switch (action.type) {

		case actionTypes.SET_DATA:
			state.data = action.payload;
			return { ...state };

		case actionTypes.CHANGE_DATA:
			const { obj, id } = action.payload
			const newData = state.data.map((item) => {
				if (item.id == id) {
					item = obj;
				}
				return item;
			});
			state.data = newData;
			return { ...state };

		default:
			return state;

	}
};

export default table;