export default function FriendsList({ newFri, onselectPer, selected }) {
  return (
    <ul>
      {newFri.map((item) => (
        <li key={item.id} className={item.name === selected ? "selected" : ""}>
          <img src={item.image} alt="" />
          <h3>{item.name}</h3>
          <p
            className={
              item.balance === 0 ? "" : item.balance > 0 ? "green" : "red"
            }
          >
            {`You ${
              item.balance === 0
                ? `and ${item.name} are even`
                : item.balance > 0
                ? `owe ${item.name} $${item.balance}`
                : `owes ${item.name} $${-item.balance}`
            }`}
          </p>
          <button className="button" onClick={(e) => onselectPer(e, item.name)}>
            {item.name === selected ? "Close" : "Select"}
          </button>
        </li>
      ))}
    </ul>
  );
}
