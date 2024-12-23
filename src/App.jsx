import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contacts from "./pages/Contacts";
import Gallery from "./pages/Gallery";
import Blogs from "./pages/Blogs";
import BlogPage from "./pages/BlogPage";


function App() {
 
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blogs" element={<Blogs/>} />
            <Route path="/blog-page" element={<BlogPage />} />

          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
