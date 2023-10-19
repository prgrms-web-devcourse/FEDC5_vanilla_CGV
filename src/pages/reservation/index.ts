import SelectMoviesAndTheaters from "./SelectMoviesAndTheaters";

const $root = document.getElementById("root")!;

type ButtonState = {
    type: string;
    count: number;
    selectedMovies?: string[];
    selectedTheaters?: string[];
}[];

const buttonState: ButtonState = [
    { type: "영화", count: 2, selectedMovies: [] },
    { type: "극장", count: 3, selectedTheaters: [] },
];
const onClickButton = (type: string, index: number) => {
    console.log(`type: ${type}, index: ${index}`);
};

new SelectMoviesAndTheaters({ $target: $root, buttonState, onClickButton });
