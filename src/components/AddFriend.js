import { useState } from "react";

export default function AddFriend({ onAddPerson }) {
  const [btFri, setBtFri] = useState(1);
  return btFri === 0 ? (
    <>
      <form
        action=""
        className="form-add-friend"
        onSubmit={(e) => {
          onAddPerson(e);
          setBtFri(1);
        }}
      >
        <label>🧑🏻‍🤝‍🧑🏽Friend name </label>
        <input type="text" />
        <label>🌄Image URL </label>
        <input type="text" />
        <button className="button">Add</button>
      </form>
      <button className="button" onClick={(e) => setBtFri(1)}>
        Close
      </button>
    </>
  ) : (
    <button className="button" onClick={() => setBtFri(0)}>
      Add friend
    </button>
  );
}
