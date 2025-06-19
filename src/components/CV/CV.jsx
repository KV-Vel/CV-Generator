import { AnimatePresence, motion } from "motion/react";
import animationValues from "../../constants/motionAnimation";
import CvAddendum from "./CVAddendum";
import CvExperience from "./CVExperience";
import CvGeneral from "./CVGeneral";
import "./CV.css";

export default function CV({ general, education, work, addendums, printingRef, isVisible, onOutsideClick }) {
    function hasSubmitted(section) {
        return section.some((obj) => obj.isSubmitted);
    }

    return (
        <article
            className={isVisible ? "cv-wrapper open" : "cv-wrapper"}
            onClick={onOutsideClick}
            aria-hidden={!isVisible}
        >
            <div className="paper" ref={printingRef} aria-label="CV printing page">
                <AnimatePresence mode="popLayout">
                    {general.map(
                        (obj) =>
                            obj.isSubmitted && (
                                <motion.div
                                    key={obj.id}
                                    className="cv-top"
                                    initial={animationValues.initial}
                                    animate={animationValues.animate}
                                    transition={animationValues.transition}
                                >
                                    <CvGeneral data={obj.inputs} />
                                </motion.div>
                            ),
                    )}
                </AnimatePresence>
                <div className="cv-text">
                    <div className="cv-text__other">
                        <div className="cv-text__other-experience">
                            {hasSubmitted(education) && <h4>Education</h4>}
                            <AnimatePresence mode="popLayout">
                                {education.map(
                                    (obj) =>
                                        obj.isSubmitted && (
                                            <motion.div
                                                key={obj.id}
                                                className="part"
                                                exit={animationValues.exit}
                                                initial={animationValues.initial}
                                                animate={animationValues.animate}
                                                transition={animationValues.transition}
                                            >
                                                <CvExperience data={obj.inputs} />
                                            </motion.div>
                                        ),
                                )}
                            </AnimatePresence>
                        </div>
                        <div className="cv-text__other-experience">
                            {hasSubmitted(work) && <h4>Work</h4>}
                            <AnimatePresence mode="popLayout">
                                {work.map(
                                    (obj) =>
                                        obj.isSubmitted && (
                                            <motion.div
                                                key={obj.id}
                                                className="part"
                                                exit={animationValues.exit}
                                                initial={animationValues.initial}
                                                animate={animationValues.animate}
                                                transition={animationValues.transition}
                                            >
                                                <CvExperience data={obj.inputs} />
                                            </motion.div>
                                        ),
                                )}
                            </AnimatePresence>
                        </div>
                        <div className="cv-text__other-experience">
                            {addendums.length > 0 && <h4>Addendums</h4>}
                            <div className="addendum-wrapper">
                                <AnimatePresence mode="popLayout">
                                    {addendums.map((obj) => (
                                        <motion.div
                                            key={obj.id}
                                            exit={animationValues.exit}
                                            initial={animationValues.initial}
                                            animate={animationValues.animate}
                                            transition={animationValues.transition}
                                        >
                                            <CvAddendum name={obj.subsection} description={obj.inputs[0].value} />
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
