import { Box } from "@mui/system";
import React from "react";
import { Paper } from '@mui/material';
import BookFilterCSS from './BookFilter.module.css';


const BookFilter = () => {
    return(
        <Box className={BookFilterCSS.bookFilter}>
            <Paper className={BookFilterCSS.bookFilterPaper}>
                Book filter
            </Paper>
        </Box>
    );
}

export default BookFilter;