import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Layout from './components/Layout'
import Header from './components/Header'
import Main from './components/Main'
import Vare from './components/Vare'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Main />} />
            <Route path='/vare' element={<Vare />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;