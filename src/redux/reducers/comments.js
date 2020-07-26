/*
 * @Descripttion:
 * @version:
 * @Author: june chen
 * @Date: 2020-07-25 22:17:21
 * @LastEditors: june chen
 * @LastEditTime: 2020-07-25 22:35:43
 */
import { ADD_COMMENT } from '../constants';
 const comments = (state=[], action) => {
	switch (action.type) {
		case ADD_COMMENT:
			return [action.data, ...state];
		default:
			return state;
	}
};
export default comments;

