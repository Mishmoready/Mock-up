import { useState } from "react";

export default function Form() {
  const [val, setVal] = useState("");

  const handleSubmit = () => {
    console.log("Form submitted!");
  };

  function handleChange(event) {
    console.log(event.target.value);
    // alert(event.target.value);
    setVal(event.target.value);
  }
  return (
    <>
      <label>Input field</label>
      <div>
        <input type="text" onChange={handleChange}></input>
        <input type="submit">Submitit</input>
        {val}
        <p>example list item</p>
      </div>
    </>
  );
}
