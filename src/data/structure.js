import { SECTION_TYPES } from "../constants/sections";
import { LABELS } from "../constants/labels";

export const structure = {
    [SECTION_TYPES.GENERAL]: {
        subsection: "General Information",
        id: crypto.randomUUID(),
        isSubmitted: false,
        inputs: LABELS[SECTION_TYPES.GENERAL].map((label) => ({ name: label, value: "", id: crypto.randomUUID() })),
    },
    [SECTION_TYPES.EDUCATION]: {
        subsection: "Educational Experience",
        id: crypto.randomUUID(),
        isSubmitted: false,
        inputs: LABELS[SECTION_TYPES.EDUCATION].map((label) => ({ name: label, value: "", id: crypto.randomUUID() })),
    },
    [SECTION_TYPES.WORK]: {
        subsection: "Work Experiece",
        id: crypto.randomUUID(),
        isSubmitted: false,
        inputs: LABELS[SECTION_TYPES.WORK].map((label) => ({ name: label, value: "", id: crypto.randomUUID() })),
    },
    [SECTION_TYPES.ADDENDUM]: {
        subsection: "Addendum",
        id: crypto.randomUUID(),
        isSubmitted: false,
        inputs: LABELS[SECTION_TYPES.ADDENDUM].map((label) => ({ name: label, value: "", id: crypto.randomUUID() })),
    },
};
