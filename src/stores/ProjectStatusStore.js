import update from 'react-addons-update';
import ProjectStatusActions from '../actions/ProjectStatusActions';

export default class ProjectStatusStore {
	constructor(){
		this.bindActions(ProjectStatusActions);
		this.projectStatuses = [
			{
				id: 1,
				name: 'To Do',
				projects: []
			},
			{
				id:2,
				name: 'In Progress',
				projects: []
			},
			{
				id:3,
				name: 'Done',
				projects: []
			}
		];
	}

	attachToProjectStatus({projectStatusId, projectItemId}) {
		this.setState({
			projectStatuses: this.projectStatuses.map(projectStatus => {
				if(projectStatus.projects.includes(projectItemId)) {
					projectStatus.projects = projectStatus.projects.filter(projectItem=>
						projectItem!== projectItemId);
				}
				if(projectStatusId === projectStatus.id) {
					projectStatus.projects = projectStatus.projects.concat(
						[projectItemId]
					);
				}
				return projectStatus;
			})
		});
	}

	detachFromProjectStatus({projectStatusId, projectItemId}) {
		this.setState({
			projectStatuses: this.projectStatuses.map(projectStatus => {
				if(projectStatus.id === projectStatusId) {
					projectStatus.projects = projectStatus.projects.filter(projectItem =>
						projectItem !== projectItemId
					);
				}
				return projectStatus;
			})
		});
	}

	move({sourceId, targetId}) {
		const projectStatuses = this.projectStatuses;
		const sourceProjectStatus = projectStatuses.filter(projectStatus =>
			projectStatus.projects.includes(sourceId))[0];
		const targetProjectStatus = projectStatuses.filter(projectStatus =>
			projectStatus.projects.includes(targetId))[0];
		const sourceProjectItemIndex = sourceProjectStatus.projects.indexOf(sourceId);
		const targetProjectItemIndex = targetProjectStatus.projects.indexOf(targetId);

		if(sourceProjectStatus === targetProjectStatus) {
			sourceProjectStatus.projects = update(sourceProjectStatus.projects, {
				$splice: [
					[sourceProjectItemIndex, 1],
					[targetProjectItemIndex, 0, sourceId]
				]
			});
		} else {
			sourceProjectStatus.projects.splice(sourceProjectItemIndex,1);
			targetProjectStatus.projects.splice(targetProjectItemIndex, 0, sourceId);
		}
		this.setState({projectStatuses});
	}
}















