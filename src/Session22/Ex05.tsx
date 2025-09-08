export default function Ex04() {
  return (
    <div className="p-3" style={{ maxWidth: 700, margin: '0 auto' }}>
      <div className="alert alert-success d-flex justify-content-between align-items-center" role="alert">
        <span>Thêm tài khoản thành công.</span>
        <button type="button" className="btn-close" aria-label="Close"></button>
      </div>

      <div className="alert alert-danger d-flex justify-content-between align-items-center" role="alert">
        <span>Thêm mới tài khoản thất bại.</span>
        <button type="button" className="btn-close" aria-label="Close"></button>
      </div>

      <div className="alert alert-warning d-flex justify-content-between align-items-center mb-0" role="alert">
        <span>Tên không được để trống.</span>
        <button type="button" className="btn-close" aria-label="Close"></button>
      </div>
    </div>
  );
}
