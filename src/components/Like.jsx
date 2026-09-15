import { useState } from "react";

function Like() {
  const [count, setCount] = useState(0);

  return (
    <button
      className={`btn ${count > 0 ? "btn-secondary" : "btn-outline-primary"} d-flex align-items-center gap-2`}
      onClick={() => setCount(count + 1)}
    >
      {count} 👍
    </button>
  );
}

export default Like;