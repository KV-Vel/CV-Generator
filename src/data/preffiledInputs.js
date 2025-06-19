import { SECTION_TYPES } from "../constants/sections";

export const prefilledInputs = {
    [SECTION_TYPES.GENERAL]: [
        {
            name: "Full name",
            value: "John Doe",
            id: crypto.randomUUID(),
        },
        {
            name: "Position",
            value: "Software engineer",
            id: crypto.randomUUID(),
        },
        {
            name: "Contact information",
            value: "example@mail.com",
            id: crypto.randomUUID(),
        },
        {
            name: "Photo",
            value: "",
            id: crypto.randomUUID(),
        },
    ],
    [SECTION_TYPES.EDUCATION]: [
        {
            name: "Institution",
            value: "University of London",
            id: crypto.randomUUID(),
        },
        {
            name: "Field of Study",
            value: "Computer Science",
            id: crypto.randomUUID(),
        },
        {
            name: "Start year",
            value: "2015",
            id: crypto.randomUUID(),
        },
        {
            name: "End year",
            value: "2019",
            id: crypto.randomUUID(),
        },
        {
            name: "Brief description",
            value: "Architecto maiores perspiciatis repellendus consectetur, iusto error quas deserunt quia explicabo at atque libero sint ipsam nostrum a eum incidunt tempore hic.",
            id: crypto.randomUUID(),
        },
    ],
    [SECTION_TYPES.WORK]: [
        {
            name: "Company",
            value: "Innovation Technologies",
            id: crypto.randomUUID(),
        },
        {
            name: "Position",
            value: "Front End Developer",
            id: crypto.randomUUID(),
        },
        {
            name: "Start year",
            value: "2020",
            id: crypto.randomUUID(),
        },
        {
            name: "End year",
            value: "Current time",
            id: crypto.randomUUID(),
        },
        {
            name: "Brief description",
            value: "Architecto maiores perspiciatis repellendus consectetur, iusto error quas deserunt quia explicabo at atque libero sint ipsam nostrum a eum incidunt tempore hic.",
            id: crypto.randomUUID(),
        },
    ],
    [SECTION_TYPES.ADDENDUM]: [
        {
            value: "HTML -> CSS -> Vanilla JS -> React -> Jest",
        },
    ],
};
