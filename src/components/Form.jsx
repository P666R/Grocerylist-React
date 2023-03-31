import { nanoid } from "nanoid";
import { useState } from "react";
import { toast } from "react-toastify";

function Form({ setItems }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      toast.error("Please enter text");
      return;
    }
    setItems((currentState) => {
      const item = {
        name: value,
        completed: false,
        id: nanoid(),
      };
      return [...currentState, item];
    });
    toast.success("item added");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4 className="">Grocery List</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
}
export default Form;
