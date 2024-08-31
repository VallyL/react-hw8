import React, { useState, useEffect } from "react";
import styles from "../../components/ListItems/styles.module.css";

function ListItems() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    setItems([...items, inputValue]);
    setInputValue("");
  };

  /*corrected*/
  useEffect(() => {
    console.log("Component ListItems was updated");
  }, []);

  return (
    <div className={styles.listContainer}>
      <div>
        <input
          type="text"
          id="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListItems;
