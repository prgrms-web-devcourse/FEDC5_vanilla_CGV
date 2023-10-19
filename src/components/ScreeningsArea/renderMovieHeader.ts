import { MovieAPIResponse } from "@src/api/APISpec";
import { $ } from "@src/dom/createElement";

/**
 * Stateless
 */
export const renderMovieHeader = ({ title, ageRating, thumbnailUrl }: MovieAPIResponse) =>
    $.header({
        className: "movie__header",
        children: [
            // TODO: CSS 이름 규칙 정하기
            $.div({
                className: "movie__header__left",
                children: [
                    $.img({
                        className: "movie__header__thumbnail",
                        src: thumbnailUrl,
                    }),
                    $.h2({
                        className: "movie__header__title", // h 계열로 만들어야 될지는 모르겠음.
                        textContent: title,
                    }),
                    $.img({
                        className: "movie__header__ageRating",
                        src: `http://localhost:8080/public/images/${ageRating}.png`, // 이런 식으로 해야 될 듯?
                    }),
                ],
            }),
            $.div({
                className: "movie__header__right",
                children: $.button({
                    className: ["movie__header__movieInfoButon"],
                    textContent: "영화정보",
                    onclick: () => alert(`${title}(으)로 이동합니다...`),
                }),
            }),
        ],
    });
