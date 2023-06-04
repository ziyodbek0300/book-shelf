import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ImageNoData from '../../assets/no-image.png';
import {IBookCard, IRemovedBookData} from "./type.ts";
import {Grid} from "@mui/material";
import {DeleteOutline} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import {useRemoveFromLibrary} from "../../hooks";
import {toast} from "react-toastify";
import {useQueryClient} from "react-query";

export default function BookCard(props: IBookCard) {
    const queryClient = useQueryClient();

    const removeFromLibrary = useRemoveFromLibrary({
        onSuccess: (data: IRemovedBookData) => {
            if (data) {
                queryClient.invalidateQueries(['get-all']).then();
                toast.warning("Removed");
            }
        },
        onError: (err: any) => {
            console.log(err);
        },
    });

    const handleRemove = (id: number) => {
        const confirmation = window.confirm("Are you sure to delete this book from your library?");
        if (confirmation)
            removeFromLibrary.mutate({id});
    };

    return (
        <Grid item xs={4} sm={4} md={3} position="relative">
            <IconButton
                onClick={() => handleRemove(props.book.id)}
                style={{
                    position: 'absolute',
                    top: 27,
                    right: 5,
                    background: "#fcfcfc",
                    boxShadow: "1px 1px 4px #ccc"
                }}>
                <DeleteOutline/>
            </IconButton>
            <Card sx={{width: '100%', height: '100%'}}>
                <CardMedia
                    sx={{height: 280}}
                    image={props.book.cover || ImageNoData}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.book.title || "Unreachable title"}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Author: {props.book.author || 'Invalid name'}{" "}
                        &copy; {props.book.published || "Year"}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}