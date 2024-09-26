import {
  useEffect,
  useState,
  // useEffect
} from "react"
// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Layout from "./components/Layout"
// import Main from "./components/Main"
// import Vare from "./components/Vare"
import "./App.css"
import axios from "axios"

function App() {
  const [data, setData] = useState({ data: [] })
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  // const [valgtVare, setValgtVare] = useState("")

  const KEY = "LmOFSdN8MdRSiZOVBqFg4uP6uKdvBKpuoHTdnkiW"

  const fetchGroceries = async (page) => {
    setIsLoading(true)

    try {
      const response = await axios.get(`https://kassal.app/api/v1/products`, {
        headers: {
          Authorization: "Bearer " + KEY,
        },
        params: { size: 100, page: page },
      })

      console.log(response.data.data)
      const newData = response.data.data

      setData((prevData) => ({ data: [...prevData.data, ...newData] }))

      // if (newData.length === 100) {
      //   setPage(page + 1) // This triggers fetching the next page
      // }
    } catch (error) {
      console.error("Error fetching groceries: ", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchGroceries(page)
  }, [page])

  // useEffect(() => {
  //   const headers = {
  //     Authorization: "Bearer " + KEY,
  //     params: { limit: 100, page: page },
  //   }

  //   fetch(`https://kassal.app/api/v1/products`, {
  //     headers,
  //   })
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => console.error(error))
  // }, [page])

  return (
    <div className="App">
      <div>
        <h1>Test</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {data.data.map((grocery, index) => (
              <li key={index}>{grocery.name}</li> // Adjust property as needed
            ))}
          </ul>
        )}
      </div>
      {/* <BrowserRouter>
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
                  page={page}
                  // pageDown={pageDown}
                  // pageUp={pageUp}
                />
              }
            />
            <Route
              path="/vare"
              element={<Vare data={data} valgtVare={valgtVare} />}
            />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  )
}

export default App
