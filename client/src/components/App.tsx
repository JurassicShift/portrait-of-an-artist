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
import Header from "./header/Header";

const App = () => {
  const { complete }: { complete: boolean } = useSelector((state: RootState) => state.landingAnimation);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing isAnimationComplete={complete} />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/images" element={<Images />} />
        <Route path="/film" element={<Film />} />
        <Route path="/lecture-as-reasearch" element={<LectureAsResearch />} />
        <Route path="/sculpture-installation" element={<SculptureInstallation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </>
  )
}

export default App
