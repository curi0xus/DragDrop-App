import ProjectItemActions from '../actions/ProjectItemActions';

export default class ProjectItemStore {
	constructor() {
		this.bindActions(ProjectItemActions);
		this.projects =[];
	}

	create(project) {
		this.setState({
			projects: this.projects.concat(project)
		});
	}
}