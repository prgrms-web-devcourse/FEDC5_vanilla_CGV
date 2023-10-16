import Menu from "./components/Menu";

interface Page {
    render: () => void;
}

new mainPage();
export default function mainPage(this: Page) {
    const $div: HTMLDivElement = document.createElement("div");
    document.getElementById("root")?.append($div);
    this.render = () => {
        new Menu($div);
    };
    this.render();
}
