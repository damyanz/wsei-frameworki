import { useAppDispatch } from "@redux/hooks";
import { useEffect } from "react";
import { APP_ID } from "@env";
import { setUserData } from "@redux/slices/userSlice";
import { UserType } from "@/types/global";

const useUser = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await fetch(
          `https://dummyapi.io/data/api/user/uABrZcuHGJnanoxlt53c`,
          {
            headers: { "app-id": APP_ID },
          }
        );
        const user: UserType = await res.json();
        dispatch(setUserData(user));
        return user;
      } catch (err) {
        console.log(err);
      }
    };
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default useUser;
