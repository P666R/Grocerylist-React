import { useState } from "react";
import { nanoid } from "nanoid";
import { toast, ToastContainer } from "react-toastify";
import Form from "./components/Form";
import Items from "./components/Items";

const getLocalStorage = JSON.parse(localStorage.getItem("list") || "[]");

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

function App() {
  const [items, setItems] = useState(getLocalStorage);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    setItems([...items, newItem]);
    setLocalStorage([...items, newItem]);
    toast.success("Item added to list");
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => {
      return item.id !== itemId;
    });
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("Item deleted from list");
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (itemId === item.id) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
}

export default App;
