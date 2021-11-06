import { render } from "@testing-library/react";
import { useFetchDevices } from "../../hooks/useFetchDevices";
import { Device } from "../../models/Devices";
import { ProductListPage } from "../ProducListPage/ProducListPage";

jest.mock("../../hooks/useFetchDevices", () => ({
  useFetchDevices: jest.fn(),
}));

const mockedUseFetchDevices = useFetchDevices as jest.Mock;

// To update snapshots, run: npm test -- -u

describe("ProductListPage", () => {
  it("renders correctly", () => {
    // Given
    const devices: Device[] = [
      {
        id: "123",
        brand: "Apple",
        model: "iPhone 12",
        price: "1000",
        imgUrl: "some_url_image",
      },
    ];
    mockedUseFetchDevices.mockReturnValue({
      data: devices,
      isError: false,
      isLoading: false,
    });

    // When
    const tree = render(<ProductListPage />);

    // Then
    expect(tree).toMatchSnapshot();
  });

  it("renders loading view when request is in progress", () => {
    // Given
    mockedUseFetchDevices.mockReturnValue({
      data: [],
      isError: false,
      isLoading: true,
    });

    // When
    const { getByText } = render(<ProductListPage />);

    // Then
    expect(getByText("Loading...")).toBeDefined();
  });
});
