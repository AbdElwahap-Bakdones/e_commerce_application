import { useQuery } from "react-query";
import axiosInstance from "../../apis/ApiCore";
import ProductsType from "../../types/products";
const useProducts = () => {
  return useQuery({
    queryKey: "Products",
    staleTime: 0,
    cacheTime: 0,

    queryFn: () => {
      const url = `/Products?`;
      return axiosInstance
        .get<ProductsType[]>(url)
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          console.log(error);
          throw error;
        });
    },
  });
};
export default useProducts;
