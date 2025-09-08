import { Dropdown } from 'react-bootstrap';

export default function Ex04() {
  return (
    <div className="p-3 d-flex justify-content-center" style={{ minHeight: 160 }}>
      <div style={{ width: 260 }}>
        <Dropdown>
          <Dropdown.Toggle variant="light" className="w-100 text-start">
            Nguyễn Văn Nam
          </Dropdown.Toggle>

          <Dropdown.Menu className="w-100">
            <Dropdown.Item href="#">Cài đặt</Dropdown.Item>
            <Dropdown.Item href="#">Đổi mật khẩu</Dropdown.Item>
            <Dropdown.Item href="#">Đăng xuất</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}
