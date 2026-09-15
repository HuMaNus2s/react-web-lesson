import { useState } from "react";
function UserCard() {
    const [tag, setTag] = useState('');
    const [inputName, setInputName] = useState('');
    const [inputAge, setInputAge] = useState(0);

    const [savedName, setSavedName] = useState('');
    const [savedAge, setSavedAge] = useState(0);
    
    function handler(event) {
      event.preventDefault();
      setTag(("@" + inputName + inputAge).trim().replace(" ", ""));
      setSavedName(inputName);
      setSavedAge(inputAge);
    }
  
    return (
      <div className="m-4">
        <h2 className="mb-4 fw-bold fs-4">Профиль</h2>
        <div className="container ml-0 border rounded bg-white">
          <h2 className="mt-2">
            {savedName ? savedName : "Undefinded"}
          </h2>
          <p className="badge bg-light">
            {tag ? tag : "@000000"}
          </p>
          <h5>Возраст: {savedAge ? savedAge : "?"}</h5>
          <br />
          <form onSubmit={handler} className="shadow-sm border-0 mb-4 w-25 justify-content-between">
              <input
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                placeholder="Введи имя"
                required="true"
                className="form-control form-control-sm mb-1"
              />
              <input
                type='number'
                value={inputAge}
                onChange={(e) => setInputAge(e.target.value)}
                placeholder="Введи возраст"
                min={5}
                max={120}
                className="form-control form-control-sm mb-1"
              />
  
              <button type='submit' className="btn btn-primary w-100 fw-semibold" >
                Сохранить
              </button>
          </form>
        </div>
        
      </div>
    );
}

export default UserCard