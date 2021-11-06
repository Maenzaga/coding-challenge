import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import { act } from "@testing-library/react";
import { useAddToCart } from "../useAddToCart";
import { CartContext } from "../../contexts/CartContext";
import apiDevices from "../../api/devices";

jest.mock("../../api/devices", () => ({
  __esModule: true,
  default: { post: jest.fn() },
}));

const mockedSetCount = jest.fn();

const mockedPost = apiDevices.post as jest.Mock;

const getWrapper =
  (count: number): React.FC =>
  ({ children }) =>
    (
      <CartContext.Provider value={[count, mockedSetCount]}>
        {children}
      </CartContext.Provider>
    );

describe("useAddToCart", () => {
  beforeEach(() => {
    mockedPost.mockClear();
    mockedSetCount.mockClear();
  });

  it("does not make API call when function is not called", async () => {
    // Given
    mockedPost.mockResolvedValue({});

    // When
    renderHook(() => useAddToCart({ id: "0", colorCode: 0, storageCode: 0 }), {
      wrapper: getWrapper(0),
    });

    // Then
    expect(mockedPost).not.toHaveBeenCalled();
  });

  it("does not make update count when function is not called", async () => {
    // Given
    mockedPost.mockResolvedValue({});

    // When
    renderHook(() => useAddToCart({ id: "0", colorCode: 0, storageCode: 0 }), {
      wrapper: getWrapper(0),
    });

    // Then
    expect(mockedSetCount).not.toHaveBeenCalled();
  });

  it("cart count is updated from initial value", async () => {
    // Given
    const initialCount = 0;
    const expectedFinalCount = 1;
    mockedPost.mockResolvedValue({});

    // When
    const { result } = renderHook(
      () => useAddToCart({ id: "0", colorCode: 0, storageCode: 0 }),
      { wrapper: getWrapper(initialCount) }
    );
    await act(async () => result.current());

    // Then
    expect(mockedSetCount).toHaveBeenCalledWith(expectedFinalCount);
  });

  it("cart count is updated with already set value", async () => {
    // Given
    const initialCount = 9;
    const expectedFinalCount = 10;
    mockedPost.mockResolvedValue({});

    // When
    const { result } = renderHook(
      () => useAddToCart({ id: "0", colorCode: 0, storageCode: 0 }),
      { wrapper: getWrapper(initialCount) }
    );
    await act(async () => result.current());

    // Then
    expect(mockedSetCount).toHaveBeenCalledWith(expectedFinalCount);
  });

  it("cart count is not updated when the request fails", async () => {
    // Given
    const initialCount = 9;
    mockedPost.mockRejectedValue(new Error());

    // When
    const { result } = renderHook(
      () => useAddToCart({ id: "0", colorCode: 0, storageCode: 0 }),
      { wrapper: getWrapper(initialCount) }
    );
    await act(async () => result.current());

    // Then
    expect(mockedSetCount).not.toHaveBeenCalled();
  });
});
