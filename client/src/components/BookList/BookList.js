import React from 'react';
import './booklist.css';
import axios from 'axios';

function BookList(props) {
    //console.log(props.books)

    //function to save books
    function saveBook(result) {
        // let bookID = save.target.bookID;
        console.log(result);
        console.log("clicked")


        axios.post('/api/save', {
            title: result.bookTitles,
            authors: result.authors,
            description: result.description,
            image: result.image,
            link: result.link,
            bookId: result.id,
        }).then(result => {
            alert('book saved');
        })
    }


    let bookArray = props.books.map((item, index) => {
        // console.log(item);


        return (
            <div className="mb-4 " key={index}>
                <div className="card bookCards">
                    <div><img className="thumbnail my-3" src={item.image} alt="thumb"></img></div>
                    <div className="bookTitle">{item.bookTitles}</div>
                    <div className="authors" >{item.authors}</div>
                    <div className="description"> {item.description}</div>
                    {/* <div className="bookId">Book Id: {item.id}</div> */}
                    <div className="card-body text-center">
                        <div className="text-center">
                            <div>
                                <a href={item.link} className="btn btn-outline-primary m-2 bookLink" target="_blank" rel="noopener noreferrer"><i className="fa fa-rocket"></i> Link to the book</a>
                            </div>
                            <div>

                                <button onClick={(e) => { saveBook(item) }} className="btn btn-outline-primary m-2 saveBook" id={item.id} data={item}><i className="fa fa-list "></i> Save book to my list</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    });


    return (
        <div>
            {bookArray}
        </div>
    )

}



export default BookList;