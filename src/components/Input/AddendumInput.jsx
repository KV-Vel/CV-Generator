import { useState, useEffect } from "react";
// CSS
import "./AddendumInput.css";

export default function CustomAddendum({ data, editName }) {
    const [addendumName, setAddendumName] = useState(data.subsection);
    const [addendumContent, setAddendumContent] = useState(data.inputs[0].value);

    useEffect(() => {
        editName(data.id, addendumName, addendumContent);
    }, [addendumName, addendumContent]);

    return (
        <div className="input-wrapper addendum">
            <div style={{ position: "relative" }}>
                <input
                    autoComplete="off"
                    value={addendumName}
                    id="addendum-name"
                    onChange={(event) => setAddendumName(event.target.value)}
                />
                <label htmlFor="addendum-name" className={addendumName.trim() ? "focused" : ""}>
                    Name
                </label>
            </div>
            <div className="addendum__input-wrapper">
                <textarea
                    id="addendum-content"
                    autoComplete="off"
                    value={addendumContent}
                    onChange={(event) => setAddendumContent(event.target.value)}
                ></textarea>
                <label htmlFor="addendum-content" className={addendumContent.trim() ? "focused" : ""}>
                    Content
                </label>
            </div>
        </div>
    );
}
