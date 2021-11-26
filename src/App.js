import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getContacts } from "./redux/contactSlice";
import ContactPage from "./pages/ContactPage/ContactPage";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const dispatch = useDispatch();
 
  useEffect(()=>{
    dispatch(getContacts())
  }, [dispatch])

  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          {/* <Route exact path="/" element={ <HomePage /> } /> */}
          <Route path="/" element={ <ContactPage /> } />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
