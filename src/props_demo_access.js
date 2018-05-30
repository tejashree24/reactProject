import React from 'react';
import {render} from 'react-dom';


class PropsAccess extends React.Component{
	constructor(props){
		super();

		this.state = {
			age: props.initialAge,
			status: 0
		};
	}

	makeMeOlder(){
		this.setState({
			age : this.state.age + 3,
			status : 1
		});
	}
	
	render(){		
		console.log("check",this.props);
		return(
			<div>
				<h3>Name is:{this.props.name}, your Age is: {this.state.age}</h3>
				<p>{this.state.status}</p>
				<button onClick={()=>{this.makeMeOlder()}}>Make Me Older</button>
			</div> 
		);		
	}

}


export default PropsAccess;

//PropTypes allowes you to validate this props