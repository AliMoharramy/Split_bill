import FriendsList from "./FriendsList";
import AddFriend from "./AddFriend";
import SplitBill from "./SplitBill";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [newFri, setNewFri] = useState(initialFriends);
  const [selected, setSelected] = useState("");

  function addPerson(data) {
    data.preventDefault();
    const newP = {
      id: Math.floor(Math.random() * (100000 - 1 + 1) + 1),
      name: data.target[0].value,
      image: `https://i.pravatar.cc/48?u=${Math.floor(
        Math.random() * (900000 - 100000 + 1) + 100000
      )}`,
      balance: 0,
    };
    setNewFri([...newFri, newP]);
  }

  function selectPer(e, name) {
    selected === name ? setSelected("") : setSelected(name);
  }

  function splited(e) {
    e.preventDefault();

    let splitedCost =
      e.target[3].value === "You"
        ? +e.target[2].value
        : Number(-e.target[1].value);

    setNewFri(
      newFri.map((item) => {
        if (item.name === selected) {
          item.balance += splitedCost;
          return item;
        } else {
          return item;
        }
      })
    );
    setSelected("");
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          newFri={newFri}
          onselectPer={selectPer}
          selected={selected}
        />
        <AddFriend onAddPerson={addPerson} />
      </div>
      {selected && <SplitBill selected={selected} onSplited={splited} />}
    </div>
  );
}
