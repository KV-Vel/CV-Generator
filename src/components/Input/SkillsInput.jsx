import { useState, useContext } from "react";
// CSS
import "./SkillsInput.css";
// ICONS
import { CiSquareRemove } from "react-icons/ci";
// COMPONENTS
import { AppDataContext } from "../../App";

export default function SkillsInput() {
    const { appData, setAppData } = useContext(AppDataContext);
    const [currentInput, setCurrentInput] = useState("");

    function deleteSkill(id) {
        setAppData(prevAppData => {
            const copy = prevAppData.skills.slice();

            return {
                ...prevAppData,
                skills: [{ ...copy[0], inputs: copy[0].inputs.filter(obj => obj.id !== id) }],
            };
        });
    }

    function addSkill(value) {
        if (["", " "].includes(value)) return;
        setAppData(prevAppData => {
            const copy = prevAppData.skills.slice();

            return {
                ...prevAppData,
                skills: [
                    { ...copy[0], inputs: [...copy[0].inputs, { value: "", id: crypto.randomUUID(), name: value }] },
                ],
            };
        });

        setCurrentInput("");
    }

    return (
        <div className="input-wrapper skills">
            <div className="skills-wrapper">
                {appData.skills[0].inputs &&
                    appData.skills[0].inputs.map(obj => {
                        return (
                            <div key={obj.id} className="skill">
                                <span>{obj.name}</span>
                                <button type="button" onClick={() => deleteSkill(obj.id)}>
                                    <CiSquareRemove size="1.5em" color="rgb(194, 11, 60)" />
                                </button>
                            </div>
                        );
                    })}
            </div>
            <div className="skills__input-wrapper">
                <input
                    type="text"
                    required
                    autoComplete="off"
                    value={currentInput}
                    onChange={e => setCurrentInput(e.target.value)}
                />
                <label htmlFor="skills">Skill</label>
                <button type="button" className="add-skills-btn" onClick={() => addSkill(currentInput)}>
                    Add
                </button>
            </div>
        </div>
    );
}
