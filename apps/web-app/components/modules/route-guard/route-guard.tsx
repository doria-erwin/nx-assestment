/* eslint-disable react-hooks/exhaustive-deps */
import { STORAGE_KEY } from '@web-app/config/constants';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function RouteGuard({ children }) {
    const router = useRouter();
    // const [currentRoute, setCurrentRoute] = useState(router.pathname);

    useEffect(() => {
        // on initial load - run auth check 
        authCheck(router.asPath);

        // on route change start - hide page content by setting authorized to false  
        // const hideContent = () => setAuthorized(false);
        // router.events.on('routeChangeStart', authCheck);
        // on route change complete - run auth check 
        router.events.on('routeChangeComplete', authCheck)

        // unsubscribe from events in useEffect return function
        return () => {
            // router.events.off('routeChangeStart', authCheck);
            router.events.off('routeChangeComplete', authCheck);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // const handleFocus = useCallback(() => {
    //     console.log(router);
    //     authCheck(router.pathname);
    // }, [authCheck, router.pathname, currentRoute]);

    const checkIfTokenInvalid = (token: string) => {
        if (!token) return true;

        const decoded = JSON.parse(atob(token.split(".")[1]));
        return decoded.exp * 1000 < Date.now()
    }

    function authCheck(url: string) {
        // console.log(url);
        // redirect to login page if accessing a private page and not logged in 
        const publicPaths = ['/login', '/create-account', '/enter-otp', '/forgot-password', '/set-new-password'];
        const path = url.split('?')[0];
        const token = Cookies.get(STORAGE_KEY.ACCESS_TOKEN);

        if ((!token || (token && checkIfTokenInvalid(token))) && !publicPaths.includes(path)) {
            // router.replace('/auth/login');
        }
    }

    return children;
}

export default RouteGuard;
