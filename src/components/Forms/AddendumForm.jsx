// CSS
import "./Form.css";
// COMPONENTS
import SkillsInput from "../Input/SkillsInput";

export default function AddendumForm({ subsectionName, index }) {
    return (
        <form>
            <fieldset>
                <legend>
                    {subsectionName} <span>{index}</span>
                </legend>
                <SkillsInput />
            </fieldset>
            <div className="button-group">
                <button className="submit-btn">Submit</button>
            </div>
        </form>
    );
}
