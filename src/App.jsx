import "./App.css";

import { Routes, Route } from "react-router-dom";
import Homepage from "../src/pages/HomePage/HomePage.jsx";
import Catalogue from "../src/pages/Catalogue/Catalogue.jsx";
import Camper from "../src/pages/Camper/Camper.jsx";
import Layout from "./components/Layout/Layout.jsx";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/catalog" element={<Catalogue />} />
          <Route path="/catalog/:id" element={<Camper />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
