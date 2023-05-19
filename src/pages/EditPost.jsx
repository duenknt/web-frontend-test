import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const baseURL = "http://dev.opensource-technology.com:3000/api/posts/[post_id]"

export default function NewPost() {

  const [get, setGet] = useState([]);
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  const handleSave = () => {
    axios
      .post(
        baseURL,
        {
          title: title,
          content: content,
          published: false,
        },
      )
      .then((response) => {
        setGet(response.data);
        console.log(get);
      })
      .catch((e) => console.log(e));
  };


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
            <Form.Control placeholder="title" onChange={(e) => setTitle(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Content</Form.Label>
            <Form.Control placeholder="Content" onChange={(e) => setContent(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mt-5 mb-2">
            <hr />
            <Row>
              <Col>
                <Button variant="success" onClick={handleSave}>Save</Button>&nbsp;
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