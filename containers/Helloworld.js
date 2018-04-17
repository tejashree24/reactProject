import React from 'react';
import { Button } from 'react-bootstrap';

class Helloworld extends React.Component {
    render() {
    	return (
    		<div>
    		<Button bsStyle="danger">Hello World Danger</Button>
    		<Button bsStyle="primary">Hello World Primary</Button>
    		<Button bsStyle="success">Hello World Success</Button>
    		</div>
    		)
    }
}
export default Helloworld;