import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Reviews = () => {
  const [form, setForm] = useState({
    name: '',
    title: '',
    review: '',
  });

  const handleForm = (e) => {
    setForm((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const handleClick = () => {
    alert(`Ačiū, ${form.name}, jūsų atsiliepimą gavome`);
  };

  return (
    <Container className="d-flex justify-content-center" style={{ marginTop: '50px' }}>
      <Form style={{ width: '300px' }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Vardas</Form.Label>
          <Form.Control
            name="name"
            value={form.name}
            type="text"
            placeholder="Įveskite knygos pavadinimą"
            required
            onChange={handleForm}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Knygos pavadinimas</Form.Label>
          <Form.Control
            name="title"
            value={form.title}
            type="text"
            placeholder="Įveskite knygos autorių"
            required
            onChange={handleForm}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Atsiliepimas</Form.Label>
          <Form.Control
            name="review"
            value={form.review}
            type="text"
            placeholder="Įveskite kategoriją"
            required
            onChange={handleForm}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleClick}>
          Siųsti
        </Button>
      </Form>
    </Container>
  );
};
