// import { useEffect } from "react";
import Landing from "./landing/Landing";
import { useSelector } from 'react-redux';
import { RootState } from "../store/store";
import { Route, Routes } from "react-router-dom";
import Bio from "./bio/Bio";
import Contact from "./contact/Contact";
import Film from "./film/Film";
import Images from "./images/Images";
import LectureAsResearch from "./lectureResearch/LectureAsResearch";
import SculptureInstallation from "./sculptureInstallation/SculptureInstallation";
import Nav from "./nav/Nav";

const App = () => {
  const { complete }: { complete: boolean } = useSelector((state: RootState) => state.landingAnimation);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing isAnimationComplete={complete} />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/images" element={<Images />} />
        <Route path="/film" element={<Film />} />
        <Route path="/lectureasreasearch" element={<LectureAsResearch />} />
        <Route path="/sculptureinstallation" element={<SculptureInstallation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </>
  )
}

export default App
