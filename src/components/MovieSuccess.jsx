import { CircleCheckBig, RefreshCcw } from "lucide-react";

function MovieSuccess({ data, onReset }) {
  return (
    <div>
      <div className="success-box">
        <h2 className="success-message">
          <CircleCheckBig />
          ส่งแบบสำรวจสำเร็จ!
        </h2>
        <div className="result-grid">
          <div className="label">ชื่อ:</div>
          <div className="value">{data.name}</div>

          <div className="label">อีเมล:</div>
          <div className="value">{data.email}</div>

          <div className="label">หนังที่เลือก:</div>
          <div className="movie-value">{data.movie}</div>
        </div>

          {data.description && (
            <div className="description-success">
              <div className="label">ความคิดเห็น:</div>
              <div className="value">{data.description}</div>
            </div>
          )}

        <button type="button" onClick={onReset} className="redo-form-button">
          <RefreshCcw /> ทำแบบสำรวจใหม่
        </button>
      </div>
    </div>
  );
}

export default MovieSuccess;
