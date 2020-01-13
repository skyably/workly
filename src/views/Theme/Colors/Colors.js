import React, { Component } from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';

class Forms extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      dropdownOpen: new Array(6).fill(false),
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  toggleDropdown(i) {
    const newArray = this.state.dropdownOpen.map((element, index) => {
      return (index === i ? !element : false);
    });
    this.setState({
      dropdownOpen: newArray,
    });
  }


  render() {
    return (
      <div className="animated fadeIn">
        
        <Row>
        <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>Employee Basic Details</strong>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="inputIsValid">Employee Name</Label>
                  <Input type="text" valid id="inputIsValid" />
                  <FormFeedback valid>Success</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="inputIsValid">Email</Label>
                  <Input type="text" valid id="inputIsValid" />
                  <FormFeedback valid>Sucess</FormFeedback>
                </FormGroup>
                
              </CardBody>
            </Card>

         
          </Col>

          
       
          <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>Woking Type</strong>
              </CardHeader>
              <CardBody>
               
                  <Dropdown isOpen={this.state.dropdownOpen[1]} toggle={() => {this.toggleDropdown(1);}} >
                  <DropdownToggle style={{width:window.innerWidth*37.5/100,marginTop:30}}>
                   Role
                  </DropdownToggle>
                  <DropdownMenu style={{width:window.innerWidth*37.5/100}}>
                    <DropdownItem>Developer</DropdownItem>
                    <DropdownItem>Tester</DropdownItem>
                    <DropdownItem>Designer</DropdownItem>
                    <DropdownItem>Database Developer</DropdownItem>
                  
                  </DropdownMenu>
                 
                </Dropdown>
                <Label htmlFor="inputIsInvalid" style={{color:'#f86c6b',fontSize:11}}>PLease Select Atleast 1 One </Label>
                
               
                  <Dropdown isOpen={this.state.dropdownOpen[2]} toggle={() => {this.toggleDropdown(2);}} >
                  <DropdownToggle style={{width:window.innerWidth*37.5/100,marginTop:37}}>
                   Status
                  </DropdownToggle>
                  <DropdownMenu style={{width:window.innerWidth*37.5/100}}>
                    <DropdownItem>Active</DropdownItem>
                    <DropdownItem>Inactive</DropdownItem>
                  </DropdownMenu>
                 
                </Dropdown>
                <Label htmlFor="inputIsInvalid" style={{color:'#f86c6b',fontSize:11}}>PLease Select Atleast 1 One </Label>
             
              </CardBody>
              <Label htmlFor="inputIsInvalid" style={{color:'#f86c6b',fontSize:11}}></Label>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="12">
            <Card>
              <CardHeader>
                <strong>Under Guidance </strong> 
              </CardHeader>
              <CardBody>
              <Row>

              <Col xs="12" sm="4">
            <Card>
              <CardBody>
              <Dropdown isOpen={this.state.dropdownOpen[3]} toggle={() => {this.toggleDropdown(3);}} >
                  <DropdownToggle style={{width:window.innerWidth*22.5/100,marginTop:30}}>
                   HR
                  </DropdownToggle>
                  <DropdownMenu style={{width:window.innerWidth*22.5/100}}>
                    <DropdownItem>Retu Malik</DropdownItem>
                    <DropdownItem>Roshan Kumar</DropdownItem>
                    <DropdownItem>Vaibhav Singh</DropdownItem>  
                  </DropdownMenu>
                 
                </Dropdown>
                <Label htmlFor="inputIsInvalid" style={{color:'#f86c6b',fontSize:11}}>PLease Select Atleast 1 One </Label>
              </CardBody>
              </Card>
            </Col>
              <Col xs="12" sm="4">
            <Card>
            <CardBody>
                <Dropdown isOpen={this.state.dropdownOpen[4]} toggle={() => {this.toggleDropdown(4);}} >
                  <DropdownToggle style={{width:window.innerWidth*22.5/100,marginTop:30}}>
                   Manager koko
                  </DropdownToggle>
                  <DropdownMenu style={{width:window.innerWidth*22.5/100}}>
                    <DropdownItem>Vijay Singh</DropdownItem>
                    <DropdownItem>Harsh Yadav</DropdownItem>
                    <DropdownItem>Himanshu Singh</DropdownItem>  
                  </DropdownMenu>
                 
                </Dropdown>
                <Label htmlFor="inputIsInvalid" style={{color:'#f86c6b',fontSize:11}}>PLease Select Atleast 1 One </Label>
                
              </CardBody>
              </Card>
            </Col>
             <Col xs="12" sm="4">
            <Card>
            <CardBody>
                <Dropdown isOpen={this.state.dropdownOpen[5]} toggle={() => {this.toggleDropdown(5);}} >
                  <DropdownToggle style={{width:window.innerWidth*22.5/100,marginTop:30}}>
              Check jdsklk
                  </DropdownToggle>
                  <DropdownMenu style={{width:window.innerWidth*22.5/100}}>
                    <DropdownItem>Ankita Singh</DropdownItem>
                    <DropdownItem>Aman Yadav</DropdownItem>
                    <DropdownItem>Utkarsh Singh</DropdownItem>  
                  </DropdownMenu>
                 
                </Dropdown>
                <Label htmlFor="inputIsInvalid" style={{color:'#f86c6b',fontSize:11}}>PLease Select Atleast 1 One </Label>
                </CardBody>
              </Card>
            </Col>
          
          
          </Row>
             
          <Row style={{justifyContent: 'flex-end'}}>

<Col xs="12" sm="3" >


              <Col col="2" sm="2" md="2" xl className="mb-3 mb-xl-0" >
                <Button  block outline color="success">Update</Button>
              </Col>
  
</Col>


</Row>

              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6">

         
          </Col>
          
        </Row>

      </div>
    );
  }
}

export default Forms;
