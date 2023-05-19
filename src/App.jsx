import "./App.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Routes, Route, Link } from "react-router-dom";
import CreateDraft from "./pages/CreateDraft.jsx";
import EditPost from "./pages/EditPost.jsx";
import Posts from "./pages/Posts.jsx";
import Draft from "./pages/Draft.jsx";

export default function App() {
  return (
    <>
      <Container className="container">
        <h2 className="d-flex justify-content-center m-3">Web Frontend Test</h2>
        <Card>
          <Card.Header>
            <Row>
              <Col md={10}>
                <Link to="/Posts">
                  <Button>Post</Button>
                </Link>
                &nbsp;
                <Link to="/Draft">
                  <Button>Draft</Button>
                </Link>
              </Col>
              <Col md={2} className="d-flex justify-content-end">
                <Link to="/CreateDraft">
                  <Button>CreatePost</Button>
                </Link>
              </Col>
            </Row>
          </Card.Header>
          <Routes>
            <Route path="/EditPost" element={<EditPost />}></Route>
            <Route path="/CreateDraft" element={<CreateDraft />}></Route>
            <Route path="/Posts" element={<Posts />}></Route>
            <Route path="/Draft" element={<Draft />}></Route>
          </Routes>
        </Card>
      </Container>
    </>
  );
}