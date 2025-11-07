import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Home from "../App";

// Mock Zustand store
vi.mock("../store/useFilterStore", () => ({
  useFilterStore: vi.fn(() => ({
    activeFilterCount: 1,
    selectedTags: ["week"],
  })),
}));

// Mock RTK Query hooks
vi.mock("../services/api", () => ({
  useGetUserTransactionsQuery: vi.fn(() => ({
    data: [
      { id: 1, amount: 100, status: "success" },
      { id: 2, amount: 50, status: "failed" },
    ],
    isLoading: false,
  })),
  useGetUserWalletQuery: vi.fn(() => ({
    data: { balance: 250 },
    isLoading: false,
  })),
}));

// Mock child components (just placeholders to avoid rendering complexity)
vi.mock("../component/Header", () => ({
  default: () => <div data-testid="header">Header</div>,
}));
vi.mock("../component/FloatingSideBar", () => ({
  default: () => <div data-testid="sidebar">Sidebar</div>,
}));
vi.mock("../component/Chart/ChartComponent", () => ({
  default: () => <div data-testid="chart">Chart</div>,
}));
vi.mock("../component/Wallet/WalletTab", () => ({
  default: () => <div data-testid="wallet">WalletTab</div>,
}));
vi.mock("../component/Table/TableItems", () => ({
  default: ({ data }: any) => <div data-testid="table-item">{data.status}</div>,
}));
vi.mock("../component/NoData/NoDataComponent", () => ({
  default: () => <div data-testid="no-data">No Data</div>,
}));
vi.mock("../component/Filter/Filter", () => ({
  default: () => (
    <div data-testid="filter">Filter Panel</div>
  ),
}));
vi.mock("../component/Loader/Loader", () => ({
  default: () => <div data-testid="loader">Loading...</div>,
}));

describe("Home Component", () => {
  it("renders header and wallet balance", () => {
    render(<Home />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByText("USD 250")).toBeInTheDocument();
  });

  it("renders transactions table", () => {
    render(<Home />);
    expect(screen.getAllByTestId("table-item")).toHaveLength(2);
  });

  it("shows filter panel when Filter button is clicked", () => {
    render(<Home />);
    const filterButton = screen.getByText("Filter");
    fireEvent.click(filterButton);
    expect(screen.getByTestId("filter")).toBeInTheDocument();
  });

  it("shows correct filter badge count", () => {
    render(<Home />);
    expect(screen.getByText("1")).toBeInTheDocument();
  });
});

