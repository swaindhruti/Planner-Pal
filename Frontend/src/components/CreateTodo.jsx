import { useState } from "react";

export function CreateTodo() {

    const[title,setTitle] = useState("");
    const[description,setDescription] = useState("");

  return (
    <div>
      <input id="title"
        style={{
          padding: "10px",
          margin: "10px",
          width: "30%",
          borderRadius: "5px",
          border: "1px solid #ddd",
        }}
        type="text"
        placeholder="title"
        onChange={(e) => {setTitle(e.target.value)}}
      />{" "}
      <br />
      <input id="description"
        style={{
          padding: "10px",
          margin: "10px",
          width: "30%",
          borderRadius: "5px",
          border: "1px solid #ddd",
        }}
        type="text"
        placeholder="description"
        onChange={(e) => {setDescription(e.target.value)}}
      />{" "}
      <br />
      <button onClick={() => {
        fetch("http://localhost:3000/todo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            description: description
          }),
        }).then((res) => {
            res.json();
            alert("Todo Added Successfully");
        });
      }}>Add a Todo</button>
    </div>
  );
}
