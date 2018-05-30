import React from 'react';
import {Component} from 'react-dom';
import PropsAccess from './props_demo_access.js';

class PropsDemo extends React.Component{
	render(){
		var user ={
			name: "Anna",
			hobbies: ["sports","singing","cooking"]
		};

		return(
			<div>
				<PropsAccess name={"Tejashree"} initialAge={25} user={user}>
					<p>Children</p>
				</PropsAccess>
			</div>
		)
	}
}

export default PropsDemo;