import Box from "@mui/material/Box";
import {CircularProgress} from "@mui/material";
import SearchedCard from "../searchedCard";
import Typography from "@mui/material/Typography";

export default function SearchResult({isLoading, data}: any) {

    return (
        <>
            {isLoading ? <Box textAlign='center' mt={15}>
                <CircularProgress/>
            </Box> : null}
            {data?.length === 0 && !isLoading
                ? <Typography
                    variant='h6'
                    mt={15}
                    textAlign="center"
                    color="#cccccc">No Data</Typography> : null}
            <Box p={2} display="flex" flexDirection="column" gap={2}>
                {data?.map((book: any) => {
                    return (
                        <SearchedCard
                            cover={book.cover}
                            isbn={book.isbn}
                            author={book.author}
                            published={book.published}
                            title={book.title}
                            key={book.isbn}
                        />
                    )
                })}
            </Box>
        </>
    );
}