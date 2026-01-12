import { useState } from "react";
import movies from "../data/MovieData";
import { Film } from "lucide-react";
import { CircleCheckBig } from "lucide-react";
import { RefreshCcw } from "lucide-react";
import { Send } from "lucide-react";

function MovieForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [movie, setMovie] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState({});
  const [submittedData, setSubmittedData] = useState({});
  const [stage, setStage] = useState({});

  function isEmailValid() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  function validationData() {
    let newError = {};
    let newStage = {};
    if (!name) {
      newError.name = "โปรดใส่ชื่อของคุณ";
      newStage.name = "error-stage";
    }
    if (!email) {
      newError.email = "โปรดใส่อีเมลของคุณ";
      newStage.email = "error-stage";
    } else if (!isEmailValid(email)) {
      newError.email = "กรุณากรอกอีเมลให้ถูกต้อง";
      newStage.email = "error-stage";
    }
    if (!movie) {
      newError.movie = "กรุณาเลือกหนังที่คุณชอบ";
      newStage.movie = "error-stage";
    }
    setError(newError);
    setStage(newStage);
    return Object.keys(newError).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validationData()) {
      return;
    }
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
    setStage({});
    setSubmitted(false);
  }

  return (
    <>
      <div className="movie-survey-container">
        <div className="title-bar">
          <h2>
            <Film />
            Movie Survey
          </h2>
        </div>
        {!submitted ? (
          <div>
            <form onSubmit={handleSubmit}>
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
              <div className="input-container">
                <label>
                  เลือกหนังที่คุณชอบ
                  <div className={`movie-list ${stage.movie}`}>
                    {movies.map((item) => {
                      return (
                        <label key={item.title} className="movie-item">
                          <input
                            type="radio"
                            value={item.title}
                            onChange={(e) => setMovie(e.target.value)}
                            checked={movie === item.title}
                          />
                          <div className="movie-item-detail">
                            <p>
                              {item.title} ({item.year})
                            </p>
                            <p className="movie-director">
                              Director: {item.director}
                            </p>
                          </div>
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
                    className="description-area"
                  />
                </label>
              </div>
              <hr></hr>
              <div className="button-section">
                <button
                  type="button"
                  onClick={handleReset}
                  className="reset-button"
                >
                  <RefreshCcw />
                  รีเซ็ต
                </button>
                <button type="submit" className="send-button">
                  <Send />
                  ส่งแบบสำรวจ
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div>
            <div className="success-box">
              <h2 className="success-message">
                <CircleCheckBig />
                ส่งแบบสำรวจสำเร็จ!
              </h2>
              <div className="result-grid">
                <div className="label">ชื่อ:</div>
                <div className="value">{submittedData.name}</div>

                <div className="label">อีเมล:</div>
                <div className="value">{submittedData.email}</div>

                <div className="label">หนังที่เลือก:</div>
                <div className="movie-value">{submittedData.movie}</div>
              </div>
              <hr></hr>
              <div>
                {submittedData.description && (
                  <div>
                    <p className="label">ความคิดเห็น:</p>
                    {submittedData.description}
                  </div>
                )}
              </div>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="redo-form-button"
            >
              <RefreshCcw /> ทำแบบสำรวจใหม่
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default MovieForm;
