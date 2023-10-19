import Menu from "./components/Menu";

interface Component {
    render: () => void;
}

new MainPage();
function MainPage(this: Component) {
    const $div = document.createElement("div");
    document.getElementById("root")?.append($div);
    this.render = () => {
        new Menu($div);
    };
    this.render();
}
