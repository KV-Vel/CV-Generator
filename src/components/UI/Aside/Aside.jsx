import { LuView } from "react-icons/lu";
import { CiEraser } from "react-icons/ci";
import { VscFilePdf, VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { IconContext } from "react-icons";
import "./Aside.css";

export default function Aside({ handleClear, handlePrefill, handleView, handlePrint }) {
    return (
        <IconContext.Provider value={{ color: "#fff", size: "1.5em", display: "inline-block" }}>
            <aside>
                <button type="button" onClick={handleView} aria-labelledby="btn-label-view" className="view-btn">
                    <LuView aria-hidden="true" />
                    <span id="btn-label-view">View</span>
                </button>
                <button type="button" onClick={handleClear} aria-labelledby="btn-label-clear">
                    <CiEraser aria-hidden="true" />
                    <span id="btn-label-clear">Clear</span>
                </button>
                <button type="button" onClick={handlePrefill} aria-labelledby="btn-label-prefill">
                    <VscGitPullRequestGoToChanges aria-hidden="true" />
                    <span id="btn-label-prefill">Prefill</span>
                </button>
                <button type="button" aria-labelledby="btn-label-pdf" onClick={handlePrint}>
                    <VscFilePdf aria-hidden="true" />
                    <span id="btn-label-pdf">PDF</span>
                </button>
            </aside>
        </IconContext.Provider>
    );
}
