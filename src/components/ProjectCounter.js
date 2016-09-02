import React from 'react';
import {Well} from 'react-bootstrap';

export default ({count}) => {
	var wellStyle ={
		textAlign: 'center'
	}
	var project;
	if(count>1) {
		project = 'PROJECTS';
	} else {
		project = 'PROJECT';
	}
	return (
		<Well style={wellStyle}>
			<h4><b>{count}</b></h4>
			{project}
		</Well>
)}