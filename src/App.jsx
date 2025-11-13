import { useState } from "react";
import "../src/App.css";

const App = () => {

  const [input, setInput] = useState("");
  const [notes, setNotes] = useState([]);
  const [colors, setColors] = useState([]);

  function add() {
    if (input.trim().length !== 0) {
      setNotes(
        [...notes,
        { id: Date.now(), noteText: input, noteColor: colors }
        ]
      )

      setInput(" ")
    }
  }

  function remove(id) {
    setNotes(notes.filter((obj) => obj.id !== id))
  }

  return (
    <div>

      <div className="left">
        <textarea type="text" onChange={(e) => setInput(e.target.value)} value={input} placeholder="write note here//" />
        <button onClick={add}>Add note</button>
      </div>
      <div className="middle">
        <input type="color" onChange={(e) => setColors(e.target.value)} />
      </div>
      <div className="right">
        {
          notes.map((obj) => (
            <div key={obj.id}
              style={{ backgroundColor: obj.noteColor }}
            >{obj.noteText}
              <button onClick={() => remove(obj.id)}>X</button>
            </div>
          ))
        }

      </div>
    </div>
  );
}

export default App;
