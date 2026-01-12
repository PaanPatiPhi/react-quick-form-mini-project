import { useState } from "react";
import movies from "../data/MovieData";

function MovieForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [movie, setMovie] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState({});
  const [submittedData, setSubmittedData] = useState({});

  function isEmailValid() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  function validateData() {
    let newError = {};
    if (!name) {
      newError.name = "โปรดใส่ชื่อของคุณ";
    }
    if (!email) {
      newError.email = "โปรดใส่อีเมลของคุณ";
    } else if (!isEmailValid(email)) {
      newError.email = "กรุณากรอกอีเมลให้ถูกต้อง";
    }
    if (!movie) {
      newError.movie = "กรุณาเลิอกหนังที่คุณชอบ";
    }
    setError(newError);
    return Object.keys(error) === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    let newSubmittedData = {
      name: name,
      email: email,
      movie: movie,
      description: description || null,
    };
    setSubmittedData(newSubmittedData);
    setSubmitted(true);
  }

  function handleReset() {
    setName("");
    setEmail("");
    setMovie("");
    setDescription("");
    setError({});
  }

  return !submitted ? (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>
            ชื่อ
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
            />
          </label>
          {error.name && <p className="error-message">{error.name}</p>}
        </div>
        <div className="input-container">
          <label>
            อีเมล
            <br />
            <input
              id="email"
              name="email"
              type="text"
              placeholder="กรุณากรอกอีเมลของคุณ"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </label>
          {error.email && <p className="error-message">{error.email}</p>}
        </div>
        <div className="input-container">
          <label>
            เลือกหนังที่คุณชอบ
            <div className="input-container">
              {movies.map((item) => {
                return (
                  <label key={item.title}>
                    <input
                      type="radio"
                      value={item.title}
                      onChange={(e) => setMovie(e.target.value)}
                      checked={movie === item.title}
                    />
                    {item.title}
                    <br />
                    {item.director}
                  </label>
                );
              })}
            </div>
          </label>
          {error.movie && <p className="error-message">{error.movie}</p>}
        </div>
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
            />
          </label>
        </div>
        <button type="button" onClick={handleReset}>
          รีเซ็ต
        </button>
        <button>ส่งแบบสำรวจ</button>
      </form>
    </div>
  ) : (
    <div>
      <h2>ส่งแบบสำรวจสำเร็จ</h2>
      <div>
        <h3>ชื่อ: {submittedData.name}</h3>
        <h3>อีเมล: {submittedData.email}</h3>
        <h3>หนังที่เลือก: {submittedData.movie}</h3>
        {submittedData.description && (
          <h3>
            ความคิดเห็น:
            <br />
            {submittedData.description}
          </h3>
        )}
      </div>
    </div>
  );
}

export default MovieForm;
