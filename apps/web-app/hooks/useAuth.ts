// import { getUserDetailsByEmail, patchUserDetails } from "@web-app/api/user";
import { STORAGE_KEY } from "@web-app/config/constants";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const useAuth = () => {
    // const dispatch = useAppDispatch();
    const router = useRouter();

    const authenticationUser = async (data: { email: string, firstName?: string, lastName?: string }, token: string, shouldUpdate?: boolean) => {
        Cookies.set(STORAGE_KEY.ACCESS_TOKEN, token);
        // const { email, firstName, lastName } = data;
        // let userDetails: ProfileData = {};

        // TODO update user details if needed
        // ({ data: userDetails } = await getUserDetailsByEmail(email));

        // if (shouldUpdate) {
        //     ({ data: userDetails } = await patchUserDetails({
        //         id: userDetails.id,
        //         firstName,
        //         lastName
        //     }))
        // }

        // dispatch(authUser({
        //     accessToken: token,
        //     profileData: userDetails
        // }));

        router.replace('/subscribe');
    };

    return { authenticationUser };
}

export default useAuth;
