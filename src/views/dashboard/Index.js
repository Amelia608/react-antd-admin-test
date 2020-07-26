/*
 * @Descripttion:
 * @version:
 * @Author: june chen
 * @Date: 2020-05-20 22:42:07
 * @LastEditors: june chen
 * @LastEditTime: 2020-07-26 10:01:05
 */
import React, { Component } from 'react';
import { Input, Button, message, Form } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { add_comment } from '@/redux/actions/comments';
import '@/assets/css/dashed';

class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			comment: ''
		};
	}
	handleInputChange = event => {
		const target = event.target;
		const { value, name } = target;

		this.setState({
			[name]: value
		});
	};
	submit = () => {
		let { username, comment } = this.state;
		if (!(username && comment)) {
			message.warning('必填');
			return;
		}
		this.props.add_comment({ username, comment });
		this.setState({
			username: '',
			comment: ''
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err,values)=>{
			if(err) return
			this.props.add_comment(values);
			this.props.form.resetFields()
		})
	};
	render() {
		const { comments } = this.props;
		const { TextArea } = Input;
		const { getFieldDecorator } = this.props.form;
		return (
			<div className="shadow-radius">
				<div>
					<h1>这是一个通用的后台管理系统，基于 react+react-router+react-redux+antd 开发。</h1>
					<p>基本功能包含：登录、登出、数据存储、路由权限控制、Echarts、数据表格等，UI采用 Ant Design 风格。</p>
					<div className="form-wrapper">
						<Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
							<Form.Item label="评论人名字">
								{getFieldDecorator('username', {
									rules: [{ required: true, message: '请输入评论人名字!' }]
								})(<Input placeholder="请输入用户名" allowClear />)}
							</Form.Item>
							<Form.Item label="用户名">
								{getFieldDecorator('comment', {
									rules: [{ required: true, message: '请输入评论!' }]
								})(<TextArea row={4} placeholder="请输入评论" allowClear />)}
							</Form.Item>
							<Form.Item wrapperCol={{ span: 12, offset: 5 }}>
								<Button type="primary" htmlType="submit">
									提交
								</Button>
							</Form.Item>
						</Form>
					</div>
					<ul>
						{comments.map((item, index) => (
							<li key={index}>
								{item.username}||{item.comment}
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
	add_comment: data => {
		dispatch(add_comment(data));
	}
});
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Index));
