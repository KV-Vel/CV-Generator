import { motion, AnimatePresence } from "motion/react";
import Form from "../Forms/Form";
import AddSectionBtn from "../UI/Buttons/AddSectionBtn";

export default function Section({ name, step, data, onAddSection, onDelete, onSubmit }) {
    return (
        <section>
            <h2>
                {name}
                <span aria-hidden="true">{step}</span>
            </h2>
            <AnimatePresence>
                {data.map((obj, index) => {
                    if (!obj.id) return;
                    return (
                        <motion.div
                            key={obj.id}
                            exit={{ opacity: 0, x: "-400px" }}
                            initial={{ opacity: 0, x: "-400px" }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Form
                                subsectionName={name}
                                index={index}
                                inputsData={obj}
                                handleDelete={() => onDelete(name, obj.id)}
                                onSubmit={onSubmit}
                            />
                        </motion.div>
                    );
                })}
            </AnimatePresence>
            {name !== "General Information" && <AddSectionBtn onAddSection={() => onAddSection(name)} />}
        </section>
    );
}
