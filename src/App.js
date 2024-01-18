import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import VideoSection from "./components/VideoSection";
import EventSchedule from "./components/EventSchedule";
import OurSpeaker from "./components/OurSpeaker";
import EventGift from "./components/EventGift";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationPage from "./components/RegistrationPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SelectLanguage from "./components/SelectLanguage";
import HindiRegistrationPage from "./components/HindiRegistrationPage";
import QrCode from "./components/QrCode";
import "./App.css";
import { ScrollToTopController } from "./components/ScrollToTop";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTopController />
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          {/* <Route path='/VideoSection' element={<VideoSection/>}/> */}
          {/* <Route path='/EventSchedule' element={ <EventSchedule/>}/> */}
          {/* <Route path='/OurSpeaker' element={ <OurSpeaker/>}/> */}
          <Route path="/EventGift" element={<EventGift />} />
          <Route path="/RegistrationPage" element={<RegistrationPage />} />
          <Route
            path="/HindiRegistrationPage"
            element={<HindiRegistrationPage />}
          />

          <Route path="/SelectLanguage" element={<SelectLanguage />} />
          <Route path="/VideoSection" element={<VideoSection />} />
          <Route path="/EventSchedule" element={<EventSchedule />} />
          <Route path="/OurSpeaker" element={<OurSpeaker />} />
          <Route path="/QrCode" element={<QrCode />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
