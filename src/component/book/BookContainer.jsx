import { Box } from '@mui/system';
import { Skeleton } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getBooksAction from '../../module/book/bookAction';
import { getBooksSelector, getBooksPromiseSelector } from '../../module/book/bookSelector';
import BookFilter from './BookFilter';
import BookContainerCSS from './BookContainer.module.css';
import BookList from './BookList';


const BookContainer = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getBooksAction());
    }, [dispatch])
    const books = useSelector(getBooksSelector);
    const booksPromise = useSelector(getBooksPromiseSelector);

    return(
        <Box className={BookContainerCSS.bookContainer}>
            <BookFilter />
            <Box className={BookContainerCSS.bookList}>
                {booksPromise.isPending && 
                <Box ml={5}>
                    <Skeleton data-testid="book-loader" variant="react" animation="pulse" width="80%" height={200} />
                </Box>
                }
                {booksPromise.isErrorOccurred && (
                    <div data-testid="book-error-message">Error message...</div>
                    )}
                <BookList books={books} />
            </Box>
        </Box>
    );
}

export default BookContainer;