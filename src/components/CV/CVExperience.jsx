import "./CVExperience.css";

export default function CvExperience({ data }) {
    const [place, position, startYear, endYear, description] = data;

    return (
        <>
            <div className="part-left">
                <h5>{place.value}</h5>
                <span>
                    {startYear.value}–{endYear.value}
                </span>
            </div>
            <div className="part-right">
                <h5>{position.value}</h5>
                <p>{description.value}</p>
            </div>
        </>
    );
}
