import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NameCard from "./components/NameCard";
import HealthStatus from "./components/HealthStatus";
import AboutMe from "./components/AboutMe";
import CallMsgBtn from "./components/CallMsgBtn";
import MediStats from "./components/MediStats";
import EmerDetails from "./components/EmerDetails";
import Map from "./components/Map";
import Footer from "./components/Footer";
import WhatToDo from "./components/WhatToDo";
import PdfViewer from "./components/PdfViewer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>
          <Header />
          <NameCard />
          <CallMsgBtn />
          <HealthStatus />
          <AboutMe />
          <MediStats />
          <WhatToDo />
          <EmerDetails />
          <Map />
          <Footer />
        </>} />
        <Route path="/pdf-viewer" element={<PdfViewer />} />
      </Routes>
    </Router>
  );
}

export default App;
