const dataHandler = (function DataHandler() {
    function getData(name, prefilled) {
        switch (name) {
            case "general":
                return getGeneralSectionData(prefilled);
            case "education":
                return getEducationalExperienceData(prefilled);
            case "work":
                return getWorkExperienceData(prefilled);
            case "skills":
                return getSkills(prefilled);
            default:
                console.log("No such data");
        }
    }
    function getGeneralSectionData(prefilled = false) {
        return {
            subsection: "General Information",
            id: crypto.randomUUID(),
            inputs: [
                {
                    name: "Full name",
                    value: prefilled ? "John Doe" : "",
                    id: crypto.randomUUID(),
                },
                {
                    name: "Brief description",
                    value: prefilled ? "Future front end dev..." : "",
                    id: crypto.randomUUID(),
                },
                {
                    name: "Contact information",
                    value: prefilled ? "example@mail.com" : "",
                    id: crypto.randomUUID(),
                },
                {
                    name: "Photo",
                    id: crypto.randomUUID(),
                },
            ],
        };
    }

    function getEducationalExperienceData(prefilled = false) {
        return {
            subsection: "Educational experience",
            id: crypto.randomUUID(),
            inputs: [
                {
                    name: "Institution",
                    value: prefilled ? "University of London" : "",
                    id: crypto.randomUUID(),
                },
                {
                    name: "Field of Study",
                    value: prefilled ? "Example" : "",
                    id: crypto.randomUUID(),
                },
                {
                    name: "Degree",
                    value: prefilled ? "BAeng" : "",
                    id: crypto.randomUUID(),
                },
                {
                    name: "Start year",
                    value: prefilled ? "2015" : "",
                    id: crypto.randomUUID(),
                },
                {
                    name: "End year",
                    value: prefilled ? "2019" : "",
                    id: crypto.randomUUID(),
                },
            ],
        };
    }

    function getWorkExperienceData(prefilled = false) {
        return {
            subsection: "Work experiece",
            id: crypto.randomUUID(),
            inputs: [
                {
                    name: "Company",
                    value: prefilled ? "Innovation Technologies" : "",
                    id: crypto.randomUUID(),
                },
                {
                    name: "Position",
                    value: prefilled ? "Front End Developer" : "",
                    id: crypto.randomUUID(),
                },
                {
                    name: "Start year",
                    value: prefilled ? "2020" : "",
                    id: crypto.randomUUID(),
                },
                {
                    name: "End year",
                    value: prefilled ? "-" : "",
                    id: crypto.randomUUID(),
                },
            ],
        };
    }

    function getSkills(prefilled = false) {
        return {
            subsection: "Skills",
            id: crypto.randomUUID(),
            inputs: prefilled
                ? [
                      {
                          name: "CSS",
                          value: "",
                          id: crypto.randomUUID(),
                      },
                      {
                          name: "HTML",
                          value: "",
                          id: crypto.randomUUID(),
                      },
                      {
                          name: "Vanilla JS",
                          value: "",
                          id: crypto.randomUUID(),
                      },
                  ]
                : [],
        };
    }

    return { getData };
})();

export default dataHandler;
