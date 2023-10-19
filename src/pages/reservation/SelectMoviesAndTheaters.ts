interface SelectMoviesAndTheatersProps {
    $target;
    buttonState;
    onClickButton;
}

export default function SelectMoviesAndTheaters({
    $target,
    buttonState,
    onClickButton,
}: SelectMoviesAndTheatersProps) {
    let selectButton = '<div class="button-container">';
    for (const { type, count } of buttonState) {
        for (let i = 0; i < count; i++) {
            selectButton += `<button class="button" data-type="${type}" data-index="${i}">${type}</button>`;
        }
    }
    selectButton += "</div>";

    const $div = document.createElement("div");
    $div.innerHTML = selectButton;

    $div.querySelectorAll(".button").forEach(($button) => {
        $button.addEventListener("click", (e) => {
            const target = e.target as HTMLElement;

            const type = target.dataset.type || "";
            const index = parseInt(target.dataset.index || "-1", 10);

            onClickButton(type, index);
        });
    });

    $target?.appendChild($div);
}
