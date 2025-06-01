import AddendumForm from "../Forms/AddendumForm";

export default function AddendumSection({ name, step }) {
    return (
        <section>
            <h2>
                {name}
                <span>{step}</span>
            </h2>
            <AddendumForm subsectionName={name} index={1} />
        </section>
    );
}
