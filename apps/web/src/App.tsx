import { useEffect, useState } from "react";

export default function App() {
  const [health, setHealth] = useState<string>("loading...");
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/health`)
      .then((r) => r.json())
      .then((d) => setHealth(JSON.stringify(d)))
      .catch((e) => setHealth(String(e)));
  }, [apiUrl]);

  return (
    <div style={{ padding: 16 }}>
      <h1>Cookbooks</h1>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <p>API health: {health}</p>
    </div>
  );
}
