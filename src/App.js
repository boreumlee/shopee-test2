import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import Viewer from "./components/Viewer";

function App() {
  const [response, setResponse] = useState("");

  return (
    <div className="App">
      <Header />
      <Form setResponse={setResponse} />
      <Viewer response={response} />
    </div>
  );
}

export default App;
