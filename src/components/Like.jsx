import { useState } from "react";

function Like() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-nowrap">
      <button onClick={() => setCount(count + 1)}
        className="icon-button rounded-2"  
      >
        {count} 👍
      </button>
    </div>
  );
}

export default Like;