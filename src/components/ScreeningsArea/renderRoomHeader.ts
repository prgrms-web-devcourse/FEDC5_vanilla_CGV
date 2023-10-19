import { $ } from "@src/dom/createElement";

/**
 * Stateless
 */
export const renderRoomHeader = (screeningType: string, roomTitle: string) =>
    $.div({
        className: "room__header",
        children: [
            $.span({
                className: "room__screening_type",
                textContent: screeningType,
            }),
            $.span({
                className: "room__title",
                textContent: roomTitle,
            }),
        ],
    });
