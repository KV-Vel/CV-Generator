import "./FormGeneral.css";

export default function GeneralFormSection() {
    // TODO: possibility to add photo?
    // TODO: use somewhere Maitree font
    // TODO: use file picker for avatar
    // Create General Info and push to git
    // Нарушение Label смотреть dev tools консоль

    return (
        <form>
            <fieldset>
                <legend>
                    GENERAL INFORMATION <span>1</span>
                </legend>
                <label htmlFor="first-last-name">First & Last name</label>
                <input type="text" id="first-last-name" placeholder="Jane Doe" />
                <label htmlFor="brief-description">Brief description</label>
                <input type="text" id="brief-description" placeholder="Future front-end dev based in Example city" />
                <label htmlFor="contacts">Contact information</label>
                <input type="text" id="contacts" placeholder="notreal-person@gmail.com" />
                <label htmlFor="avatar-picker">Photo</label>
                <input
                    type="file"
                    id="avatar-picker"
                    accept=".jpg, .jpeg, .png"
                    style={{ paddingBottom: "30px" }}
                ></input>
            </fieldset>
        </form>
    );
}
