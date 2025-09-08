import { Toast } from 'react-bootstrap';

export default function Ex07() {
  return (
    <div className="p-4 d-flex justify-content-center" style={{ minHeight: 200 }}>
      <Toast show className="shadow" style={{ minWidth: 320 }}>
        <Toast.Header closeButton>
          <strong className="me-auto">Cảnh báo</strong>
        </Toast.Header>
        <Toast.Body>Lỗi kết nối máy chủ.</Toast.Body>
      </Toast>
    </div>
  );
}
