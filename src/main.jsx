import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Projectii.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Welcome from "./Welcome.jsx";
import Home from "./Home.jsx";
import Practice from "./Practice.jsx";
import Techpg from "./Techpg.jsx";
import Musicpage from "./Musicpage.jsx";
import Career from "./Career.jsx";
import Sportpage from "./Sportpage.jsx";
import Cultural from "./Cultural.jsx";
import Aipage from "./Aipage.jsx";
import AddEvent from "./AddEvent.jsx";
import EventDetails from "./EventDetails.jsx";
import RegisterForm from "./RegisterForm.jsx";
import ConfirmationPage from "./ConfirmationPage.jsx";
import About from "./About.jsx";
import PendingEvents from "./PendingEvents.jsx";
import ManageEvents from "./ManageEvents.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/practice" element={<Practice />} />

        
        <Route path="/techpg" element={<Techpg />} />
        <Route path="/musicpage" element={<Musicpage />} />
        <Route path="/career" element={<Career />} />
        <Route path="/sportpage" element={<Sportpage />} />
        <Route path="/cultural" element={<Cultural />} />
        <Route path="/aipage" element={<Aipage />} />

        <Route path="/about" element={<About />} />
        <Route path="/addevent" element={<AddEvent />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/registerform/:id" element={<RegisterForm />} />

        <Route path="/confirmationpage" element={<ConfirmationPage />} />
        <Route path="/pendingevents" element={<PendingEvents />} />
        <Route path="/manageevents" element={<ManageEvents />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
