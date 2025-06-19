import "./CVAddendum.css";

export default function CvAddendum({ name, description }) {
    return (
        <div className="cv-aside__content__addendum">
            <h5>{name}</h5>
            <p>{description}</p>
        </div>
    );
}
