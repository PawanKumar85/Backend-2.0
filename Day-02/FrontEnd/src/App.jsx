import React, { useEffect, useState } from "react";

const App = () => {
  const [jokes, setJokes] = useState([]);

  const fetchData = async () => {
    const req = await fetch("/api/v1/data");
    const data = await req.json();
    setJokes(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1>Hello World</h1>
      <p>{jokes.length}</p>
    </>
  );
};

export default App;
