import { act, render, screen } from "@testing-library/react";
import { projects } from "../ProjectInfo";
import { useImages } from "./useImages";
import userEvent from "@testing-library/user-event";

beforeAll(() => {
  vi.stubGlobal("setInterval", vi.fn());
  vi.stubGlobal("clearInterval", vi.fn());
});

test("idx wraps around length correctly", async () => {
  const user = setupTest();
  const idxElement = screen.getByTestId("currIdx");
  expect(idxElement).toHaveTextContent("0");
  await user.click(screen.getByRole("button", { name: /nextimg/i }));
  expect(idxElement).toHaveTextContent("1");
  await user.click(screen.getByRole("button", { name: /nextimg/i }));
  expect(idxElement).toHaveTextContent("0");
});

describe("sets & clears intervals", () => {
  test("starts interval on hover", async () => {
    const user = setupTest();
    await act(async () => {
      await user.click(screen.getByRole("button", { name: /true/i }));
    });
    expect(setInterval).toHaveBeenCalledOnce();
  });
  test("clears interval on unhover", async () => {
    const user = setupTest();
    await act(async () => {
      await user.click(screen.getByRole("button", { name: /true/i }));
    });
    expect(clearInterval).not.toHaveBeenCalled();
    await act(async () => {
      await user.click(screen.getByRole("button", { name: /false/i }));
    });
    expect(clearInterval).toHaveBeenCalledOnce();
    expect(setInterval).toHaveBeenCalledOnce();
  });
});

function HookTester() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_images, currIdx, setHover, nextImg] = useImages(
    projects[0].img.slice(0, 2)
  );

  return (
    <div>
      <div data-testid="currIdx">{currIdx}</div>
      <button
        onClick={() => {
          setHover(true);
        }}
      >
        True
      </button>
      <button
        onClick={() => {
          setHover(false);
        }}
      >
        False
      </button>
      <button
        onClick={() => {
          nextImg();
        }}
      >
        nextImg
      </button>
    </div>
  );
}

function setupTest() {
  render(<HookTester />);
  const user = userEvent.setup();
  return user;
}
