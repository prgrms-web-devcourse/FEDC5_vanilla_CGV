import { TheaterAPIRecord } from "@src/api/APISpec";
import { $ } from "@src/dom/createElement";

import { renderRoom } from "./renderRoom";
import { TheaterAccordion } from "./TheaterAccordion";

/**
 * Stateful 컴포넌트
 * open/close 상태를 소유함
 *
 * [주의 사항]
 * 1. initialRender 이후 re-render 기능은 없습니다. 해당 컴포넌트 하위 요소를 제외하고 re-render 해주세요.
 * 2. 외부에서의 상태 변경은 불가능합니다.
 */
export class TheaterRoot {
    private readonly theaterTitle: string;
    private readonly theater: TheaterAPIRecord;
    private accordionInstance: TheaterAccordion | undefined;
    private open: boolean;

    // 지금처럼 무조건 렌더링하는 생성자에 넣는 것도 나쁘지 않을 듯?
    constructor(theaterTitle: string, theater: TheaterAPIRecord) {
        this.theaterTitle = theaterTitle;
        this.theater = theater;
        this.open = true;
    }

    initialRender() {
        const { theaterTitle, theater, open } = this;

        // 그냥 <강변> 하고 헤더 그려주면 끝임
        const $theaterHeader = $.div({
            className: "theater__header",
            onclick: this.handleHeaderClick.bind(this),
            children: [
                $.span({
                    className: "theater__header__title",
                    textContent: theaterTitle,
                }),
                $.button({
                    className: [
                        "theater__header__collapse_btn",
                        // 초기값이 <닫기>이면 닫은 채로 시작해야 함
                        open ? "theater__header__collapse_btn--open" : "",
                    ],
                }),
            ],
        });

        const $theaterBody = $.div({
            className: "theater__body",
        });

        const accordionInstance = new TheaterAccordion($theaterHeader, $theaterBody);
        const $theaterRoot = accordionInstance.initialRender(this.open);
        this.accordionInstance = accordionInstance;

        // 관 순회 (이름만 필요함)
        const rooms = Object.entries(theater);

        // 관 순회
        for (const [roomTitle, room] of rooms) {
            const screeningTypes = Object.entries(room);

            // 상영 방식 순회
            for (const [screeningType, screenings] of screeningTypes) {
                const $roomRoot = renderRoom({
                    screeningType,
                    roomTitle,
                    screenings,
                });

                $theaterBody.appendChild($roomRoot);
            }
        }

        return $theaterRoot;
    }

    private handleHeaderClick(e: MouseEvent) {
        // TODO: 마크업이 변경되어도 버튼을 찾을 수 있는 좋은 방법 = ?
        const $arrowButton = (e.target as HTMLDivElement).getElementsByTagName("button")[0];
        const className = "theater__header__collapse_btn--open";

        if (this.open) {
            $arrowButton.classList.remove(className);
        } else {
            $arrowButton.classList.add(className);
        }

        this.accordionInstance?.toggleCollapse(this.open);
        this.open = !this.open;
    }
}
