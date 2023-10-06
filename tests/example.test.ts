import { screen } from "@testing-library/dom";
import { userEvent } from "@testing-library/user-event";
import { expect, test } from "vitest";

test("can render html", async () => {
    // given
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.textContent = "click me!";
    button.onclick = () => {
        span.textContent = "clicked!";
    };
    document.body.appendChild(button);
    document.body.appendChild(span);

    // when
    const buttonFound = await screen.findByText("click me!");
    await userEvent.click(buttonFound);

    // then
    const spanFound = screen.queryByText("clicked!");
    expect(spanFound).toBeInTheDocument();

    console.log(document.documentElement.innerHTML);
});
