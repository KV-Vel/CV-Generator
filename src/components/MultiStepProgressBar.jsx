import "./MultiStepProgressBar.css";
import { AiOutlineCheck } from "react-icons/ai";

export default function ProgressBar() {
    function Step({ step, isStepFinished, isLastStep, isActive }) {
        // Добавить к активному aria-current="step"

        function renderFinishStep() {
            return (
                <div className="round-step">
                    <AiOutlineCheck style={{ fontSize: "1.3rem" }} />
                </div>
            );
        }

        function renderOrdinaryStep() {
            return (
                <>
                    <span className="round-step">{step}</span>
                    <div className="line-to-step"></div>
                </>
            );
        }

        let stateClass = "step-wrapper";
        if (isActive) stateClass += " active";
        if (isStepFinished) stateClass += " finished";

        return <li className={stateClass}>{isLastStep ? renderFinishStep() : renderOrdinaryStep()}</li>;
    }

    return (
        <div className="progress-bar__wrapper" aria-label="Progress bar">
            <ul>
                <Step step="1" isStepFinished={true} isActive={true} />
                <Step step="2" isStepFinished={false} isActive={true} />
                <Step step="3" isStepFinished={false} isActive={false} />
                <Step isStepFinished={false} isLastStep={true} />
            </ul>
        </div>
    );
}
