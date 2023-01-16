import React , {useState} from 'react';
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";


const ContactForm = () => {
    
  const [contact,setContact]= useState({
    name:"",
    email:"",
    subject:"",
    message: ""
  })
  
 


  function handleForm(event) {
    const{value,name}=event.target;
    setContact(preValue=>{
        return{
            ...preValue,
            [name]:value
            
        }
    })
    
    console.log(contact);
    
    
    };

    function sendMail(event){
        event.preventDefault();
        let formData = new FormData();
        formData.append('name',contact.name)
        formData.append('email',contact.email)
        formData.append('subject',contact.subject)
        formData.append('message',contact.message)
       
        console.log(formData)
        axios.post('https://maharjanp.com.np/sendmail/',
        {data: formData,
        config: {headers: {'Content-Type':'multipart/form-data'}}
            
        })
        .then((response)=>{
            console.log(response)
        })
        setContact({
            name:"",
            email:"",
            subject:"",
            message: ""
        })


    }
    
      
  


  return (
    <Form onSubmit={handleForm} >
            <Row>
              <Col sm={12} md={6}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Your Name"
                  className="mb-3"
                >
                  
                  <Form.Control type="name" name="name" autoComplete="off" onChange={handleForm} value={contact.name}  />
                </FloatingLabel>
              </Col>
              <Col sm={12} md={6}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control type="email" name="email" autoComplete="off" onChange={handleForm} value={contact.email} />
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col><FloatingLabel
              controlId="floatingInput"
              label="Subject"
              className="mb-3"
            >
              <Form.Control type="text" name="subject" autoComplete="off" onChange={handleForm} value={contact.subject}/>
            </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col><FloatingLabel
              controlId="floatingtextarea"
              label="Message"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                type="text"
                autoComplete="off"
                name="message"
                onChange={handleForm}
                value={contact.message}
                style={{ height: "100px" }}
              />
            </FloatingLabel>
              </Col>
            </Row>
            
            <Row className="justify-content-center mt-4">
              <Col sm={12} className="d-flex justify-content-center">
                <Button variant="primary" type="submit" onClick={sendMail} >
                  Send Message
                  
                </Button>
              </Col>
            </Row>
          </Form>
  )
}

export default ContactForm