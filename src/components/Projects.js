import React from 'react';
import ProjectItem from './ProjectItem';
import ProjectStatusActions from '../actions/ProjectStatusActions'

export default class Projects extends React.Component {
	render () {
		var listStyle = {
			margin: '0.5em',
			paddingLeft: 0,
			listStyle: 'none'
		};
		var itemStyle = {
			overflow: 'auto',
			marginBottom: '0.5em',
			padding: '1em',
			boxShadow: '0 0 0.3em .03em rgba(0,0,0,.3)'
		};
		return (
			<ul style={listStyle}>{this.props.projects.map(project =>
				<li key={project.id} style={itemStyle}>
					<ProjectItem task = {project.task}
								 id={project.id}
								 onMove={ProjectStatusActions.move}/>
				</li>
			)}</ul>
		);
	}
}
