import React from "react";
import uuid from 'uuid';
import {compose} from 'redux';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import ToDoForm from './ToDoForm';
import connect from '../libs/connect';
import ProjectItemActions from '../actions/ProjectItemActions';
import ProjectStatusActions from '../actions/ProjectStatusActions';
import ProjectStatuses from './ProjectStatuses';
import ProjectCounter from './ProjectCounter';


const Layout = ({projects, ProjectStatusActions, projectStatuses}) => {
	const outerStyle = {
			display: 'flex',
			webKitFlex: '1',
			flexDirection: 'row',
			justifyContent: 'space-between'
		};
	const counterBlock = {
		textAlign: 'center',
		marginRight: 20
	}

	const addProject = (newTask) => {
		const projectId = uuid.v4();
		ProjectItemActions.create({
			id: projectId,
			task: newTask
		});
		ProjectStatusActions.attachToProjectStatus({
			projectStatusId: 1,
			projectItemId: projectId
		});
	};
	const arrayOfLengths = projectStatuses.map(projectStatus => 
		projectStatus.projects.length);
	const count = arrayOfLengths.reduce((a,b) => a+b, 0);
	return (
		<div>
			<div style={outerStyle}>
				<ToDoForm onFormSubmit={addProject}/>
				<div style={counterBlock}>
					<h2><b>TOTAL</b></h2>
					<ProjectCounter count={count}/>
				</div>
			</div>
			<ProjectStatuses projectStatuses={projectStatuses}/>
		</div>
	);
}

export default compose(
	DragDropContext(HTML5Backend),
	connect(({projectStatuses}) => ({
	projectStatuses}), {
	ProjectStatusActions,
		ProjectItemActions
})
)(Layout)