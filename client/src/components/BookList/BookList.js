import React from 'react';
import './booklist.css';
// import axios from 'axios';

function BookList(props) {
    //console.log(props.books)

    //function to save books  
    // function saveBook(save, result) {
    //     let bookID = save.target.bookID;

    //     axios.post('/api/save', {
    //         title: result.title,
    //         authors: result.authors,
    //         description: result.description,
    //         image: result.image,
    //         link: result.link,
    //         id: result.id,
    //     }).then(results => {
    //         alert('book saved');
    //     })
    // }




    let bookArray = props.books.map((item, index) => {
        console.log(item);

        return (
            <div className="mb-4 ">
                <div key={index} className="card bookCards">
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
                                {/* <button onClick={(e) => { saveBook(save, result) }} className="btn btn-warning mt-3 ml-3" id={result.id} data={result}>Save</button> */}

                                <button
                                    className="btn btn-outline-primary m-2 saveBook"
                                ><i className="fa fa-list "></i> Save book to my list</button>
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