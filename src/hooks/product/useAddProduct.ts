import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../apis/ApiCore";
import ProductsType from "../../types/products";
import useProducts from "./useGetProducts";

function useAddProduct() {
  const { refetch } = useProducts();
  const navigate = useNavigate();
  return useMutation({
    mutationKey: "AddProduct",
    mutationFn: (props: Omit<ProductsType, "id">) => {
      return axiosInstance
        .post("/Products", props)
        .then((res) => {
          setTimeout(() => {
            refetch();
            navigate(`/Dashboardd`);
          }, 1000);

          return res.data;
        })
        .catch((error) => {
          throw error;
        });
    },
  });
}

export default useAddProduct;
