import React from 'react';
import axios from 'axios';


function BookList(result) {

    axios.post('/api/books', {
        title: result.title,
        authors: result.authors,
        description: result.description,
        image: result.image,
        link: result.link,
        id: result.id

    })

    return (
        <div>Hello from booklist</div>
    )
}



export default BookList;