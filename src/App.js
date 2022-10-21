import Home from "./Home";
import Navbar from "./Navbar";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import NotFound from "./NotFound";
import BlogDetails from "./BlogDetails";
import Create from "./Create";

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <div className="content">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home></Home>}></Route>
                    <Route exact path="/create" element={<Create></Create>}></Route>
                    <Route exact path="/blogs/:id" element={<BlogDetails></BlogDetails>}></Route>
                    <Route exact path="notFound" element={<NotFound></NotFound>}></Route>
                    <Route exact path="*" element={<Navigate to="/notFound" replace />}></Route>
                </Routes>
            </Router>
        </div>

    </div>
  );
}

export default App;
