import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";

// CONSTANTS
import { SECTION_TYPES } from "./constants/sections";
import { LABELS } from "./constants/labels";

// DATA
import { structure } from "./data/structure";
import { prefilledInputs } from "./data/preffiledInputs";

// COMPONENTS
import Header from "./components/UI/Header/Header";
import Section from "./components/Section/Section";
import AddendumSection from "./components/Section/AddendumSection";
import CV from "./components/CV/CV";
import Aside from "./components/UI/Aside/Aside";
import LinkGroup from "./components/UI/Links/LinkGroup";

// CSS
import "../src/index.css";

function App() {
    const [appData, setAppData] = useState({
        [SECTION_TYPES.GENERAL]: [structure[SECTION_TYPES.GENERAL]],
        [SECTION_TYPES.EDUCATION]: [structure[SECTION_TYPES.EDUCATION]],
        [SECTION_TYPES.WORK]: [structure[SECTION_TYPES.WORK]],
        [SECTION_TYPES.ADDENDUM]: [],
    });

    const [isCvVisible, setIsCvVisible] = useState(false);

    const contentRef = useRef();
    const print = useReactToPrint({ contentRef });

    function prefillCV() {
        setAppData({
            [SECTION_TYPES.GENERAL]: [
                {
                    subsection: SECTION_TYPES.GENERAL,
                    id: crypto.randomUUID(),
                    isSubmitted: true,
                    inputs: prefilledInputs[SECTION_TYPES.GENERAL],
                },
            ],
            [SECTION_TYPES.EDUCATION]: [
                {
                    subsection: SECTION_TYPES.EDUCATION,
                    id: crypto.randomUUID(),
                    isSubmitted: true,
                    inputs: prefilledInputs[SECTION_TYPES.EDUCATION],
                },
            ],
            [SECTION_TYPES.WORK]: [
                {
                    subsection: SECTION_TYPES.WORK,
                    id: crypto.randomUUID(),
                    isSubmitted: true,
                    inputs: prefilledInputs[SECTION_TYPES.WORK],
                },
            ],
            [SECTION_TYPES.ADDENDUM]: [
                {
                    subsection: "Skills",
                    id: crypto.randomUUID(),
                    isSubmitted: true,
                    inputs: prefilledInputs[SECTION_TYPES.ADDENDUM],
                },
            ],
        });
    }

    function clearCv() {
        setAppData({
            [SECTION_TYPES.GENERAL]: [structure[SECTION_TYPES.GENERAL]],
            [SECTION_TYPES.EDUCATION]: [],
            [SECTION_TYPES.WORK]: [],
            [SECTION_TYPES.ADDENDUM]: [],
        });
    }

    function toggleCV(event) {
        const clickedOutside = event.target === event.currentTarget;

        if (clickedOutside) {
            setIsCvVisible(!isCvVisible);
        }
    }

    function handleAddSection(sectionName) {
        const defaultInputs = LABELS[sectionName].map((label) => ({
            name: label,
            id: crypto.randomUUID(),
            value: "",
        }));

        setAppData((prevAppData) => ({
            ...prevAppData,
            [sectionName]: [
                ...prevAppData[sectionName],
                { subsection: sectionName, id: crypto.randomUUID(), inputs: defaultInputs, isSubmitted: false },
            ],
        }));
    }

    function handleDeleteSection(sectionName, id) {
        setAppData((prevAppData) => {
            const filtered = prevAppData[sectionName].filter((toDeleteObj) => toDeleteObj.id !== id);

            return {
                ...prevAppData,
                [sectionName]: filtered,
            };
        });
    }

    function handleSubmit(event, sectionName, id, data) {
        event.preventDefault();

        setAppData((prevAppData) => {
            const toReplace = prevAppData[sectionName].map((section) => {
                if (section.id !== id) return section;

                return {
                    ...section,
                    isSubmitted: true,
                    inputs: data,
                };
            });

            return {
                ...prevAppData,
                [sectionName]: toReplace,
            };
        });
    }

    function handleAddendumChange(id, updatedName, updatedContent) {
        setAppData((prevAppData) => {
            const updatedData = prevAppData[SECTION_TYPES.ADDENDUM].map((obj) => {
                if (obj.id !== id) return obj;

                return {
                    ...obj,
                    inputs: [{ value: updatedContent }],
                    isSubmitted: true,
                    subsection: updatedName,
                };
            });

            return {
                ...prevAppData,
                [SECTION_TYPES.ADDENDUM]: updatedData,
            };
        });
    }

    return (
        <>
            <div className="app-wrapper" aria-hidden={isCvVisible}>
                <div className="main-wrapper">
                    <Header />
                    <main>
                        <Aside
                            handleClear={clearCv}
                            handlePrefill={prefillCV}
                            handleView={toggleCV}
                            handlePrint={() => print()}
                        />
                        <Section
                            name={SECTION_TYPES.GENERAL}
                            step={1}
                            data={appData[SECTION_TYPES.GENERAL]}
                            onAddSection={handleAddSection}
                            onDelete={handleDeleteSection}
                            onSubmit={handleSubmit}
                        />
                        <Section
                            name={SECTION_TYPES.EDUCATION}
                            step={2}
                            data={appData[SECTION_TYPES.EDUCATION]}
                            onAddSection={handleAddSection}
                            onDelete={handleDeleteSection}
                            onSubmit={handleSubmit}
                        />
                        <Section
                            name={SECTION_TYPES.WORK}
                            step={3}
                            data={appData[SECTION_TYPES.WORK]}
                            onAddSection={handleAddSection}
                            onDelete={handleDeleteSection}
                            onSubmit={handleSubmit}
                        />
                        <AddendumSection
                            name="Addendum"
                            step={4}
                            data={appData[SECTION_TYPES.ADDENDUM]}
                            onAddSection={handleAddSection}
                            onDelete={handleDeleteSection}
                            onChangeName={handleAddendumChange}
                        />
                    </main>
                    <LinkGroup />
                </div>
                <CV
                    general={appData[SECTION_TYPES.GENERAL]}
                    education={appData[SECTION_TYPES.EDUCATION]}
                    work={appData[SECTION_TYPES.WORK]}
                    addendums={appData[SECTION_TYPES.ADDENDUM]}
                    printingRef={contentRef}
                    isVisible={isCvVisible}
                    onOutsideClick={toggleCV}
                />
            </div>
        </>
    );
}

export default App;
