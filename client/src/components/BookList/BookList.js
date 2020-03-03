import React from 'react';
import './booklist.css';

function BookList(props) {

    //console.log(props.books)
    let bookArray = props.books.map((item, index) => {
        console.log(item);

        return (
            <div className="mb-4 ">
                <div key={index} className="card bookCards">
                    <div><img className="thumbnail my-3" src={item.image} alt="image"></img></div>
                    <div className="bookTitle">{item.bookTitles}</div>
                    <div className="authors" >{item.authors}</div>
                    <div className="description"> {item.description}</div>
                    {/* <div className="bookId">Book Id: {item.id}</div> */}
                    <div className="card-body text-center">
                        <div className="text-center">
                            <div>

                                <a href={item.link} className="btn btn-outline-primary m-2" target="_blank"><i class="fa fa-rocket"></i> Link to the book</a>

                            </div>
                            <div>
                                <button
                                    className="btn btn-outline-primary m-2"
                                ><i class="fa fa-list"></i> Save book to my list</button>
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