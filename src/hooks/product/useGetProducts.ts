import { useQuery } from "react-query";
import axiosInstance from "../../apis/ApiCore";
import ProductsType from "../../types/products";
import useProductsStore from "../../store/useProductsStore";
const useProducts = () => {
  const { setProducts } = useProductsStore();
  return useQuery({
    queryKey: "Products",

    queryFn: () => {
      const url = `/Products?`;
      return axiosInstance
        .get<ProductsType[]>(url)
        .then((res) => {
          setProducts(res.data);
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
