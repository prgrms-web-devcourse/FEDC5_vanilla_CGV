import Event from "./components/Event";

interface Component {
    render: () => void;
}

new MainPage();
function MainPage(this: Component) {
    const $div = document.createElement("div");
    document.getElementById("root")?.append($div);
    this.render = () => {
        new Event($div);
    };
    this.render();
}
