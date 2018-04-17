import React,{Component} from 'react';
import {Modal,Button} from 'react-bootstrap';

class Modaldemo extends React.Component{
	render(){
		return (
				<div className="static-modal">
				 	<Modal.Dialog>
				 		<Modal.Header>
				 			<Modal.Title>
				 				Modal title here
				 			</Modal.Title>
				 		</Modal.Header>
				 		<Modal.Body>
				 			Modal Body here
				 		</Modal.Body>
				 		<Modal.Footer>
				 			<Button>Close</Button>
      						<Button bsStyle="primary">Save changes</Button>
				 		</Modal.Footer>
				 	</Modal.Dialog>
				</div>
			)
	}
}

export default Modaldemo;