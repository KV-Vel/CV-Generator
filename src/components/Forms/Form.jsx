import { useState } from "react";
import Input from "../Input/Input";
import "./Form.css";

export default function Form({ subsectionName, index, inputsData, handleDelete, onSubmit }) {
    const [formInputs, setFormInputs] = useState(inputsData);

    function handleChange(event, id, type = "text") {
        setFormInputs((prevFormInputs) => {
            const changedInputs = prevFormInputs.inputs.map((input) => {
                if (input.id !== id) return input;

                return {
                    ...input,
                    value: type === "file" ? URL.createObjectURL(event.target.files[0]) : event.target.value,
                };
            });

            return {
                ...prevFormInputs,
                inputs: changedInputs,
            };
        });
    }

    return (
        <form onSubmit={(event) => onSubmit(event, subsectionName, formInputs.id, formInputs.inputs)}>
            <fieldset>
                <legend>
                    {subsectionName} <span aria-current="step">{index + 1}</span>
                </legend>
                {formInputs.inputs.map((inputInfo) => (
                    <Input
                        key={inputInfo.id}
                        data={inputInfo}
                        onChange={(event) =>
                            inputInfo.name === "Photo"
                                ? handleChange(event, inputInfo.id, "file")
                                : handleChange(event, inputInfo.id)
                        }
                    />
                ))}
            </fieldset>
            <div className="button-group">
                <button className="submit-btn">Submit</button>
                {subsectionName !== "General Information" && (
                    <button type="button" className="delete-btn" onClick={handleDelete}>
                        <span>Delete</span>
                    </button>
                )}
            </div>
        </form>
    );
}
