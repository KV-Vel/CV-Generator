// COMPONENTS
import Form from "../Forms/Form";
import AddSectionBtn from "../UI/Buttons/AddSectionBtn";

export default function Section({ name, step, initialData, onAddSection, onDelete }) {
    return (
        <section>
            <h2>
                {name}
                <span>{step}</span>
            </h2>
            {initialData.map((obj, index) => {
                if (!obj.id) return;
                return (
                    <Form
                        key={obj.id}
                        subsectionName={name}
                        index={index}
                        inputsData={obj.inputs}
                        handleDelete={() => onDelete(obj.id)}
                    />
                );
            })}
            {name !== "General Information" && <AddSectionBtn onAddSection={onAddSection} />}
        </section>
    );
}
