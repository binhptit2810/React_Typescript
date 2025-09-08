import { Card, Button, Row, Col } from 'react-bootstrap';

const products = [
  {
    id: 1,
    title: 'MacBook Air 2018',
    desc:
      'The reason I am selling the machine is because it is too much power for what I need',
    priceText: '30.000.000 đ',
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'MacBook Pro 2019',
    desc:
      'The reason I am selling the machine is because it is too much power for what I need.',
    priceText: '30.000.000 đ',
    image:
      'https://macstores.vn/wp-content/uploads/2020/03/macbook_pro_13_inch_gray.jpg',
  },
];


export default function Ex03() {
  return (
    <div className="p-3">
      <Row className="g-3">
        {products.map((p) => (
          <Col key={p.id} md={6} lg={5} xl={4}>
            <Card className="h-100 shadow-sm">
              <div style={{ height: 200, overflow: 'hidden' }}>
                <Card.Img
                  variant="top"
                  src={p.image}
                  alt={p.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <Card.Body>
                <Card.Title>{p.title}</Card.Title>
                <Card.Text className="text-muted" style={{ minHeight: 60 }}>{p.desc}</Card.Text>
                <div className="d-flex align-items-center justify-content-between">
                  <Button variant="primary">Xem chi tiết</Button>
                  <div className="text-muted">{p.priceText}</div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
