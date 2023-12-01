import "./App.css";
import Navbar from "./components/navBar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import Services from "./components/pages/Services.jsx";
import SignUp from "./components/pages/SignUp.jsx";
import Products from "./components/pages/Products.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/services" Component={Services} />
          <Route path="/sign-up" Component={SignUp} />
          <Route path="/products" component={Products} />
        </Routes>
      </Router>

      {/* <div
       style={{
         maxWidth: "1200px",
         width: "100%",
         // height: "500px",
         aspectRatio: "3/2",
         margin: "0 auto",
       }}
     >
       <ImageSlider imageUrls={IMAGES} />
     </div> */}
    </>
  );
}

export default App;