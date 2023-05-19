import { useState, useEffect } from "react";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const baseURL = "http://dev.opensource-technology.com:3000/api";

export default function Posts() {
  const [get, setGet] = useState([]);

  useEffect(() => {
    axios.get(`${baseURL}/posts`).then((response) => {
      setGet(response.data.posts);
      console.log("ดูข้อมูล", response.data.posts);
    });
  }, []);

  if (!get) return null;

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