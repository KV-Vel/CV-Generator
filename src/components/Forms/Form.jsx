import { useState } from "react";
// CSS
import "./Form.css";
// COMPONENTS
import Input from "../Input/Input";

export default function Form({ subsectionName, index, inputsData, handleDelete }) {
    const [formInputs, setFormInputs] = useState(inputsData);

    function handleChange(e, id) {
        setFormInputs(prevFormInputs =>
            prevFormInputs.map(obj => {
                if (obj.id === id) {
                    return { ...obj, value: e.target.value };
                }
                return obj;
            }),
        );
    }

    return (
        <form>
            <fieldset>
                <legend>
                    {subsectionName} <span>{index + 1}</span>
                </legend>
                {formInputs.map(inputInfo => (
                    <Input
                        key={inputInfo.id}
                        name={inputInfo.name}
                        value={inputInfo.value ? inputInfo.value : ""}
                        onChange={e => handleChange(e, inputInfo.id)}
                    />
                ))}
            </fieldset>
            <div className="button-group">
                <button className="submit-btn">Submit</button>
                <button type="button" className="delete-btn" onClick={handleDelete}>
                    <span>Delete</span>
                </button>
            </div>
        </form>
    );
}
