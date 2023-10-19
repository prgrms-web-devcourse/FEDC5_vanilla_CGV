import { $ } from "@src/dom/createElement";

interface ScreeningProps {
    startsAt: string;
    endsAt: string;
    remainingSeats: number;
    totalSeats: number;
}

/**
 * Stateless
 */
export const renderScreening = ({
    startsAt,
    endsAt,
    remainingSeats,
    totalSeats,
}: ScreeningProps) => {
    // "2023-10-18T22:00:00+09:00"
    const parsedStartsAt = startsAt.split("T")[1].split("+")[0].slice(0, 5);
    const parsedEndsAt = endsAt.split("T")[1].split("+")[0].slice(0, 5);

    return $.div({
        className: "screening__item",
        children: [
            $.div({
                className: "screening__item__time",
                children: [
                    $.span({
                        className: "screening__item__time--startsAt",
                        textContent: parsedStartsAt,
                    }),
                    $.span({
                        className: "screening__item__time--endsAt",
                        textContent: `~${parsedEndsAt}`,
                    }),
                ],
            }),
            $.div({
                className: "screening__item__seats",
                children: [
                    $.span({
                        className: "screening__item__seats--remaining",
                        textContent: `${remainingSeats}`,
                    }),
                    $.span({
                        className: "screening__item__seats--total",
                        textContent: `/ ${totalSeats}`,
                    }),
                ],
            }),
        ],
    });
};
