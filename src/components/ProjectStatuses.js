import React from 'react';
import ProjectStatus from './ProjectStatus';

export default ({projectStatuses}) => { 
	var wrapper = {
		textAlign: 'center'
	};
	var statusStyle = {
		display: 'inline-block',
		margin: '1em',
		backgroundColor: '#efefef',
		border: '1px solid #ccc',
		minWidth: '20em',
		textAlign: 'left',
		verticalAlign: 'top'
	};
	return (
		<div style={wrapper} className="project-statuses">{projectStatuses.map(projectStatus =>
			<ProjectStatus  style ={statusStyle} key={projectStatus.id} projectStatus={projectStatus}/>
		)}</div>
)}