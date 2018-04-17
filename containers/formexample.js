import React from 'react';
import {FormGroup,ControlLabel,FormControl,HelpBlock,Checkbox,Radio} from 'react-bootstrap';


function FieldGroup({id,label,help,...props}){
	return(
		<FormGroup controlId= {id}>
			<ControlLabel>{label}</ControlLabel>
			<FormControl {...props} />
			{help && <HelpBlock>{help}</HelpBlock>}
		</FormGroup>
		);
}

const formInstance = (
	<form>
		<FieldGroup
	      id="formControlsText"
	      type="text"
	      label="Text"
	      placeholder="Enter text"
	    />
	    <FieldGroup
	      id="formControlsEmail"
	      type="email"
	      label="Email address"
	      placeholder="Enter email"
	    />
	    <FieldGroup 
	      id="formControlsPassword" 
	      label="Password" 
	      type="password" 
	    />
	    <FieldGroup
	      id="formControlsFile"
	      type="file"
	      label="File"
	      help="Example block-level help text here."
	    />

	<Checkbox checked readOnly>
		Checkbox
	</Checkbox>

	<Radio checked readOnly>
		Radio
	</Radio>

	<FormGroup>
		<ControlLabel>
			<Checkbox inline> 1 </Checkbox>
			<Checkbox inline> 2 </Checkbox>
			<Checkbox inline> 3 </Checkbox>
		</ControlLabel>
	</FormGroup>

	<FormGroup>
		<Radio name="radiogroup" inline>
			1
		</Radio>
		<Radio name="radiogroup" inline>
			2
		</Radio>
		<Radio name="radiogroup" inline>
			3
		</Radio>
	</FormGroup>

	<FormGroup controlId="formControlsSelect">
		<ControlLabel>Select</ControlLabel>
		<FormControl componentClass="select" placeholder="select">
			<option value="select">select city</option>
        	<option value="other">Mumbai</option>
        	<option value="other">pune</option>
        	<option value="other">delhi</option>
		</FormControl>
	</FormGroup>

	<FormGroup controlId="formControlsTextarea">
      <ControlLabel>Textarea</ControlLabel>
      <FormControl componentClass="textarea" placeholder="textarea" />
    </FormGroup>

	<FormGroup>
		<ControlLabel>TextArea</ControlLabel>
		<FormControl.Static>email@example.com</FormControl.Static>
	</FormGroup>

	
	</form>
	)


class Formexample extends React.Component{
	render(){
		return (<div className="box">{formInstance}</div>);
	}
}

export default Formexample;