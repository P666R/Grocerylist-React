import { useState } from "react";
import Form from "./components/Form";
import { toast, ToastContainer } from "react-toastify";
import Items from "./components/Items";

function App() {
  const [items, setItems] = useState([]);

  const removeItem = (id) => {
    const newItems = items.filter((item) => {
      return item.id !== id;
    });
    setItems(newItems);
    toast.success("item removed");
  };

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form setItems={setItems} />
      <Items items={items} removeItem={removeItem} />
    </section>
  );
}

export default App;
