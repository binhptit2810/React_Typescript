import { Button } from 'react-bootstrap';

export default function Ex01() {
    return (
        <div className="p-3">
            <Button variant="primary" className="me-2 mb-2">Lưu</Button>
            <Button variant="secondary" className="me-2 mb-2">Hủy</Button>
            <Button variant="success" className="me-2 mb-2">Thành công</Button>
            <Button variant="warning" className="me-2 mb-2">Cảnh báo</Button>
            <Button variant="danger" className="me-2 mb-2">Báo lỗi</Button>
            <Button variant="info" className="me-2 mb-2">Thông tin</Button>
            <Button variant="link" className="mb-2">Đường dẫn</Button>
        </div>
    );
}