import { useState } from "react";

function UserCard() {
  const [tag, setTag] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');

  const [savedName, setSavedName] = useState('');
  const [savedAge, setSavedAge] = useState('');

  function handler(event) {
    event.preventDefault();
    setTag(("@" + inputName + inputAge).trim().replace(" ", ""));
    setSavedName(inputName);
    setSavedAge(inputAge);
    window.localStorage.setItem('username', savedName);
    window.localStorage.setItem('userage', savedAge);
  }

  return (
    <div className="container" style={{ maxWidth: '720px' }}>
      <h2 className="mb-4 fw-bold fs-4">Профиль</h2>

      <div className="card d-flex flex-row align-items-center shadow-sm border-0 mb-4">
        <img src="src\assets\react.svg" alt="avataR" id="icon" className="rounded-circle float-start m-3"/>
        <div className="card-body p-4 pl-0">
          <h3 className="fw-bold mb-2">
            {savedName ? savedName : "Undefined"}
          </h3>
          <p className="badge bg-light text-dark px-3 py-2 rounded-pill mb-2">
            {tag ? tag : "@000000"}
          </p>
          <h5 className="text-muted">
            Возраст: {savedAge ? savedAge : "?"}
          </h5>
        </div>
      </div>

      <form onSubmit={handler} className="card shadow-sm border-0 mb-4">
        <div className="card-body p-4">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              placeholder="Введи имя"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              value={inputAge}
              onChange={(e) => setInputAge(e.target.value)}
              placeholder="Введи возраст"
              min={5}
              max={120}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 fw-semibold">
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserCard;