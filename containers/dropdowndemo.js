import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {ButtonToolbar,DropdownButton,MenuItem} from 'react-bootstrap';

const BUTTONS = ['Default','Primary','Success','Info','Warning','Danger'];

function renderDropdownButton(title,i){
  return (
      <DropdownButton
        bsStyle={title.toLowerCase()}
        title={title}
        key={i}
        id={`dropdown-basic-${i}`}
        >
        <MenuItem eventKey="1">Action</MenuItem>
        <MenuItem eventKey="2">Another Action</MenuItem>
        <MenuItem eventKey="3" active> Active Item </MenuItem>
        <MenuItem divider/>
        <MenuItem eventKey="4">Separated link</MenuItem>        
      </DropdownButton>

    );
}

const buttonsInstance = (
  <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>
  )

class Dropdowndemo extends React.Component{
  render(){
    return (
        <div>
          {buttonsInstance}
        </div>
      )
  }
}

export default Dropdowndemo;