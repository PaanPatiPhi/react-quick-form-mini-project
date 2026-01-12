import { RefreshCcw, Send } from "lucide-react";
import MovieList from "./MovieList";

function MovieFormInput({
  name,
  email,
  movie,
  description,
  error,
  stage,
  setName,
  setEmail,
  setMovie,
  setDescription,
  onSubmit,
  onReset,
}) {
  return (
    <form onSubmit={onSubmit}>
      <div className="input-container">
        <label>
          ชื่อ <span className="red-mark">*</span>
          <br />
          <input
            id="name"
            name="name"
            type="text"
            placeholder="กรุณากรอกชื่อของคุณ"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            className={`input-bar ${stage.name}`}
          />
        </label>
        {error.name && <p className="error-message">{error.name}</p>}
      </div>
      <div className="input-container">
        <label>
          อีเมล <span className="red-mark">*</span>
          <br />
          <input
            id="email"
            name="email"
            type="text"
            placeholder="example@email.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            className={`input-bar ${stage.email}`}
          />
        </label>
        {error.email && <p className="error-message">{error.email}</p>}
      </div>
      <MovieList
        movie={movie}
        setMovie={setMovie}
        error={error.movie}
        stage={stage.movie}
      />
      <div className="input-container">
        <label>
          ความคิดเห็นเกี่ยวกับหนัง
          <br />
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..."
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            rows={4}
            cols={30}
            value={description}
            className="description-area"
          />
        </label>
      </div>

      <div className="button-section">
        <button type="button" onClick={onReset} className="reset-button">
          <RefreshCcw /> รีเซ็ต
        </button>
        <button type="submit" className="send-button">
          <Send /> ส่งแบบสำรวจ
        </button>
      </div>
    </form>
  );
}

export default MovieFormInput;
