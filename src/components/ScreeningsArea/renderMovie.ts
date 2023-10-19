import { MovieAPIRecord, MovieAPIResponse } from "@src/api/APISpec";
import { $ } from "@src/dom/createElement";

import { renderMovieHeader } from "./renderMovieHeader";
import { TheaterRoot } from "./TheaterRoot";

/**
 * Stateless
 */
export const renderMovie = (movieMetadata: MovieAPIResponse, movie: MovieAPIRecord) => {
    const $movieRoot = $.div();

    // 상단의 작은 영역
    const $emptySpace = $.div({
        className: "movie__empty_space",
    });

    const $movieHeader = renderMovieHeader(movieMetadata);

    $movieRoot.appendChild($emptySpace);
    $movieRoot.appendChild($movieHeader);

    const theaters = Object.entries(movie);

    for (const [theaterTitle, theater] of theaters) {
        const theaterRootInstance = new TheaterRoot(theaterTitle, theater);
        const $theaterRoot = theaterRootInstance.initialRender();

        $movieRoot.appendChild($theaterRoot);
    }

    return $movieRoot;
};
