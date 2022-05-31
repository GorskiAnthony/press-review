import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "./Home";
import Form from "./Form";
import NotFound from "./NotFound";
import Week from "./Week";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/week/:id" element={<Week />} />
          <Route path="/add" element={<Form />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
