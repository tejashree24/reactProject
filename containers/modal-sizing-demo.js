import React from 'react';
import {Modal,ButtonToolbar,Button} from 'react-bootstrap'
class Mysmallmodal extends React.Component{

	render(){
		return(
			<Modal 
				{...this.props}
				bsSize="small"
				area-labelledby="contained-modal-title-sm">


				 <Modal.Header>
		          	<Modal.Title id="contained-modal-title-sm">Modal heading</Modal.Title>
		        	</Modal.Header>
		        	<Modal.Body>
		          	<h4>Wrapped Text</h4>
			          <p>
			            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
			            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
			            ac consectetur ac, vestibulum at eros.
			          </p>
			        </Modal.Body>
			        <Modal.Footer>
			          <Button onClick={this.props.onHide}>Close</Button>
			        </Modal.Footer>
			</Modal>
			);	
	}
}

class Mylargemodal extends React.Component{

	render(){
		return(
			<Modal 
				{...this.props}
				bsSize="large"
				area-labelledby="contained-modal-title-lg">

				 <Modal.Header>
		          	<Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
		        	</Modal.Header>
		        	<Modal.Body>
		          	<h4>Wrapped Text</h4>
			          <p>
			            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
			            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
			            ac consectetur ac, vestibulum at eros.
			          </p>
			        </Modal.Body>
			        <Modal.Footer>
			          <Button onClick={this.props.onHide}>Close</Button>
			        </Modal.Footer>
			</Modal>
			);	
	}
}

class Modalsizingdemo extends React.Component{
	constructor(props,context){
		super(props,context);
		this.state= {
			smShow:false,
			smHide:false
		};

	}

	render(){
		let smClose = () => this.setState({smShow:false});
		let lgClose = () => this.setState({smShow:false});

		return (
	      <ButtonToolbar>
	        <Button
	          bsStyle="primary"
	          onClick={() => this.setState({ smShow: true })}
	        >
	          Launch small demo modal
	        </Button>
	        <Button
	          bsStyle="primary"
	          onClick={() => this.setState({ lgShow: true })}
	        >
	          Launch large demo modal
	        </Button>

	        <Mysmallmodal show={this.state.smShow} onHide={smClose} />
	        <Mylargemodal show={this.state.lgShow} onHide={lgClose} />
	      </ButtonToolbar>
	    );
	}
}

export default Modalsizingdemo;