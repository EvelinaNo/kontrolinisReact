import axios from 'axios';
import { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Registration from './Registration';

export const Home = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get('https://65d1faa1987977636bfbc142.mockapi.io/api/react-test/books')
      .then((response) => {
        setBooks(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleButtonClick = (index) => {
    const updatedBooks = [...books];
    updatedBooks[index].reserved = !updatedBooks[index].reserved;
    setBooks(updatedBooks);
  };

  if (isLoading) {
    return <div>Palaukite truputėlį</div>;
  }
  return (
    <>
      {books.map((book) => (
        <Container fluid>
          <Row>
            {books.map((book) => (
              <Col key={book.id} md={2} className="mb-4 mt-4">
                <ListGroup>
                  <ListGroup.Item>
                    <img src={book.cover} alt={book.title} style={{ maxWidth: '100%' }} />
                    <p>{book.title}</p>
                    <Button variant="dark" onClick={() => handleButtonClick(index)}>
                      {book.reserved ? 'Išduoti skaitytojui' : 'Grąžinti'}
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            ))}
          </Row>
        </Container>
      ))}
    </>
  );
};
