import './App.css';

//Library
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

//Page
import OpenInvitation from './page/OpenInvitation';
import Main from './page/Main';

function App() {
  return (
    <>
      <Router>
        <div className="fh5co-loader"></div>
        <Routes>
          <Route path="/:name" element={<OpenInvitation />} />
          <Route path="/:name/opened" exact element={<Main />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
