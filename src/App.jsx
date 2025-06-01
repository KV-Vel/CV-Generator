import { createContext, useState } from "react";

// CSS
import "../src/index.css";

// REACT ICONS
import { LuView } from "react-icons/lu";
import { CiEraser } from "react-icons/ci";
import { VscFilePdf, VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { IconContext } from "react-icons";

// COMPONENTS
import Header from "./components/UI/Header/Header";
import Section from "./components/Section/Section";
import AddendumSection from "./components/Section/AddendumSection";

// DATA
import dataHandler from "./data/initialData";

export const AppDataContext = createContext();

function App() {
    const [appData, setAppData] = useState({
        general: [dataHandler.getData("general")],
        education: [dataHandler.getData("education")],
        work: [dataHandler.getData("work")],
        skills: [dataHandler.getData("skills")],
    });

    function prefillCV() {
        setAppData({
            general: [dataHandler.getData("general", true)],
            education: [dataHandler.getData("education", true)],
            work: [dataHandler.getData("work", true)],
            skills: [dataHandler.getData("skills", true)],
        });
    }

    function clearCv() {
        setAppData({
            general: [...appData.general],
            education: [],
            work: [],
            skills: [{ ...appData.skills, inputs: [] }],
        });
    }

    function handleAddSection(sectionName) {
        setAppData(prevAppData => {
            return {
                ...prevAppData,
                [sectionName]: [...prevAppData[sectionName], dataHandler.getData(sectionName)],
            };
        });
    }
    // Using carrying (to learn), but making callback and pass it further would be more practical
    function handleDeleteSection(sectionName) {
        return id => {
            setAppData(prevAppData => {
                const filtered = prevAppData[sectionName].filter(toDeleteObj => toDeleteObj.id !== id);
                return {
                    ...prevAppData,
                    [sectionName]: filtered,
                };
            });
        };
    }

    return (
        <>
            <Header />
            <main>
                <IconContext.Provider value={{ color: "#fff", size: "1.5em", display: "inline-block" }}>
                    <aside>
                        <button type="button" aria-label="View">
                            <LuView />
                            <span>View</span>
                        </button>
                        <button type="button" aria-label="Clear CV" onClick={clearCv}>
                            <CiEraser />
                            <span>Clear</span>
                        </button>
                        <button type="button" aria-label="Autofill CV" onClick={prefillCV}>
                            <VscGitPullRequestGoToChanges />
                            <span>Prefill</span>
                        </button>
                        {/*Кнопка должна не рендериться если окно === tablet или монитор*/}
                        <button type="button" aria-label="PDF">
                            <VscFilePdf />
                            <span>PDF</span>
                        </button>
                    </aside>
                </IconContext.Provider>
                <Section
                    name="General Information"
                    step={1}
                    initialData={appData.general}
                    onAddSection={() => handleAddSection("general")}
                    onDelete={handleDeleteSection("general")}
                />
                <Section
                    name="Educational Experience"
                    step={2}
                    initialData={appData.education}
                    onAddSection={() => handleAddSection("education")}
                    onDelete={handleDeleteSection("education")}
                />
                <Section
                    name="Work Experience"
                    step={3}
                    initialData={appData.work}
                    onAddSection={() => handleAddSection("work")}
                    onDelete={handleDeleteSection("work")}
                />
                <AppDataContext.Provider value={{ appData, setAppData }}>
                    <AddendumSection
                        name="Addendum"
                        step={4}
                    />
                </AppDataContext.Provider>
            </main>
        </>
    );
}

export default App;
