import React, { useEffect } from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export default function Contact () {


	useEffect(() => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
  }, []);

  return (
    <Form>
    <div className="contactform" style={{fontFamily:'Patrick Hand SC', color: '#41403e'}}>

    

		      <FormGroup>
		        <Label for="exampleEmail"><h1 style={{fontFamily:'Patrick Hand SC', color: '#41403e'}}>Contact Cosy Cabins</h1></Label> <br/> <br/>
		      </FormGroup>
		      <div className="form-row">
		          <FormGroup className="col-md-6">
		            <Label  for="inputfirstname" >Full Name</Label>
		            <Input style={{backgroundColor:'#F7F9FE'}}type="text"  id="inputFirstName" placeholder="Full Name"/>
		          </FormGroup>
		          <FormGroup className="col-md-6">
		            <Label for="inputlastnamed4">E-Mail</Label>
		            <Input style={{backgroundColor:'#F7F9FE'}} type="text"  id="inputLastName" placeholder="E-Mail" />
		          </FormGroup>
		          
		        </div>
		      
		      <br/>
		      <FormGroup>
		        <Label for="exampleText">Write your message</Label>
		        <Input style={{backgroundColor:'#F7F9FE'}} type="textarea" name="text" id="exampleText" placeholder="Please let us know us your thoughts!" />
		      </FormGroup>
		      
		     
		      <br/>
		      <FormGroup>
		        <Label for="exampleSelectMulti">How would you rate your experience with Cosy Cabins?</Label>
		        <Input style={{backgroundColor:'#F7F9FE'}}
		          type="select"
		          name="selectMulti"
		          id="exampleSelectMulti"
		          multiple
		        >
		          <option>1 - awful</option>
		          <option>2 - bad</option>
		          <option>3 - meh</option>
		          <option>4 - good</option>
		          <option>5 - great</option>
		        </Input>
		      </FormGroup>

		       <FormGroup check>
		        <Label check>
		          <Input type="checkbox" /> Send Message!
		        </Label>
		      </FormGroup>
      </div>
    </Form>
  );
}