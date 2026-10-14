import reactLogo from '../assets/react.svg';

function UploadAvatar({ data }) {
  const { avatar, savedAvatar, setInputAvatar, onSave } = data;

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Можно токо изображения!'); return;
    }

    if (file.size > 3 * 1024 * 1024) {
      alert('Файл слишком большой (макс 3мб)'); return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setInputAvatar(reader.result);
    };

    reader.readAsDataURL(file);
  }

  function handler(event) {
    event.preventDefault();
    onSave();
  }

  return (
    <div className="card d-flex flex-row align-items-center gap-3 p-3 my-3">
      <img
        src={ savedAvatar || reactLogo}
        alt="Avatar"
        className="icon rounded-circle shadow-sm"
      />

      <form onSubmit={handler} className="d-flex flex-column gap-2 p-3">
        <input
          type="file"
          onChange={handleFileChange}
          accept="image/*"
          className="form-control form-control-sm"
        />
        <button type="submit" className="btn btn-primary btn-sm fw-semibold">
          Сохранить
        </button>
      </form>
    </div>
  );
}

export default UploadAvatar;