import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const baseURL = "http://dev.opensource-technology.com:3000/api/posts";

export default function Draft() {
  const [get, setGet] = useState([]);

  useEffect(() => {
    axios.get(`${baseURL}/draft`).then((response) => {
      setGet(response.data.posts);
      console.log("postsDraftData", response.data.posts);
    });
  }, []);

  if (!get) return "null";

  const handlePublish = (id, title, content) => {
    axios
      .patch(
        baseURL + "/" + id,
        {
          title: title,
          content: content,
          published: true,
        },
        { "Content-Type": "application-json" }
      )
      .then(() => console.log("OK"))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            {get.map((item, index) => (
              <>
                <Card className="p-3" key={index}>
                  <h3>{item.title}</h3>
                  <h6 className="mb-3">{item.content}</h6>
                  <Row>
                    <Col>
                      <h6>{item.created_at}</h6>
                    </Col>
                    <Col className="d-flex justify-content-end">
                      <Link to="/EditPost">
                        <Button size="sm" variant="warning">
                          Edit
                        </Button>
                      </Link>
                      &nbsp;
                      <Button
                        size="sm"
                        variant="outline-info"
                        onClick={handlePublish(
                          item.id,
                          item.title,
                          item.content
                        )}
                      >
                        Published
                      </Button>
                      &nbsp;
                      <Button size="sm" variant="danger">
                        Delete
                      </Button>
                    </Col>
                  </Row>
                </Card>
                <br />
              </>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}