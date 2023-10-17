import MoiveChart from "./MovieChart.js";
import ReservationData from "./ReservationDate.js";
import ReservationFilter from "./ReservationFilter.js";

const $root = document.querySelector("#root");

new ReservationData({
    $target: $root,
    selectedDate: {
        month: "10",
        day: "9",
        dayOfWeek: "오늘",
    },
    onClick: (selected) => {
        alert(selected);
    },
});
new ReservationFilter({
    $target: $root,
    name: "MovieName",
    onSortSelect: (selected) => {
        alert(selected);
    },
});

new MoiveChart({
    $target: $root,
    movieData: [
        {
            movieName: "그대들은 어떻게 살 것인가",
            moiveImgSrc: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87433/87433_185.jpg",
        },
        {
            movieName: "30일",
            moiveImgSrc: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87407/87407_185.jpg",
        },
        {
            movieName: "30일",
            moiveImgSrc: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87407/87407_185.jpg",
        },
        {
            movieName: "30일",
            moiveImgSrc: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87407/87407_185.jpg",
        },
        {
            movieName: "30일",
            moiveImgSrc: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87407/87407_185.jpg",
        },
        {
            movieName: "30일",
            moiveImgSrc: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87407/87407_185.jpg",
        },
        {
            movieName: "30일",
            moiveImgSrc: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87407/87407_185.jpg",
        },
        {
            movieName: "30일",
            moiveImgSrc: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87407/87407_185.jpg",
        },
    ],
    onSelected: (selected) => {
        alert(selected);
    },
});
