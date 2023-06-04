import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar(props: any) {
    const {handleSearch, handleSubmit, register} = props;

    return (
        <Paper
            component="form"
            onSubmit={handleSubmit(handleSearch)}
            sx={{p: '2px 4px', m: 2, display: 'flex', alignItems: 'center', width: 400}}
        >
            <InputBase
                sx={{ml: 1, flex: 1}}
                placeholder="Type here..."
                {...register("search", {required: true})}
                inputProps={{'aria-label': 'search google maps'}}
            />
            <IconButton type="submit" sx={{p: '10px'}} aria-label="search">
                <SearchIcon/>
            </IconButton>
        </Paper>
    );
}