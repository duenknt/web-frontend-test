import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NewPost() {
  return (
    <>
      <Container>
        <Form>
          <Form.Group className="mb-3 mt-3">
            <Form.Label className="d-flex justify-content-center">
              <h3>Edit Post</h3>
            </Form.Label>{" "}
            <br />
            <Form.Label>Title</Form.Label>
            <Form.Control placeholder="title" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Content</Form.Label>
            <Form.Control placeholder="Content" />
          </Form.Group>

          <Form.Group className="mt-5 mb-2">
            <hr />
            <Row>
              <Col>
                <Button variant="success">Save</Button>&nbsp;
                <Link to="/Posts">
                  <Button variant="secondary">Cancel</Button>
                </Link>
                &nbsp;
                <Button variant="danger">Delete</Button>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}