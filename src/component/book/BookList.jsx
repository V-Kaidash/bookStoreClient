import React from "react";
// import { PropTypes } from "@mui/material";
import Proptypes from 'prop-types';
import { Box } from "@mui/system";
import BookContainerCSS from './BookContainer.module.css';
import BookListItem from "./BookListItem";

const propTypes = {
    books: Proptypes.arrayOf({
        id: Proptypes.string.isRequired,
        title: Proptypes.string.isRequired,
        description: Proptypes.string.isRequired,
        releaseYear: Proptypes.number.isRequired
    }).isRequired,

}

const BookList = ({books}) => {
    return(
        <Box className={BookContainerCSS.bookList} ml={5}>
            {books.map((book) => (
                <BookListItem book={book} key={book.id} />
            ))}
        </Box>
    )
}

BookList.propTypes = propTypes;
export default BookList;