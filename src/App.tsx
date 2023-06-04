import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import {SideBar, AppMenu} from "./layout";
import {BooksPage, LoginPage} from "./pages";
import {Route, Routes} from "react-router-dom";
import {DrawerHeader} from "./layout/sideBar/style.ts";
import ProviderContext, {MainContext} from "./context/userContext";
import {useLogin} from "./hooks";
import {useContext} from "react";
import {useCookies} from "react-cookie";
import {MAIN_SECRET_NAME} from "./constants";
import SignUpPage from "./pages/signup";
import Home from "./pages/home";

export default function App() {
    const [secret] = useCookies()
    const context = useContext(MainContext);
    const theme = useTheme();
    const [open, setOpen] = React.useState<boolean>(false);
    const [user, setUser] = React.useState(context.user);

    const {data, isLoading} = useLogin({
        enabled: !!secret?.[MAIN_SECRET_NAME]
    });

    React.useEffect(() => {
        setUser(data || null);
    }, [data, isLoading]);

    if (isLoading) {
        return (
            <Box textAlign="center">
                <h6>loading...</h6>
            </Box>
        )
    }

    return (
        <Box sx={{display: 'flex'}}>
            <ProviderContext value={{user, setUser}}>
                <CssBaseline/>
                {user ? (
                    <React.Fragment>
                        <AppMenu setOpen={setOpen} user={user} open={open}/>
                        <SideBar setOpen={setOpen} open={open} theme={theme}/>
                        <Box component="main" sx={{flexGrow: 1, p: 3}}>
                            <DrawerHeader/>
                            <Routes>
                                <Route path='/' element={<Home/>}/>
                                <Route path='/books' element={<BooksPage/>}/>
                            </Routes>
                        </Box>
                    </React.Fragment>
                ) : (
                    <Routes>
                        <Route path='*' element={<LoginPage/>}/>
                        <Route path='/login' element={<LoginPage/>}/>
                        <Route path='/signup' element={<SignUpPage/>}/>
                    </Routes>
                )}
            </ProviderContext>
        </Box>
    );
}