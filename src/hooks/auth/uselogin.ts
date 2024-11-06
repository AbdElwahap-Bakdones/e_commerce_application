import { useQuery } from "react-query";
import axiosInstance from "../../apis/ApiCore";
import UserType from "../../types/user";

const useLogin = (email: string, password: string) => {
  return useQuery({
    queryKey: ["auth", email, password],
    enabled: !!email && !!password,

    queryFn: async () => {
      const url = `/Users?email=${email}&password=${password}`;
      return axiosInstance
        .get<UserType[]>(url)
        .then((res) => {
          return res.data[0];
        })
        .catch((error) => {
          throw error;
        });
    },
  });
};

export default useLogin;
