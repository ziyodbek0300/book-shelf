import Box from '@mui/material/Box';
import {CircularProgress, Grid} from "@mui/material";
import {BookCard} from "../../../../components";
import {IBooksList} from "./type.ts";

export default function BooksList({data, isLoading}: IBooksList) {
    return (
        <Box>
            {isLoading && (
                <Box textAlign="center">
                    <CircularProgress/>
                </Box>
            )}
            <Grid
                container
                spacing={{xs: 2, md: 3}}
                columns={{xs: 4, sm: 8, md: 12}}
            >
                {data?.data.map((bookObj) => (<BookCard
                    book={bookObj.book}
                    key={bookObj?.book?.isbn}
                />))
                }
            </Grid>
        </Box>
    );
}