import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

const MovieCard = ({ movieTitle }) => {
  const [movieObj, setMovieObj] = useState(null);

  const fetchMovieData = async () => {
    console.log("fetch");
    const resp = await fetch("http://www.omdbapi.com/?apikey=43a932c8&s=" + movieTitle);

    const movieData = await resp.json();

    setMovieObj(movieData.Search[0]);
  };

  // fa sia da componentDidMount, perché si avvia al montaggio, sia da componentDidUpdate (con condizione di guardia)
  // perché si avvierà solo se movieTitle sarà cambiato rispetto a prima
  useEffect(() => {
    fetchMovieData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieTitle]);

  if (movieObj) {
    const { Poster, Title, Year, Type } = movieObj;
    return (
      <Card>
        <Card.Img variant="top" src={Poster} />
        <Card.Body>
          <Card.Title>
            {Title} — {Type}
          </Card.Title>
          <Card.Text>{Year}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default MovieCard;
