import { Form } from 'react-bootstrap';

export default function Ex02() {
  return (
    <div className="p-3">
      <Form.Group className="mb-3">
        <Form.Control size="lg" type="text" placeholder="Input cỡ lớn" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Input cỡ trung bình" />
      </Form.Group>
      <Form.Group className="mb-0">
        <Form.Control size="sm" type="text" placeholder="Input cỡ bé" />
      </Form.Group>
    </div>
  );
}
