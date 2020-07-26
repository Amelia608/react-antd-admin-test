/*
 * @Descripttion:
 * @version:
 * @Author: june chen
 * @Date: 2020-05-20 22:42:07
 * @LastEditors: june chen
 * @LastEditTime: 2020-07-25 22:21:52
 */
import { combineReducers } from 'redux';
import userInfo from './userInfo';
import tagList from './tagList';
import comments from './comments'
import { breadCrumb, tags, theme, collapse } from './setting';
export default combineReducers({ userInfo, tagList, breadCrumb, tags, theme, collapse,comments });
