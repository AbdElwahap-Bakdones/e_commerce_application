import { useQuery } from "react-query";
import axiosInstance from "../../apis/ApiCore";
import CategoryType from "../../types/Category";

function useGetCategories() {
  return useQuery({
    queryKey: "Category",

    queryFn: () => {
      const url = `/Categories?`;
      return axiosInstance
        .get<CategoryType[]>(url)
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          console.log(error);
          throw error;
        });
    },
  });
}

export default useGetCategories;
