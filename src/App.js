import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [node, setNode] = useState( window.localStorage.getItem("node")|| ""); 

  useEffect(() => {
    window.localStorage.setItem("node", node);
  }, [node]);

  return (
    <div className="App">
      <div className="box">
        <div className="field">
          <div className="control">
            <textarea className="textarea is-large" placeholder="Notes..."
              value={node}
              onChange={(e) => {
                setNode(e.target.value);
              }}
            />
          </div>
        </div>
        <button className="button is-large is-primary is-active" 
                onClick={() => window.localStorage.setItem("node", node)}>Save</button>
        <button className="button is-large" 
                onClick={() => setNode("")}>Clear</button>
      </div>
    </div>
  );
}

export default App;
