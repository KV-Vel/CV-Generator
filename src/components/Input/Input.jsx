import { useId } from "react";

export default function Input({ name, value = "", onChange }) {
    const id = useId();
    return (
        <div className="input-wrapper">
            {name === "Photo" ? (
                <input id={id} type="file" />
            ) : (
                <input id={id} type="text" onChange={onChange} value={value} required autoComplete="off" />
            )}
            <label htmlFor={id}>{name} </label>
        </div>
    );
}
