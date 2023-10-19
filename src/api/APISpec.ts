export interface Raw_Movie {
    id: number;
    title: string; // 영화 Id
    ageRating: number;
    thumbnailUrl: string;
    foreign: boolean; // 외국 영화 여부
}

export interface Raw_MovieInstance {
    id: number;
    movieId: number;
    subtitled: boolean; // 자막 여부 (외국영화여부면 택 1)
    dubbed: boolean; // 더빙 여부 (외국영화여부면 택 1)
    projectionType: string; // 영사 타입 (2D, 2D Laser IMAX, 4DX, ... -> IMAX 관에서 non-IMAX 상영 가능)
}

export interface Raw_Theater {
    id: number;
    title: string;
    locationType: number; // 지역 분류
}

export interface Raw_LocationType {
    id: number;
    title: string;
}

export interface Raw_Room {
    id: number;
    title: string;
    roomType: number; // 특별관 분류
}

export interface Raw_RoomType {
    id: number;
    title: string;
}

export interface Raw_Screening {
    id: number; // 회차 Id
    movieId: number;
    theaterId: number;
    roomId: number;

    remainingSeats: number; // 여유 좌석
    totalSeats: number; // 전체 좌석
    startsAt: string; // 시작 시각 (date string?)
    endsAt: string; // 종료 시각
}

export interface MovieAPIResponse {
    title: string; // 영화 Id
    ageRating: number;
    posterUrl: string; // 큰 이미지
    thumbnailUrl: string; // 작은 이미지
    foreign: boolean; // 외국 영화 여부
}

// 모든 Join이 완료된 Screening
export interface ScreeningAPIResponse {
    id: number; // 회차 Id, 모달 열 때 필요 (영화, 극장, 관)을 대표

    movieId: number; // 영화 기준
    movieTitle: string; // 영화 이름
    projectionType: string; // 영사 타입 (2D, 2D Laser IMAX, 4DX, ... -> IMAX 관에서 non-IMAX 상영 가능)
    foreign: boolean; // 외국 영화 여부
    subtitled: boolean; // 자막 여부 (외국영화여부면 택 1)
    dubbed: boolean; // 더빙 여부 (외국영화여부면 택 1)

    theaterId: number; // 극장 기준
    theaterTitle: string; // 극장 이름

    roomId: number; // 관 기준
    roomTitle: string; // 관 이름

    remainingSeats: number; // 여유 좌석
    totalSeats: number; // 전체 좌석
    startsAt: string; // 시작 시각 (date string?)
    endsAt: string; // 종료 시각
}

export interface ScreeningsGroupedByMovieAPIResponse {
    // 영화 별
    [movieTitle: string]: {
        // 극장 별
        [theaterTitle: string]: {
            // 관 별
            [roomTitle: string]: {
                // 상영 방식 별
                [screeningType: string]: ScreeningAPIResponse[];
            };
        };
    };
}

export type TheaterAPIRecord = Record<string, Record<string, ScreeningAPIResponse[]>>;

export type MovieAPIRecord = Record<string, TheaterAPIRecord>;
