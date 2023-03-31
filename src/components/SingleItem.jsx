import { useState } from "react";

function SingleItem({ item, removeItem }) {
  const [isChecked, setIsChecked] = useState(item.completed);

  return (
    <div>
      <input
        type="checkbox"
        value={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <h4 style={{ textDecoration: isChecked && "line-through" }}>
        {item.name}
      </h4>
      <button type="button" className="btn" onClick={() => removeItem(item.id)}>
        remove
      </button>
    </div>
  );
}
export default SingleItem;
