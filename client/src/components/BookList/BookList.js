import React from 'react';



function BookList(props) {

    return (
        <div>
            <div className="card">
                <div>Hello from booklist</div>
                <div className="card-body text-center">
                    <h5 className="card-input"></h5>
                    <div className="text-center">
                        <button
                            onClick={() => props.deleteFromArray(props._id)}
                            className="btn btn-outline-danger m-2"
                            style={{ width: "200px" }}
                        >
                            Delete
          </button>
                    </div>
                </div>
            </div>
        </div>

    )
}



export default BookList;