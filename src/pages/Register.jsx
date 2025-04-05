import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { userRegister } from "../redux/userSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { Formik } = formik;
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required("Please enter your full name")
      .min(3, "Full name must be at least 3 characters"),
    email: yup.string().required("Please enter your email").email("Invalid email format"),
    password: yup
      .string()
      .required("Please enter your password")
      .min(8, "Password must be at least 8 characters"),
    phone: yup
      .string()
      .required("Please enter your phone number")
      .min(10, "Phone number must be at least 10 characters")
      .matches(/^[0-9]{10}$/, "Phone number must contain only digits"),
  });

  

  return (
    <Container>

    <h1 className="text-center">Register</h1>
        <Formik 
      validationSchema={schema}
      onSubmit={(values) =>{
        dispatch(userRegister(values))
        toast.success("Register sucess...")
        navigate('/Login')
      }
        
      }
      initialValues={{
       fullName : "",
        email: "",
        password: "",
        phone: "",
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Row md={4} className="justify-content-center">
            <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3" >
            <Form.Group as={Col} controlId="validationFormik01">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
                isValid={touched.fullName && !errors.fullName}
                isInvalid={!!errors.fullName}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">{errors.fullName}</Form.Control.Feedback>
            </Form.Group>
            </Row>
            <Row>
            <Form.Group as={Col} controlId="validationFormik02">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>
            </Row>

            <Row>
            <Form.Group as={Col}  controlId="validationFormikphone">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="phone"
                placeholder="phone number"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                isValid={touched.phone && !errors.phone}
                isInvalid={!!errors.phone}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
            </Form.Group>
          </Row>

            <Row>
            <Form.Group as={Col}  controlId="validationFormik03">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isValid={touched.password && !errors.password}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button type="submit" className="w-100 mt-3 mb-5">Submit form</Button>
        </Form>
        </Row>
      )}
    </Formik>
    </Container>
    
  );
};

export default Register;
