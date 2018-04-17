import React,{Component} from 'react';
// import {Alert} from 'react-bootstrap';
import {Button,Alert} from 'react-bootstrap';

class AlertDismissable extends React.Component{
	constructor(props,context){
		super(props,context);

		this.handleDismiss = this.handleDismiss.bind(this);
		this.handleShow = this.handleShow.bind(this);

		this.state = {
			show:false
		};
	}

	handleDismiss(){
		this.setState({
			show:false
		});
	}

	handleShow() {
		console.log('Handle Show');
		this.setState({
			show:true
		});
	}

	render(){
		if(this.state.show)
		{
			return(
				<div>
					<Alert bsStyle="info" onDismiss={this.handleDismiss}>
						<h4>Oh snap! You got an error!</h4>
				          <p>
				            Change this and that and try again. Duis mollis, est non commodo
				            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
				            Cras mattis consectetur purus sit amet fermentum.
				          </p>
				          <p>
				          	<Button bsStyle="success" onClick={this.handleDismiss}>Hide Alert</Button>
				          </p>
					</Alert>
				</div>
				);
		}

		return <Button bsStyle="danger" onClick={this.handleShow}>Show Alert</Button>;
	}
}

export default AlertDismissable;