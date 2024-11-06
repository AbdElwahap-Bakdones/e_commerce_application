import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../apis/ApiCore";
import UserType from "../../types/user";

const useSignUp = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: "signUp",
    mutationFn: (props: UserType) => {
      return axiosInstance
        .post("/Users", props)
        .then((res) => {
          setTimeout(() => {
            navigate(`/home`);
          }, 1000);

          return res.data;
        })
        .catch((error) => {
          throw error;
        });
    },
  });
};
export default useSignUp;
