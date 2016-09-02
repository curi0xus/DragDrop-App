import storage from '../../libs/storage';
import persist from '../../libs/persist';
import ProjectItemStore from '../../stores/ProjectItemStore';
import ProjectStatusStore from '../../stores/ProjectStatusStore';

export default alt => {
	alt.addStore('ProjectItemStore', ProjectItemStore);
	alt.addStore('ProjectStatusStore', ProjectStatusStore);
	persist(alt, storage(localStorage), 'Layout')
}