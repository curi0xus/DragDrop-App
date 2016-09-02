import React from 'react';
import {compose} from 'redux';
import {DragSource, DropTarget} from 'react-dnd';
import ItemTypes from '../constants/itemTypes';

const ProjectItem = ({
	connectDragSource, connectDropTarget, task, 
	onMove, isDragging, isOver, id, children, ...props
}) => {
	return compose(connectDragSource, connectDropTarget)(
		<div {...props} style={{ opacity: isDragging || isOver ? 0 : 1}}>
			{task}
		</div>
	);
};

const projectItemSource = {
	beginDrag(props) {
		return {
			id: props.id
		};
	}
};

const projectItemTarget = {
	hover(targetProps, monitor) {
		const targetId = targetProps.id;
		const sourceProps = monitor.getItem();
		const sourceId = sourceProps.id;

		if(sourceId !== targetId) {
			targetProps.onMove({sourceId, targetId});
		}
	}
};


export default compose(
	DragSource(ItemTypes.PROJECT_ITEM, projectItemSource, (connect,monitor) => ({
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	})),
	DropTarget(ItemTypes.PROJECT_ITEM, projectItemTarget, (connect, monitor) =>({
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver()
	}))
)(ProjectItem)