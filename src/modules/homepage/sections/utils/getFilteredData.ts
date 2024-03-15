// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getFilteredData = <T extends Record<K, any>, K extends string>(
  searchParams: URLSearchParams,
  array: Array<T>,
  key: K,
) => {
  searchParams.forEach((value) => {
    const values = value.split(",");
    array = array.filter((item) =>
      values.every((element) => item[key].includes(element)),
    );
  });
  return array;
};
