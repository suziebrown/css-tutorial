import { renderAsInlineCode } from "@/helpers/renderHelpers";

type Solution = {
  hint: string;
  newStyles: Record<string, string>;
  oldStyles?: Record<string, string>;
};

export const justADivSolutions: Record<number, Solution> = {
  1: {
    hint: `Use the CSS tags ${renderAsInlineCode("width")} 
      and ${renderAsInlineCode("height")}`,
    newStyles: {
      width: "60px",
      height: "60px",
      "background-color": "#000000",
    },
  },
  2: {
    hint: `Set ${renderAsInlineCode("border-radius")} 
      as a percentage so that it scales with the size of the div`,
    newStyles: {
      "border-radius": "50%",
    },
    oldStyles: {
      width: "60px",
      height: "60px",
      "background-color": "#000000",
    },
  },
  3: {
    hint: `You will need to set ${renderAsInlineCode("border-width")} 
      as well as ${renderAsInlineCode("border-color")}`,
    newStyles: {
      "border-width": "8px",
      "border-color": "#831843",
    },
    oldStyles: {
      "border-radius": "50%",
      width: "60px",
      height: "60px",
      "background-color": "#000000",
    },
  },
};
