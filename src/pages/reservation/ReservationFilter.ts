interface Sort {
    $target: Element | null;
    name: string;
    onSortSelect: (selected: string) => void;
    onfilterSelect: () => void;
}

/*
    name : [MovieName,MovieTheater, MovieTime]
*/

export default function ReservationFilter({ $target, name, onSortSelect, onfilterSelect }: Sort) {
    const $div: HTMLDivElement = document.createElement("div");
    $div.className = "filterBar";
    if ($target === null) {
        throw new Error();
    }
    $target.appendChild($div);
    function getSiblings(currentNode) {
        const slblings: Array<string> = [];

        // 부모 노드가 없는 경우 현재 노드를 반환
        if (!currentNode.parentNode) {
            return currentNode;
        }

        // 1. 부모 노드를 접근합니다.
        const parentNode = currentNode.parentNode;

        // 2. 부모 노드의 첫 번째 자식 노드를 가져옵니다.
        let silblingNode = parentNode.firstChild;

        while (silblingNode) {
            // 기존 노드가 아닌 경우 배열에 추가합니다.
            if (silblingNode.nodeType === 1) {
                slblings.push(silblingNode);
            }
            // 다음 노드를 접근합니다.
            silblingNode = silblingNode.nextElementSibling;
        }

        // 형제 노드가 담긴 배열을 반환합니다.
        return slblings;
    }

    const render = () => {
        $div.innerHTML = `
            <div class="filterBar__stringSort">
                <ul class="filterBar__stringSort__ul">
                    <li style=${
                        name === "MovieName"
                            ? "list-style:circle;color:black;font-weigth:900"
                            : "list-style:none;color:gray;font-weigth:normal"
                    }><a class="sortList" data-sort="movie">영화순</a></li>
                    <li style=${
                        name === "MovieTheater"
                            ? "list-style:circle;color:black;font-weigth:900"
                            : "list-style:none;color:gray;font-weigth:normal"
                    }><a class="sortList" data-sort="theater">극장순</a></li>
                    <li style=${
                        name === "MovieTime"
                            ? "list-style:circle;color:black;font-weigth:900"
                            : "list-style:none; color:gray;font-weigth:normal"
                    }><a class="sortList" data-sort="time">시간순</a></li>
                </ul>
            </div>
            <div class="filterBar__filterButton">
                <a style="cursor:pointer">필터</a>
            </div>
        `;
        const $filterBar_stringSort_ul: HTMLElement = document.querySelector(
            ".filterBar__stringSort__ul",
        ) as HTMLElement;

        $filterBar_stringSort_ul?.addEventListener("click", (e: MouseEvent) => {
            //target을 따로해줘야 classList가 정상작동함
            const target = e.target as HTMLElement;
            if (target?.classList.contains("sortList")) {
                const list = getSiblings(target.parentElement!);
                for (let i = 0; i < list.length; i++) {
                    list[i].style.listStyle = "none";
                    list[i].style.color = "gray";
                    list[i].style.font = "100";
                }
                target.parentElement!.style.listStyle = "circle";
                target.parentElement!.style.font = "900";
                target.parentElement!.style.color = "black";
                if (target.textContent === null) {
                    throw new Error();
                }
                const { sort } = target.dataset;
                onSortSelect(sort!);
            }
        });
        document.querySelector(".filterBar__filterButton")?.addEventListener("click", () => {
            onfilterSelect();
        });
    };

    render();
}
