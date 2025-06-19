import defaultImg from "../../assets/images/default-image.png";

export default function CvGeneral({ data }) {
    const [name, description, email, image] = data;

    return (
        <>
            <div className="cv-avatar">
                <img src={image.value || defaultImg} alt="Avatar of the user" />
            </div>
            <div className="cv-text__general">
                <div className="cv-text__general__name">
                    <span>{name.value}</span>
                </div>
                <div className="cv-text__general__description">
                    <p>{description.value}</p>
                </div>
                <div className="cv-text__general__contact">
                    <span>{email.value && `Contact: ${email.value}`}</span>
                </div>
            </div>
        </>
    );
}
