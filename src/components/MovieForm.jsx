import { useState } from "react";
import { Film } from "lucide-react";
import MovieFormInput from "./SurveyForm";
import MovieSuccess from "./MovieSuccess";

function MovieForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [movie, setMovie] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState({});
  const [submittedData, setSubmittedData] = useState({});
  const [stage, setStage] = useState({
    name: "",
    email: "",
    movie: "",
  });

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
    <div className="movie-survey-container">
      <div className="title-bar">
        <h2>
          <Film />
          Movie Survey
        </h2>
      </div>
      {!submitted ? (
        <MovieFormInput
          name={name}
          email={email}
          movie={movie}
          description={description}
          error={error}
          stage={stage}
          setName={setName}
          setEmail={setEmail}
          setMovie={setMovie}
          setDescription={setDescription}
          onSubmit={handleSubmit}
          onReset={handleReset}
        />
      ) : (
        <MovieSuccess 
        data={submittedData} 
        onReset={handleReset} 
        />
      )}
    </div>
  );
}

export default MovieForm;
