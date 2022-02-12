import './App.css';

//Library
import { Routes, Route, Link } from "react-router-dom";

//Page
import OpenInvitation from './page/OpenInvitation';
import Main from './page/Main';

function App() {
  return (
    <>
      <div className="fh5co-loader"></div>
      <Routes>
        <Route path="/:name" element={<OpenInvitation />} />
        <Route path="/:name/opened" exact element={<Main />} />
      </Routes>
    </>
  )
}

export default App;
