/* now we will be combining the same and then using the rest of the ternary operations
 */

function Item({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = <del>{name + ' ✔'}</del>;
  }

  return <li className="item">{itemContent}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing list</h1>
      <ul>
        <Item
          isPacked={true}
          name="space suit"
        />
        <Item
          isPacked={false}
          name="Photo of Tam"
        />
        <Item
          isPacked={true}
          name="Helmet with a golden leaf"
        />
      </ul>
      {/* with this conditional rendering has been completed */}
    </section>
  );
}
