import axios from "axios";
import "./App.css";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import Form from "react-bootstrap/Form";

const baseURL = "http://dev.opensource-technology.com:3000/api";

export default function App() {
  const [get, setGet] = useState([]);

  useEffect(() => {
    axios.get(`${baseURL}/posts`).then((response) => {
      setGet(response.data.posts);
      console.log('ดูข้อมูล', response.data.posts);
    });
  }, []);

  function createPost() {}
  function updatePost() {}
  function deletePost() {}

  if (!get) return null;

  return (
    <>
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col md={6}>
              <Nav variant="pills" className="flex-row">
                <Nav.Item>
                  <Nav.Link eventKey="first">Post</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Drafe</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <Button onClick={createPost}>CreatePost</Button>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <br />
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    <Col>
                      {get.map((item, index) => (
                        <>
                          <Card className="p-3">
                            <h3 key={index}>{item.title}</h3>
                            <h6 className="mb-3" key={index}>
                              {item.content}
                            </h6>
                            <Row>
                              <Col>
                                <h6>{item.created_at}</h6>
                              </Col>
                              <Col className="d-flex justify-content-end">
                                <Button size="sm">Edit</Button>
                              </Col>
                            </Row>
                          </Card><br />
                        </>
                      ))}
                    </Col>
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <Row>
                    <Col>
                      {get.map((item, index) => (
                        <>
                          <Card className="p-3">
                            <h3 key={index}>{item.title}</h3>
                            <h6 className="mb-3" key={index}>
                              {item.content}
                            </h6>
                            <Row>
                              <Col>
                                <h6>{item.created_at}</h6>
                              </Col>
                              <Col className="d-flex justify-content-end">
                                <Button size="sm" onClick={updatePost}>Edit</Button> &nbsp;
                                <Button size="sm">Published</Button> &nbsp;
                                <Button size="sm" onClick={deletePost}>Delete</Button>
                              </Col>
                            </Row>
                          </Card> <br />
                        </>
                      ))}
                    </Col>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </>
  );
}
