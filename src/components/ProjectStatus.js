//ProjectStatus will render a name and associated projectItems
import React from 'react';

import {compose} from 'redux';
import {DropTarget} from 'react-dnd';
import ItemTypes from '../constants/itemTypes';
import connect from '../libs/connect';
import ProjectItemActions from '../actions/ProjectItemActions';
import ProjectStatusActions from '../actions/ProjectStatusActions';
import Projects from './Projects';
import ProjectCounter from './ProjectCounter';


const ProjectStatus = ({
	connectDropTarget, projectStatus, projects, 
	ProjectStatusActions, ProjectItemActions, ...props
}) => {
	var headerStyle = {
		overflow :'auto',
		padding: '1em',
		color: 'efefef',
		backgroundColor: '#333',
		display: 'flex',
		webKitFlex: '1',
		flexDirection: 'row',
		justifyContent: 'space-between'

	};
	var nameStyle = {
		marginTop: 10,
		fontSize: 30,
		color: 'white'
	};
	var count = selectProjectsByIds(projects, projectStatus.projects).length;

	return connectDropTarget(
		<div {...props}>
			<div style={headerStyle}>
				<div style={nameStyle}>{projectStatus.name}</div>
				<ProjectCounter count={count}/>
			</div>
			<Projects projects={selectProjectsByIds(projects, projectStatus.projects)}/>
		</div>
	);
};

function selectProjectsByIds(allProjects, projectIds) {
	return projectIds.reduce((projects, id) =>
		projects.concat(allProjects.filter(projectItem => projectItem.id === id)), []
	);
}

const projectItemTarget = {
	hover(targetProps, monitor) {
		const sourceProps = monitor.getItem();
		const sourceId = sourceProps.id;

		if(!targetProps.projectStatus.projects.length) {
			ProjectStatusActions.attachToProjectStatus({
				projectStatusId: targetProps.projectStatus.id,
				projectItemId: sourceId
			});
		}
	}
};

export default compose(
	DropTarget(ItemTypes.PROJECT_ITEM, projectItemTarget, connect => ({
		connectDropTarget: connect.dropTarget()
	})),
	connect (({projects}) => ({
		projects
	}), {
		ProjectItemActions, 
		ProjectStatusActions
	})
)(ProjectStatus)






