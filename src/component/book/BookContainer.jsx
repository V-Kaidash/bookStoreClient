import { Box } from '@mui/system';
import React from 'react';
import BookFilter from './BookFilter';


const BookContainer = () => {

    return(
        <Box  sx={{ display: 'fles', justifyContent: 'center', flexDirection: 'row' }}>
            <BookFilter />
            <Box>
                Here we will display all books.
            </Box>
        </Box>
    );
}

export default BookContainer;