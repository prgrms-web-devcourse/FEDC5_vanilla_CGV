// properties 추론을 활용하기 위한 타입
type DOMSpec<T extends keyof HTMLElementTagNameMap> =
    | {
          children?: HTMLElement | HTMLElement[];
          className?: string | string[];
      }
    | {
          [key in keyof HTMLElementTagNameMap[T]]?: HTMLElementTagNameMap[T][key];
      };

/**
 * HTML 요소 생성 및 속성 할당을 간소화할 목적으로 만든 함수
 *
 * HTMLElement 별 프로퍼티 타이핑을 위해서 인자로 받는다.
 *
 * TODO: 한 번의 함수 호출로도 properties 타입 추론이 가능하게 하기
 *
 * @param tagName 생성할 HTML 타입
 * @returns HTML 요소
 */
const createElement =
    <T extends keyof HTMLElementTagNameMap>(tagName: T) =>
    ({ className = "", children = [], ...props }: DOMSpec<T>): HTMLElementTagNameMap[T] => {
        // 1. 요소 생성
        const $elem = document.createElement(tagName);

        // 2. className 타입에 따라 다르게
        if (typeof className === "string" && className.length > 0) {
            $elem.className = className;
        }

        if (className instanceof Array) {
            $elem.className = className.join(" ");
        }

        // 3. 요소의 property 설정대로 추가
        for (const property of Object.keys(props)) {
            $elem[property] = props[property];
        }

        // 4. 자식 요소 생성 및 등록
        if (children instanceof HTMLElement) {
            $elem.appendChild(children);
            return $elem;
        }

        if (children instanceof Text) {
            $elem.appendChild(children);
            return $elem;
        }

        for (const $child of children) {
            $elem.appendChild($child);
        }

        return $elem;
    };

export const $ = {
    div: (spec: DOMSpec<"div"> = {}) => createElement("div")(spec),
    span: (spec: DOMSpec<"span"> = {}) => createElement("span")(spec),
    button: (spec: DOMSpec<"button"> = {}) => createElement("button")(spec),
    img: (spec: DOMSpec<"img"> = {}) => createElement("img")(spec),
    header: (spec: DOMSpec<"header"> = {}) => createElement("header")(spec),
    h2: (spec: DOMSpec<"h2"> = {}) => createElement("h2")(spec),
};
