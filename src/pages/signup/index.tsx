import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
import {FieldValues, useForm} from "react-hook-form";
import {useCreateUser} from "../../hooks";
import {Link, useNavigate} from "react-router-dom";
import Typography from "@mui/material/Typography";
import {MainFormWrapper} from "../../components";
import {toast} from "react-toastify";

export default function SignUpPage() {
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm();

    const createUser = useCreateUser({
        onSuccess: () => {
            toast.success("User created!");
            navigate('/login');
        },
        onError: (err: any) => {
            console.log(err);
        },
    });

    const onSubmit = (data: FieldValues) => {
        createUser.mutate(data);
    }

    return (
        <MainFormWrapper handleSubmit={handleSubmit} onSubmit={onSubmit}>
            <Typography variant="h5" textAlign="center">Sign up form</Typography>
            <TextField
                required
                {...register("name", {required: true})}
                id="outlined-required"
                label="Name"
                type="text"
                autoComplete="fullName"
            />
            <br/>
            <TextField
                required
                id="outlined-required1"
                label="Email"
                type="email"
                {...register("email", {required: true})}
                autoComplete="email"
            />
            <br/>
            <TextField
                required
                {...register("key", {required: true})}
                id="outlined-required2"
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
                <Button type="submit" variant="contained">Submit</Button>
                <br/>
                <Link to='/signup'>
                    <Typography mt={1.5} color='royalblue' fontSize="small">Login</Typography>
                </Link>
            </Box>
        </MainFormWrapper>

    );
}