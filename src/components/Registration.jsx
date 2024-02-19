import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Registration() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: '',
    author: '',
    category: '',
    price: '',
    cover: '',
  });

  const handleForm = (e) => {
    setForm((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

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

  const handleSubmitForm = (e) => {
    e.preventDefault();
    axios
      .post('https://65d1faa1987977636bfbc142.mockapi.io/api/react-test/books', form)
      .then((res) => {
        console.log(res);
        setBooks([...books, res.data]);
        setForm({
          title: '',
          author: '',
          category: '',
          price: '',
          cover: '',
        });
        // setOpenSnackbar(true);
      })
      .catch((err) => console.log(err));
  };

  const handleClick = () => {
    navigate('/home');
    // setOpenSnackbar(true);
  };

  if (isLoading) {
    return <div>Palaukite truputėlį</div>;
  }

  return (
    <Container className="d-flex justify-content-center" style={{ marginTop: '50px' }}>
      <Form onSubmit={handleSubmitForm} style={{ width: '300px' }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Knygos pavadinimas</Form.Label>
          <Form.Control
            name="title"
            value={form.title}
            type="text"
            placeholder="Įveskite knygos pavadinimą"
            required
            onChange={handleForm}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Autorius</Form.Label>
          <Form.Control
            name="author"
            value={form.author}
            type="text"
            placeholder="Įveskite knygos autorių"
            required
            onChange={handleForm}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Kategorija</Form.Label>
          <Form.Control
            name="category"
            value={form.category}
            type="text"
            placeholder="Įveskite kategoriją"
            required
            onChange={handleForm}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Kaina</Form.Label>
          <Form.Control
            name="price"
            value={form.price}
            type="text"
            placeholder="Įveskite knygos kainą"
            required
            onChange={handleForm}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Viršelio nuotrauka</Form.Label>
          <Form.Control
            name="cover"
            value={form.cover}
            type="text"
            placeholder="Įveskite nuotraukos https:// nuorodą"
            required
            onChange={handleForm}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleClick}>
          Pridėti
        </Button>
      </Form>
    </Container>
  );
}

export default Registration;
