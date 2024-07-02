import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CustomNav from "./components/CustomNav";
import { Col, Container, Row } from "react-bootstrap";
import MovieSelect from "./components/MovieSelect";
import MovieCard from "./components/MovieCard";

const App = () => {
  const [movieTitle, setMovieTitle] = useState("Venom");

  const changeMovieTitle = newTitle => {
    setMovieTitle(newTitle);
  };

  return (
    <>
      <CustomNav brandName="Movie Chooser" />
      <main>
        <Container>
          <Row className="justify-content-center mt-5">
            <Col xs={12} md={6}>
              <MovieSelect movieTitle={movieTitle} changeMovieTitle={changeMovieTitle} />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} md={6}>
              <MovieCard movieTitle={movieTitle} />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default App;
