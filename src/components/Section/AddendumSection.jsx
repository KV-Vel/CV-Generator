import { motion, AnimatePresence } from "motion/react";
import AddendumForm from "../Forms/AddendumForm";
import AddSectionBtn from "../UI/Buttons/AddSectionBtn";

export default function AddendumSection({ name, step, data, onAddSection, onDelete, onChangeName }) {
    return (
        <section>
            <h2>
                {name}
                <span aria-hidden="true">{step}</span>
            </h2>
            <AnimatePresence>
                {data.map((obj) => (
                    <motion.div
                        key={obj.id}
                        exit={{ opacity: 0, x: "-400px" }}
                        initial={{ opacity: 0, x: "-400px" }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <AddendumForm data={obj} onDelete={onDelete} onNameChange={onChangeName} />
                    </motion.div>
                ))}
            </AnimatePresence>
            <AddSectionBtn onAddSection={() => onAddSection(name)} />
        </section>
    );
}
