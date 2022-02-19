import './App.css';

//Library
import { Routes, Route, BrowserRouter as Router, useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

//Page
import OpenInvitation from './page/OpenInvitation';
import Main from './page/Main';
import NotFound from './page/NotFound';

function App() {

  let slug_url = useParams();
	const data = useSelector((state) => state.data.find(obj => (slug_url.name) ? obj.slug_url === slug_url.name : null));
  // alert(slug_url.name);
  // const navigate = useNavigate();
  // console.log(data);
  if(typeof data === 'undefined'){
    // alert('test');
    // navigate("/url-invalid");
  } 

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
