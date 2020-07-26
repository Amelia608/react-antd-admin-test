/*
 * @Descripttion:
 * @version:
 * @Author: june chen
 * @Date: 2020-05-20 22:42:07
 * @LastEditors: june chen
 * @LastEditTime: 2020-07-25 22:14:59
 */
import * as actionTypes from '../constants/index';
const setBreadCrumb = data => {
	return {
		type: actionTypes.SET_BREADCRUMB,
		data
	};
};
const setTags = data => {
	return {
		type: actionTypes.SET_TAGS,
		data
	};
};
const setTheme = data => {
	return {
		type: actionTypes.SET_THEME,
		data
	};
};
const setCollapse = data => {
	return {
		type: actionTypes.SET_COLLAPSE,
		data
	};
};

export { setBreadCrumb, setTags, setTheme, setCollapse };
