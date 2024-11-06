import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../apis/ApiCore";
import ProductsType from "../../types/products";

function useAddProduct() {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: "AddProduct",
    mutationFn: (props: ProductsType) => {
      return axiosInstance
        .post("/Products", props)
        .then((res) => {
          setTimeout(() => {
            navigate(`/Dashboard`);
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
