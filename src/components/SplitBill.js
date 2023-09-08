import { useState } from "react";

export default function SplitBill({ selected, onSplited }) {
  const [bill, setBill] = useState("");
  const [yours, setYours] = useState("");
  return (
    <form className="form-split-bill" onSubmit={(e) => onSplited(e)}>
      <h2>SPLIT A BILL WITH {selected.toUpperCase()}</h2>
      <label htmlFor="">💰Bill value</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
      <label htmlFor="">🕴️Your expense</label>
      <input
        type="number"
        value={yours}
        onChange={(e) => setYours(e.target.value)}
      />
      <label htmlFor="">🧑🏻‍🤝‍🧑🏽{selected}'s expese </label>
      <input type="text" disabled value={yours === "" ? "" : bill - yours} />
      <label htmlFor="">🤑Who is paying the bill? </label>
      <select>
        <option value="You">You</option>
        <option value={selected}>{selected}</option>
      </select>
      <button className="button">Split bill</button>
    </form>
  );
}
