import { useId } from "react";

export default function Input({ data, onChange }) {
    const id = useId();

    function getInput(name) {
        switch (name) {
            case "Photo":
                return <input id={id} type="file" onChange={onChange} />;
            case "Brief description":
                return <textarea id={id} value={data.value} onChange={onChange} autoComplete="off" required></textarea>;
            default:
                return <input id={id} type="text" onChange={onChange} value={data.value} autoComplete="off" required />;
        }
    }

    return (
        <div className="input-wrapper">
            {getInput(data.name)}
            <label htmlFor={id} className={data.value.trim() || data.name === "Photo" ? "focused" : ""}>
                {data.name}
            </label>
        </div>
    );
}
