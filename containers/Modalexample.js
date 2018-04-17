import React from 'react';
import {Modal,Button} from 'react-bootstrap';

class Modalexample extends React.Component{

	constructor(props,context){
		super(props,context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			show:false
		};

	}

	handleShow() {
		this.setState({
			show:true
		});
	}

	handleClose() {
		this.setState({
			show:false
		});
	}
	
	render() {
		return (
			<div>
				<Button bsStyle="info" onClick={this.handleShow}>Show Something</Button>

			<Modal show={this.state.show} onHide={this.handleClose}>
				<Modal.Header>
					<Modal.Title>
						Modal Example
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4>Text in a modal</h4>
		            <p>
		              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
		            </p>

				</Modal.Body>
				<Modal.Footer>
					<Button bsStyle="success" onClick={this.handleClose}>Close</Button>
				</Modal.Footer>
			</Modal>
			</div>
			)
	}
}

export default Modalexample;