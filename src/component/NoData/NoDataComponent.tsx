import RecieptLong from "../../assets/Icons/RecieptLong";
import { useFilterStore } from "../../store/useFilterStore";

const NoDataComponent = () => {
  const { clearFilters } = useFilterStore();
  return (
    <div className="flex w-full items-center justify-center min-h-[40vh]">
      <div className="flex flex-col items-start justify-start w-full max-w-[369px] ">
        <span className="flex items-center justify-center bg-[#DBDEE5] rounded-2xl mb-5 w-12 h-12">
          <RecieptLong />
        </span>
        <h2 className="text-[28px] mb-2.5 font-bold text-[#131316]">
          No matching transaction found for the selected filter
        </h2>
        <p className="text-base mb-8 font-medium text-[#56616B]">
          Change your filters to see more results, or add a new product.
        </p>
        <button
          onClick={() => clearFilters()}
          className="w-[117px] h-12 rounded-[100px] bg-[#EFF1F6] font-semibold text-[#131316] cursor-pointer"
        >
          Clear Filter
        </button>
      </div>
    </div>
  );
};

export default NoDataComponent;

