import { Link, Route, Routes } from "react-router";
import PageNotFound from "./components/PageNotFound";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

const App = () => {
  return (
    <>
      {/* Common for all pages */}
      <Header />

      

      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {/* Common for all pages */}
      <Footer />
    </>
  );
};

export default App;