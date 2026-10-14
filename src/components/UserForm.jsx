function UserForm({data}) {
    const {avatar, setInputAvatar, inputName, inputAge, setInputName, setInputAge, onSave} = data;
    function handler(event) {
      event.preventDefault();
      onSave();
    }

    return (
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
    );
}

export default UserForm;