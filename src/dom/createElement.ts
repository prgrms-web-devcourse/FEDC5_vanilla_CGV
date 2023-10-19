// properties 추론을 활용하기 위한 타입
interface DOMSpec<T extends keyof HTMLElementTagNameMap> {
    id?: string;
    classes?: string | string[];
    props?: {
        [key in keyof HTMLElementTagNameMap[T]]?: HTMLElementTagNameMap[T][key];
    };
    children?: HTMLElement | Text | (HTMLElement | Text)[];
}

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
export const createElement =
    <T extends keyof HTMLElementTagNameMap>(tagName: T) =>
    ({ id, classes = [], props = {}, children = [] }: DOMSpec<T>): HTMLElementTagNameMap[T] => {
        // 1. 요소 생성
        const $root = document.createElement(tagName);

        // 2. 요소의 class 설정
        if (typeof classes === "string") {
            $root.className = classes;
        } else {
            $root.className = classes.join(" ");
        }

        // 3. 요소의 id 설정
        if (id) {
            $root.id = id;
        }

        // 4. 요소의 property 설정대로 추가
        for (const property of Object.keys(props)) {
            $root[property] = props[property];
        }

        // 5. 자식 요소 생성 및 등록
        if (children instanceof HTMLElement) {
            $root.appendChild(children);
            return $root;
        }

        if (children instanceof Text) {
            $root.appendChild(children);
            return $root;
        }

        for (const $child of children) {
            $root.appendChild($child);
        }

        return $root;
    };
