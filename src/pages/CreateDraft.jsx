import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const baseURL = "http://dev.opensource-technology.com:3000/api/posts";

export default function CreateDraft() {
  const [post, setPost] = useState([]);
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
        { "Content-Type": "application-json" }
      )
      .then((response) => {
        setPost(response.data);
        console.log(response);
      })
      .catch((e) => console.log(e));
  };

  const handlePublish = () => {
    axios
      .patch(
        baseURL + "/" + post?.id,
        {
          title: title,
          content: content,
          published: true,
        },
        { "Content-Type": "application-json" }
      )
      .then(() => console.log("Publish succeed"))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <Container>
        <Form>
          <Form.Group className="mb-3 mt-3">
            <Form.Label className="d-flex justify-content-center">
              <h3>New Post</h3>
            </Form.Label>
            <br />
            <Form.Label>Title</Form.Label>
            <Form.Control
              placeholder="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Content</Form.Label>
            <Form.Control
              placeholder="Content"
              onChange={(e) => setContent(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mt-5 mb-2">
            <hr />
            <Row>
              <Col>
                <Link to="/Draft" onClick={handleSave}>
                  <Button variant="success">Save</Button>
                </Link>
                &nbsp;
                <Link to="/Posts">
                  <Button variant="secondary">Cancel</Button>
                </Link>
                &nbsp;
                <Button variant="outline-info" onClick={handlePublish}>
                  Publish Now
                </Button>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}