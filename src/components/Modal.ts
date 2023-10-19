import { createElement } from "@src/dom/createElement";

// 모달에서 여러 회 사용하는 상수
const DIV = "div";
const CLASS_MODAL_BACKDROP = "modal__backdrop";
const CLASS_MODAL_BACKDROP_INVISIBLE = "modal__backdrop--invisible";
const CLASS_SLIDE_IN_DOWN = "slideInDown";
const CLASS_SLIDE_IN_UP = "slideInUp";

/**
 * ### Modal 사용 방법
 *
 * #### 생성 시 (전역에서 최초 1회)
 *
 * 1. window.modal = new Modal($root);
 *
 * #### 사용 시
 * 1. 모달 내용 변경:
 *      - modal.setBodyContent($content);
 *      - modal.setFooterContent($footer);
 *
 * 2. 모달 열기: modal.open();
 * 3. 모달 닫기: modal.close();
 *
 * ### 기능 요구사항
 *
 * 1. 열기, 닫기 메소드 제공
 * 2. 다른 화면 위에 표시
 * 3. X버튼, 배경 누르면 닫기
 *
 * ### 스타일 요구사항
 *
 * 1. 밑에서 올라오는 애니메이션
 * 2. 배경 어둡게 (backdrop)
 * 3. 헤더 (둥근 모서리)
 */
export class Modal {
    private readonly $parent: HTMLElement;
    private readonly $backdrop: HTMLElement;
    private readonly $root: HTMLElement;
    private readonly $container: HTMLElement;
    private readonly $bodyScrollContainer: HTMLElement;

    constructor($parent: HTMLElement) {
        // 배경, X버튼 클릭 시 닫기 핸들러
        const closeHandler = this.closeButtonHandler.bind(this);

        // 요소 생성
        // 배경
        this.$backdrop = createElement(DIV)({
            classes: [CLASS_MODAL_BACKDROP, CLASS_MODAL_BACKDROP_INVISIBLE],
            props: {
                onclick: closeHandler,
            },
            children:
                // 모달 루트 (애니메이션 실행됨)
                (this.$root = createElement(DIV)({
                    classes: "modal__root--for-animation",
                    children:
                        // 모달 컨테이너
                        (this.$container = createElement(DIV)({
                            classes: "modal__container",
                            children: [
                                // 닫기 버튼
                                createElement("button")({
                                    classes: "modal__closeButton",
                                    props: {
                                        onclick: closeHandler,
                                        textContent: "X",
                                    },
                                }),
                                // Modal 콘텐츠 영역이 길어질 때 스크롤 제공
                                (this.$bodyScrollContainer = createElement(DIV)({
                                    classes: "modal__body__scroll_container",
                                })),
                            ],
                        })),
                })),
        });

        this.$parent = $parent;
        this.$parent.appendChild(this.$backdrop);
    }

    setBodyContent($content: HTMLElement) {
        this.$bodyScrollContainer.appendChild($content);
    }

    setFooterContent($footer: HTMLElement) {
        $footer.classList.add("modal__footer");
        this.$container.appendChild($footer);
    }

    open() {
        this.updateModalHeight();

        this.showModal();
        this.showBackdrop();
    }

    close() {
        this.hideModal();
        this.hideBackdrop();
    }

    closeButtonHandler(e: MouseEvent) {
        // bubbling 아닐 때만 <=> 버튼, backdrop이 아닌 대상을 클릭한 경우는 제외
        if (e.eventPhase === e.BUBBLING_PHASE) {
            return;
        }

        this.close();
    }

    private updateModalHeight() {
        // display: none으로 하면 offsetHeight로는 0이 나옴
        // @see https://stackoverflow.com/questions/1473584/need-to-find-height-of-hidden-div-on-page-set-to-displaynone
        const modalHeight = this.$root.offsetHeight;
        this.setModalHeightOnCssForTransform(modalHeight);
    }

    private setModalHeightOnCssForTransform(modalHeight: number) {
        this.$root.style.setProperty("--modal-height", `${modalHeight}px`);

        // root 요소의 height를 정해야 자식인 container 요소에서 height: 100% 사용 가능
        this.$root.style.setProperty("height", `${modalHeight}px`);
    }

    private showModal() {
        // 어쩔 수 없이 JS로 실행
        this.$backdrop.style.removeProperty("transform");

        this.$root.classList.remove(CLASS_SLIDE_IN_DOWN);
        this.$root.classList.add(CLASS_SLIDE_IN_UP);
    }

    private showBackdrop() {
        this.$backdrop.classList.remove(CLASS_MODAL_BACKDROP_INVISIBLE);
    }

    private hideModal() {
        this.$root.classList.remove(CLASS_SLIDE_IN_UP);
        this.$root.classList.add(CLASS_SLIDE_IN_DOWN);
    }

    private hideBackdrop() {
        this.$backdrop.classList.add(CLASS_MODAL_BACKDROP_INVISIBLE);

        // 어쩔 수 없이 JS로 실행
        setTimeout(() => {
            this.$backdrop.style.transform = "translateY(100vh)";
        }, 500);
    }
}
