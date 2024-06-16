import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./components/Main";
import Vare from "./components/Vare";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  const KEY = "LmOFSdN8MdRSiZOVBqFg4uP6uKdvBKpuoHTdnkiW";

  useEffect(() => {
    const headers = { Authorization: "Bearer " + KEY };

    fetch("https://kassal.app/api/v1/products?size=100", { headers })
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  const [valgtVare, setValgtVare] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <Main
                  data={data}
                  setData={setData}
                  valgtVare={valgtVare}
                  setValgtVare={setValgtVare}
                />
              }
            />
            <Route
              path="/vare"
              element={<Vare data={data} valgtVare={valgtVare} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
