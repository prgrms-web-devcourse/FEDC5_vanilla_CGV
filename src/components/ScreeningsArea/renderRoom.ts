import { ScreeningAPIResponse } from "@src/api/APISpec";
import { $ } from "@src/dom/createElement";

import { renderRoomHeader } from "./renderRoomHeader";
import { renderScreening } from "./renderScreening";

interface RoomProps {
    screeningType: string;
    roomTitle: string;
    screenings: ScreeningAPIResponse[];
}

/**
 * Stateless
 */
export const renderRoom = ({ screeningType, roomTitle, screenings }: RoomProps) => {
    const $roomRoot = $.div({
        className: "room__container",
    });

    // 2D       5관(Laser) 한 줄 그리기
    const $roomHeader = renderRoomHeader(screeningType, roomTitle);

    const $roomBody = $.div({
        className: "room__body",
    });

    // 회차 순회
    for (const screening of screenings) {
        const $screening = renderScreening(screening);

        $roomBody.appendChild($screening);
    }

    $roomRoot.appendChild($roomHeader);
    $roomRoot.appendChild($roomBody);

    return $roomRoot;
};
