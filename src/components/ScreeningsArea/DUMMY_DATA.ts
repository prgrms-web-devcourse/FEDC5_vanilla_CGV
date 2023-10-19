import { MovieAPIResponse } from "@src/api/APISpec";

export type SortType = "movie" | "theater" | "time";

// props 타입
export interface SelectedOptions {
    movies: MovieAPIResponse[];
    theaters: string[];
    sortType: SortType;
}

const repeatedScreening = {
    id: 1,
    movieId: 1,
    movieTitle: "민트는 똥쟁이 패드 매일 갈아야 됨",
    theaterId: 1,
    theaterTitle: "용산아이파크몰",
    roomId: 1,
    roomTitle: "스트레스리스 시네마[CINE de CHEF]",
    projectionType: "2D",
    remainingSeats: 459,
    totalSeats: 630,
    foreign: true,
    dubbed: false,
    subtitled: true,
    startsAt: "2023-10-18T22:00:00+09:00",
    endsAt: "2023-10-19T01:00:00+09:00",
};

export const DUMMY_DATA = {
    selectedOptions: {
        movies: [
            {
                title: "민트는 똥쟁이 패드 매일 갈아야 됨",
                ageRating: 18,
                foreign: true,
                posterUrl: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87444/87444_185.jpg",
                thumbnailUrl:
                    "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87444/87444_185.jpg",
            },
            {
                title: "익스펜더블 4",
                ageRating: 18,
                foreign: true,
                posterUrl: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87444/87444_185.jpg",
                thumbnailUrl:
                    "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87444/87444_185.jpg",
            },
        ],
        theaters: ["용산아이파크몰"],
        sortType: "movie" as SortType,
    },
    screeningsGroupdByMovie: {
        "민트는 똥쟁이 패드 매일 갈아야 됨": {
            용산아이파크몰: {
                "스트레스리스 시네마[CINE de CHEF]": {
                    "자막, 2D": [
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                    ],
                    "더빙, 2D": [repeatedScreening, repeatedScreening, repeatedScreening],
                },
                "GOLD CLASS[테일러센츠관]": {
                    "자막, 2D": [
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                    ],
                },
            },
            왕십리: {
                "스트레스리스 시네마[CINE de CHEF]": {
                    "자막, 2D": [
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                    ],
                    "더빙, 2D": [repeatedScreening, repeatedScreening, repeatedScreening],
                },
                "GOLD CLASS[테일러센츠관]": {
                    "자막, 2D": [
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                    ],
                    "더빙, 2D": [repeatedScreening, repeatedScreening, repeatedScreening],
                },
            },
        },
        "익스펜더블 4": {
            용산아이파크몰: {
                "스트레스리스 시네마[CINE de CHEF]": {
                    "자막, 2D": [
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                    ],
                    "더빙, 2D": [repeatedScreening, repeatedScreening, repeatedScreening],
                },
                "GOLD CLASS[테일러센츠관]": {
                    "자막, 2D": [
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                    ],
                    "더빙, 2D": [repeatedScreening, repeatedScreening, repeatedScreening],
                },
            },
            왕십리: {
                "스트레스리스 시네마[CINE de CHEF]": {
                    "자막, 2D": [
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                    ],
                    "더빙, 2D": [repeatedScreening, repeatedScreening, repeatedScreening],
                },
                "GOLD CLASS[테일러센츠관]": {
                    "자막, 2D": [
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                        repeatedScreening,
                    ],
                    "더빙, 2D": [repeatedScreening, repeatedScreening, repeatedScreening],
                },
            },
        },
    },
};
