import { MdAdd } from "react-icons/md";
import "./AddSectionBtn.css";

export default function AddSectionBtn({ onAddSection }) {
    return (
        <button type="button" className="add-section-btn" onClick={onAddSection}>
            <span>Add Section</span>
            <div aria-hidden="true" className="add-icon-wrapper">
                <MdAdd viewBox="0 0 10 24" aria-hidden="true" />
            </div>
        </button>
    );
}
