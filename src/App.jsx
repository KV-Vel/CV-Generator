// import { useState } from 'react'
import "../src/index.css";
import Header from "./components/DOM/Header";
import MultiStepProgressBar from "./components/MultiStepProgressBar";
import GeneralFormSection from "./components/CV/FormGeneral";
import { FaArrowRightLong } from "react-icons/fa6";

function App() {
    return (
        <>
            <Header />
            <MultiStepProgressBar />
            <main>
                <GeneralFormSection />
                <button type="button" className="next-step__btn">
                    <span>Next step</span> <FaArrowRightLong viewBox="0 0 500 512" className="arrow" />
                </button>
            </main>
        </>
    );
}

export default App;
