import { useState } from "react";
import { Button, Col, Form, InputGroup, Row, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addProducts } from "../redux/addProductSlice";
import { toast } from "react-toastify";

function AddProduct() {
  const [validated, setValidated] = useState(false);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDiscription, setProductDiscription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const addedProductDetails = {
        productName,
        productDiscription,
        imageUrl,
        productPrice,
      };

      dispatch(addProducts(addedProductDetails));
      console.log("Dispatched:", addedProductDetails);
      toast.success("Product added sucessfully!")
    }

    setValidated(true);
  };

  return (
    <div className="d-flex justify-content-center align-items-center ">
      <Container className="w-50 p-4 shadow rounded bg-white">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="text-center mb-3">
            <Col>
              <h4>Add Product</h4>
            </Col>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="validationCustom01">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter product name"
                onChange={(event) => setProductName(event.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Enter product name.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="validationCustom02">
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter product price"
                onChange={(event) => setProductPrice(event.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Enter product price.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="validationCustom03">
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter description"
                onChange={(event) => setProductDiscription(event.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Enter description.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="validationCustom04">
              <Form.Label>Image URL</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text>URL</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Enter image URL"
                  required
                  onChange={(event) => setImageUrl(event.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid URL.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>

          <Row>
            <Col>
              <Button className="w-100" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default AddProduct;
