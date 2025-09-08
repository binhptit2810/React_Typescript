import { Spinner } from 'react-bootstrap';

export default function Ex06() {
  return (
    <div className="py-4 d-flex flex-column align-items-center gap-4" style={{ minHeight: 220 }}>
      <Spinner animation="border" variant="primary" style={{ width: 48, height: 48, borderWidth: 4 }} />
      <Spinner animation="border" variant="secondary" style={{ width: 40, height: 40, borderWidth: 4 }} />
      <Spinner animation="border" variant="success" style={{ width: 40, height: 40, borderWidth: 4 }} />
    </div>
  );
}
