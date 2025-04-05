import { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [validated, setValidated] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassoword] = useState("");
  const localStorageData = JSON.parse(localStorage.getItem("users"));
  const navigator = useNavigate();
  
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const loginDetails = {
        email,
        password,
      };
      console.log(loginDetails);

      const user = localStorageData.find((usr)=> usr.email === loginDetails.email)
      // console.log('USER--',user);
      

      if(!user){
        return toast.error("No user found!")
        
      }
      if(user.password !== loginDetails.password){
        return toast.error("incorrect password!")
      }

      toast.success("login sucess..")

      navigator("/Admin/Pages")

    }

    setValidated(true);
  };

  return (
    <>
      <Container>
        <Row>
          <Col className="text-center">
            <h1>Login</h1>
          </Col>
        </Row>
        <Row md={"3"} className="justify-content-center">
          <Col>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="validationCustomUsername">
                  <Form.Label>Email</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      aria-describedby="inputGroupPrepend"
                      required
                      onChange={(event) => setemail(event.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a email.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>
                      Email looks good.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  controlId="validationCustom03"
                  className="position-relative"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                    onChange={(event) => setpassoword(event.target.value)}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    Please provide a password.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback tooltip>
                    Password Looks Good.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Button className="w-100 mb-3 mt-3" type="submit">
                Login
              </Button>
              <Row>
                <Col className="text-center mb-3">
                  If you don't have an account,
                  <Link as="Link" to={"/Register"}>
                    Register here
                  </Link>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
