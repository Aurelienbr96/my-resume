import { useSearchParams } from "react-router-dom";

export const useHandleFilterClick = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamsValues = [...searchParams.values()][0]?.split(",");

  const handleFilterClick = (filterType: string, filterValue: string) => {
    const currentParams = Object.fromEntries([...searchParams]);
    let filterValues = currentParams[filterType]?.split(",") || [];

    if (filterValues.includes(filterValue)) {
      filterValues = filterValues.filter((value) => value !== filterValue);
    } else {
      filterValues.push(filterValue);
    }

    if (filterValues.length > 0) {
      currentParams[filterType] = filterValues.join(",");
    } else {
      delete currentParams[filterType];
    }

    setSearchParams(currentParams);
  };

  const handleRemoveFilters = () => {
    setSearchParams({});
  };

  return {
    searchParams,
    setSearchParams,
    handleFilterClick,
    handleRemoveFilters,
    searchParamsValues,
  };
};
