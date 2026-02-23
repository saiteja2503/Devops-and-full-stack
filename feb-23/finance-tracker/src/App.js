import { useEffect } from "react";

function App() {
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    if (!API_URL) {
      console.error("REACT_APP_API_URL is missing!");
      return;
    }

    fetch(`${API_URL}/transactions`)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }, [API_URL]);

  return (
    <div>
      <h1>Finance Tracker</h1>
      <p>API URL: {API_URL}</p>
    </div>
  );
}

export default App;