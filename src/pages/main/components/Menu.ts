const dummyData: { title: string; imageUrl: string }[] = [
    {
        title: "MY CGV",
        imageUrl:
            "https://img.cgv.co.kr/WebApp/contents/main/functional/funcmenu/16214899884560.png",
    },
    {
        title: "포토플레이",
        imageUrl:
            "https://img.cgv.co.kr/WebApp/contents/main/functional/funcmenu/16215947881070.png",
    },
    {
        title: "할인정보",
        imageUrl:
            "https://img.cgv.co.kr/WebApp/contents/main/functional/funcmenu/16219037942520.png",
    },
    {
        title: "CGV스토어",
        imageUrl:
            "https://img.cgv.co.kr/WebApp/contents/main/functional/funcmenu/16214899884870.png",
    },
];

interface Component {
    render: () => void;
}

export default function Menu(this: Component, $target: Element) {
    const $div: HTMLDivElement = document.createElement("div");
    $target.append($div);
    $div.attributeStyleMap.set("display", "flex");
    $div.attributeStyleMap.set("margin-bottom", "100px"); //test

    this.render = () => {
        $div.innerHTML = `
        ${dummyData
            .map(({ title, imageUrl }, index) => {
                return `<div class="menu" key=menu-${index}>
                 <img src=${imageUrl} alt=${title}  />
                 <span >${title}</span>
             </div>`;
            })
            .join("")}
           
        `;
    };
    this.render();
}
