import './App.css';
//Library
import { Routes, Route, useParams, useNavigate } from "react-router-dom";

//Page
import OpenInvitation from './page/OpenInvitation';
import Main from './page/Main';
import NotFound from './page/NotFound';

function App() {

  return (
    <>
        <div className="fh5co-loader"></div>
        <Routes>
          <Route path="/:name" element={<OpenInvitation />} />
          <Route path="/:name/opened" exact element={<Main />} />
          <Route path="/url-invalid" exact element={<NotFound />} />
        </Routes>
    </>
  )
}

export default App;
