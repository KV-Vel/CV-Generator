import AddendumInput from "../Input/AddendumInput";
import "./Form.css";

export default function AddendumForm({ data, onDelete, onNameChange }) {
    return (
        <form onSubmit={(event) => event.preventDefault()}>
            <fieldset>
                <legend>{data.subsection}</legend>
                <AddendumInput data={data} editName={onNameChange} />
            </fieldset>
            <div className="button-group">
                <button type="button" className="delete-btn" onClick={() => onDelete("Addendum", data.id)}>
                    <span>Delete</span>
                </button>
            </div>
        </form>
    );
}
