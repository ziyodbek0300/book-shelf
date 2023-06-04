import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import NoImage from '../../../../assets/no-image.png';
import IconButton from "@mui/material/IconButton";
import {LibraryAdd} from "@mui/icons-material";
import {useAddToLibrary} from "../../../../hooks";
import {toast} from "react-toastify";
import {Tooltip} from "@mui/material";
import {ISearchedCard, ISearchedCardProps} from "./type.ts";

export default function SearchedCard(props: ISearchedCardProps) {
    const {cover, author, published, title, isbn} = props;

    const addToLibrary = useAddToLibrary({
        onSuccess: (data: ISearchedCard) => {
            if (data) {
                toast.success("Added");
            }
        },
        onError: (err: any) => {
            console.log(err);
        },
    });

    const handleAddToLibrary = (id: string) => {
        console.log(id)
        addToLibrary.mutate({isbn: id});
    };

    return (
        <Card sx={{display: 'flex', background: '#fcfcfc', position: 'relative'}}>
            <CardMedia
                component="img"
                sx={{width: 161, height: 200, borderRight: '1px solid #f1f2f3'}}
                image={cover && !cover.endsWith('/0.jpg') ? cover : NoImage}
                alt={title + " Book"}
            />
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <CardContent sx={{flex: '1 0 auto'}}>
                    <Typography component="div" variant="h5">
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {author}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {published}
                    </Typography>
                </CardContent>
            </Box>
            <Box position="absolute" bottom={1} right={1}>
                <Tooltip title={"Add to library"}>
                    <IconButton onClick={() => handleAddToLibrary(isbn)}><LibraryAdd/></IconButton>
                </Tooltip>
            </Box>
        </Card>
    );
}