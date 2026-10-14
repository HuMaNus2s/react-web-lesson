function Profile({data}) {

  const {savedAvatar, savedName, savedAge } = data;
  const tag = ('@' + savedName + savedAge).trim().replace(" ", "");

  return (
    <div className="container" style={{ maxWidth: '720px' }}>
      <h2 className="fw-bold fs-4">Профиль</h2>

      <div className="card d-flex flex-row align-items-center shadow-sm border-0 mb-4">
        <img src={savedAvatar ? savedAvatar : "src\\assets\\react.svg"} alt="avataR" className="icon rounded-circle float-start m-3"/>
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

    </div>
  );
}

export default Profile;