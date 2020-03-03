import React from 'react';



function BookList(props) {

    //console.log(props.books)
    let bookArray = props.books.map((item, index) => {
        console.log(item);

        return (
            <div key={index} className="card">
                <div>Book Title {item.bookTitles}</div>
                <div>{item.authors}</div>
                <div>{item.description}</div>
                <div><img src={item.image} alt="image"></img></div>
                <div>{item.link}</div>
                <div>{item.id}</div>
                <div className="card-body text-center">
                    <h5 className="card-input"></h5>
                    <div className="text-center">
                        <button
                            //onClick={() => props.deleteFromArray(props._id)}
                            className="btn btn-outline-danger m-2"
                            style={{ width: "200px" }}
                        >
                            Save
          </button>
                    </div>
                </div>
            </div>

        )
    });


    return (
        <div>
            {bookArray}
            {/* //     <div className="card">
        //         <div>Hello from booklist</div>
        //         <div className="card-body text-center">
        //             <h5 className="card-input"></h5>
        //             <div className="text-center">
        //                 <button
        //                     //onClick={() => props.deleteFromArray(props._id)}
        //                     className="btn btn-outline-danger m-2"
        //                     style={{ width: "200px" }}
        //                 >
        //                     Delete
        //   </button>
        //             </div>
        //         </div>
        //     </div> */}
        </div>
    )

}



export default BookList;