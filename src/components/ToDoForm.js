import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Form, FormControl, FormGroup} from 'react-bootstrap';

export default class ToDoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			task: ''
		};
	}
	render() {
		var formStyle = {
			padding: 10,
			margin: 10
		};
		return (
			<form style={formStyle} onSubmit={this.handleSubmit}>
				<button type='submit'> Add </button>
				<input type='text'
						ref='task'
						placeholder='Add a new project'
						onChange={this.onChange}
						value={this.state.task}/>
			</form>
		);
	}

	handleSubmit = (onSubmitEvent) => {
		onSubmitEvent.preventDefault();
		this.props.onFormSubmit(this.state.task);
		this.setState({task: ''});
		ReactDOM.findDOMNode(this.refs.task).focus();
		return;
	}
	
	onChange = (textInput) => {
		this.setState({
			task: textInput.target.value
		});
	}
}


































