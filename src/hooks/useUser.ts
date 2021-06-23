import { useAppDispatch } from "@redux/hooks";
import { useEffect } from "react";
import { APP_ID } from "@env";
import { setUserData } from "@redux/slices/userSlice";
import { UserType } from "@/types/global";

const USER_ID = "60d0fe4f5311236168a109d1";

const useUser = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await fetch(
          `https://dummyapi.io/data/api/user/${USER_ID}`,
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
