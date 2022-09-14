import { renderAsInlineCode } from "@/helpers/renderHelpers";

type Solution = {
  hint: string;
  solution: string;
};

export const justADivSolutions: Record<number, Solution> = {
  1: {
    hint: `Try using the CSS tags ${renderAsInlineCode("width")} 
      and ${renderAsInlineCode("height")}`,
    solution: `width: 40px;
  height: 40px;
  background-color: #000000;`,
  },
};
