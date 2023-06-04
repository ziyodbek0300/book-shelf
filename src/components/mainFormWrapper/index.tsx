import Box from '@mui/material/Box';

export default function MainFormWrapper(props: any) {

    return (
        <Box
            display="flex"
            height="100vh"
            alignItems='center'
            justifyContent="center"
            width="100%"
        >
            <Box
                component="form"
                onSubmit={props.handleSubmit(props.onSubmit)}
                sx={{
                    '& .MuiTextField-root': {m: 1, width: '25ch'}
                }}
                noValidate
                autoComplete="off"
            >
                {props.children}
            </Box>
        </Box>
    );
}