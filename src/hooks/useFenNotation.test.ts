// useFenNotation.test.ts
import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react-hooks";
import { useFenNotation } from "./useFenNotation";
import { useLocalStorage } from "./useLocalStorage";

// Mock useLocalStorage
vi.mock("./useLocalStorage", () => ({
  useLocalStorage: vi.fn(),
}));

describe("useFenNotation", () => {
  const setFenStringMock = vi.fn();
  const setFenDataMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    // @ts-expect-error - vi is not typed for mockImplementation
    (useLocalStorage as vi.Mock).mockImplementation(
      (key: string, initialValue: string) => {
        if (key === "fenString") {
          return [initialValue, setFenStringMock];
        } else if (key === "fenData") {
          return [initialValue, setFenDataMock];
        }
        return [undefined, vi.fn()];
      },
    );
  });

  it("should initialize with the default FEN string", () => {
    const { result } = renderHook(() => useFenNotation());
    expect(result.current.fenString).toBe(
      "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
    );
  });

  it("should update fenString when a valid FEN is input", () => {
    const { result } = renderHook(() => useFenNotation());
    const validFen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";

    act(() => {
      result.current.onFenInputChange(validFen);
    });

    expect(setFenStringMock).toHaveBeenCalledWith(validFen);
    expect(setFenDataMock).toHaveBeenCalledWith(expect.anything());
    expect(result.current.hasFenError).toBe(false);
  });

  it("should set error when an invalid FEN is input", () => {
    const { result } = renderHook(() => useFenNotation());
    const invalidFen = "invalid FEN";

    act(() => {
      result.current.onFenInputChange(invalidFen);
    });

    expect(result.current.hasFenError).toBe(true);
  });

  it("should update fenData when a square is clicked and it's a valid move", () => {
    const { result } = renderHook(() => useFenNotation());
    const validFen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";

    act(() => {
      result.current.onFenInputChange(validFen);
    });

    act(() => {
      result.current.onSquareClick(1, "a", 0, { type: "p", color: "b" });
    });

    expect(setFenDataMock).toHaveBeenCalled();
    expect(setFenStringMock).toHaveBeenCalled();
    expect(result.current.selectedSquare).toBe("1a");
  });

  it("should update fenData when a square is clicked and it is a valid attack", () => {
    const { result } = renderHook(() => useFenNotation());
    const validFen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";

    act(() => {
      result.current.onFenInputChange(validFen);
    });

    act(() => {
      result.current.onSquareClick(1, "a", 0, { type: "p", color: "b" });
    });

    act(() => {
      result.current.onSquareClick(2, "b", 1, { type: "p", color: "w" });
    });

    expect(setFenDataMock).toHaveBeenCalled();
    expect(setFenStringMock).toHaveBeenCalled();
    expect(result.current.selectedSquare).toBe("2b");
  });

  it("should update fenData when a square is clicked and it is a valid toggle", () => {
    const { result } = renderHook(() => useFenNotation());
    const validFen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";

    act(() => {
      result.current.onFenInputChange(validFen);
    });

    act(() => {
      result.current.onSquareClick(1, "a", 0, { type: "p", color: "b" });
    });

    act(() => {
      result.current.onSquareClick(2, "b", 1, { type: "p", color: "b" });
    });

    expect(setFenDataMock).toHaveBeenCalled();
    expect(setFenStringMock).toHaveBeenCalled();
    expect(result.current.selectedSquare).toBe("2b");
  });
});
