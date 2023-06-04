import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
import {FieldValues, useForm} from "react-hook-form";
import {Cookies} from "react-cookie";
import {useLoginMyself} from "../../hooks";
import {useContext} from "react";
import {MainContext} from "../../context";
import {Link, useNavigate} from "react-router-dom";
import {IUser} from "../../types";
import Typography from "@mui/material/Typography";
import {MainFormWrapper} from "../../components";

export default function FormPropsTextFields() {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const {register, handleSubmit} = useForm();
    const {setUser} = useContext(MainContext);

    const getMyself = useLoginMyself({
        onSuccess: (data: IUser) => {
            setUser(() => data);
            navigate('/books');
        },
        onError: (err: any) => {
            console.log(err);
        },
    });

    const onSubmit = (data: FieldValues) => {
        cookies.set("secret", data.secret);
        cookies.set("key", data.key);
        getMyself.mutate({});
    }

    return (
        <MainFormWrapper handleSubmit={handleSubmit} onSubmit={onSubmit}>
            <TextField
                required
                {...register("key", {required: true})}
                id="outlined-required"
                label="Key"
                type="text"
                autoComplete="username"
            />
            <br/>
            <TextField
                required
                id="outlined-password-input"
                label="Secret"
                type="password"
                {...register("secret", {required: true})}
                autoComplete="current-password"
            />
            <br/>
            <br/>
            <Box textAlign='center'>
                <Button type="submit" variant="contained">Login</Button>
                <br/>
                <Link to='/signup'>
                    <Typography mt={1.5} color='royalblue' fontSize="small">Sign up</Typography>
                </Link>
            </Box>
        </MainFormWrapper>
    );
}