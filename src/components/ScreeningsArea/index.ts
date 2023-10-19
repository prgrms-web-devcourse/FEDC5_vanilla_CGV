import { ScreeningsGroupedByMovieAPIResponse } from "@src/api/APISpec";
import { $ } from "@src/dom/createElement";

import { SelectedOptions } from "./DUMMY_DATA";
import { renderMovie } from "./renderMovie";

interface RenderScreeningListProps {
    selectedOptions: SelectedOptions;
    screeningsGroupdByMovie: ScreeningsGroupedByMovieAPIResponse;
}

// 영화의 메타데이터 반환
const findMovieMetadata = (movieTitle: string, options: SelectedOptions) => {
    const found = options.movies.find(({ title }) => title === movieTitle);
    if (!found) {
        throw new Error(`영화 ${movieTitle}의 정보가 없습니다.`);
    }

    return found;
};

/**
 * 영화순 정렬 시의 화면 렌더링
 */
const renderGroupedByMovie = (props: RenderScreeningListProps) => {
    const { selectedOptions, screeningsGroupdByMovie } = props;

    const $root = $.div();

    // 영화 순회
    const movies = Object.entries(screeningsGroupdByMovie);

    // 선택된 영화는 최대 2개
    for (const [movieTitle, movie] of movies) {
        // 헤더 렌더링 시에는 메타데이터가 필요
        const movieMetadata = findMovieMetadata(movieTitle, selectedOptions);

        // 영화 정보로 영화 영역 렌더링
        const $movieRoot = renderMovie(movieMetadata, movie);

        $root.appendChild($movieRoot);
    }

    return $root;
};

/**
 * HTML Element를 반환한다.
 *
 * API 요청 없이 필요한 데이터는 props로 받는다.
 */
export const renderScreeningsArea = (props: RenderScreeningListProps) => {
    const { selectedOptions } = props;

    // 영화순 CASE
    if (selectedOptions.sortType === "movie") {
        return renderGroupedByMovie(props);
    }

    throw new Error("[ScreeningsArea] 아직 구현되지 않은 정렬 옵션입니다.");
};
