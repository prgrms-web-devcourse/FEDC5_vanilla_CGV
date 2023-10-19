import { $ } from "@src/dom/createElement";

/**
 * Stateful Accordion 컴포넌트
 *
 * 상태를 제거하려 했으나 못 함.
 *
 * [주의 사항]
 * 1. initialRender 이후 re-render 기능은 없습니다. 해당 컴포넌트 하위 요소를 제외하고 re-render 해주세요.
 * 2. 상태 갱신은 공개 메소드인 `toggleCollapse` 로만 가능합니다.
 *
 * @param $header 헤더 내부에 들어갈 HTML Element
 * @param $body 바디 내부에 들어갈 HTML Element
 */
export class TheaterAccordion {
    private readonly $header: HTMLElement;
    private readonly $body: HTMLElement;

    // TODO: 접은 후 height가 너무 작게 나오는 문제가 있는데 해결을 못 함.
    // 임시 방편으로 접기 전의 height로 복구함
    private heightMap: Map<HTMLElement, string>;

    constructor($header: HTMLElement, $body: HTMLElement) {
        this.$header = $header;
        this.$body = $body;
        this.heightMap = new Map();
    }

    initialRender(open: boolean) {
        const { $header, $body } = this;

        const $root = $.div();
        $root.appendChild($header);
        $root.appendChild($body);

        // scrollHeight를 얻기 위해 마운트 된 이후에 수행
        this.setMaxHeightAfterMount(open);

        return $root;
    }

    // Public API
    toggleCollapse(open: boolean) {
        const { heightMap } = this;

        // open은 가변 상태여서 this로 접근
        const $roomContainers = this.getRoomContainers();

        for (const $container of $roomContainers) {
            const nextMaxHeight = open ? "0px" : heightMap.get($container) || "0px";

            $container.style.maxHeight = nextMaxHeight;
        }
    }

    private setMaxHeightAfterMount(open: boolean) {
        // 사용 이유: mount 후 실행되는 callback이 필요해서 사용
        // 주의 사항: window.onload 에 프로퍼티 방식으로 핸들러 등록 시 덮어씌여짐
        window.addEventListener("load", () => {
            const $roomContainers = this.getRoomContainers();

            for (const $container of $roomContainers) {
                // CSS 룰 추가
                $container.classList.add("accordion__collapsible_area");

                // 처음 height 지정
                const containerHeight = `${$container.scrollHeight}px`;

                // 닫힌 채로 시작하는 경우 0px로 시작
                $container.style.maxHeight = open ? containerHeight : "0px";

                this.heightMap.set($container, containerHeight);
            }
        });
    }

    private getRoomContainers() {
        return [...this.$body.getElementsByClassName("room__container")] as HTMLDivElement[];
    }
}
