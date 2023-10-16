const dummyData: { isFull: boolean; imageUrl: string }[] = [
    {
        isFull: false,
        imageUrl:
            "https://img.cgv.co.kr/WebApp/contents/main/seasonimage/eventbn/16950277927610.jpg",
    },
    {
        isFull: true,
        imageUrl: "https://img.cgv.co.kr/WebApp/contents/main/seasonimage/news/16938112095960.png",
    },
    {
        isFull: true,
        imageUrl: "https://adimg.cgv.co.kr/images/202310/openthedoor/640x200.jpg",
    },
];

interface Component {
    render: () => void;
}

export default function Event(this: Component, $target: Element) {
    const $div = document.createElement("div");
    $target.append($div);

    this.render = () => {
        $div.innerHTML = `
        <div class="event-info">
            <span class="title">Event</span>
            <span class="showAll">전체보기 > </span>
        </div>
        <div class="event-list">
        ${dummyData
            .map(({ isFull, imageUrl }, index) => {
                return `
                 <img key=event-${index} style=${
                     !isFull && `width:90%;margin:0%5%;`
                 } src=${imageUrl} alt='이벤트-${index + 1}' />
          `;
            })
            .join("")}
        
        </div>`;
    };
    this.render();
}
