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
    const $div = document.createElement("div");
    $div.classList.add("main__menu-container");
    $target.append($div);

    this.render = () => {
        $div.innerHTML = `
        ${dummyData
            .map(({ title, imageUrl }, index) => {
                return `<div class="main__menu-item" key=menu-${index}>
                 <img src=${imageUrl} alt=${title}  />
                 <span>${title}</span>
             </div>`;
            })
            .join("")}
           
        `;
    };
    this.render();
}
