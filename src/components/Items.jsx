import SingleItem from "./SingleItem";

function Items({ items, removeItem }) {
  return (
    <div>
      {items.map((item) => {
        return <SingleItem key={item.id} item={item} removeItem={removeItem} />;
      })}
    </div>
  );
}
export default Items;
