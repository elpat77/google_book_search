import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './savedbooks.css';

function SavedBooks() {
    const [value, modifier] = useState({ savedBooks: [] });
    useEffect(() => {
        console.log("hello, you just came to the saved books component");
        axios.get('/api').then(result => {
            modifier({ savedBooks: result });
        }).catch(err => console.log(err));
    }, []);

    function deleteBook(e) {
        let bookId = e.target.id;

        axios.delete(`/api/delete/${bookId}`).then(result => {
            axios.get('/api/').then(res => {
                modifier({ savedBooks: res });
            });
        });
    }
    let books = !value.savedBooks.data ? [] : value.savedBooks.data;

    return (
        <div>
            {books !== undefined ? (
                <div className="savedComponent">
                    <h4>Saved Books</h4>
                    {
                        books.map(results => (
                            <div className="card mb-3" key={results._id}>
                                <div className="row">
                                    <div className="col-md-2">
                                        <img alt={results.title} className="img-fluid" src={results.image} />
                                    </div>
                                    <div className="col-md-10">
                                        <div className="card-body">
                                            <h5 className="card-title">{results.title}</h5>
                                            <p className="card-text">{results.description}</p>
                                            <div>
                                                <a href={results.link} className="btn btn-success mt-3" target="blank" >View</a>
                                                <button onClick={(e) => {
                                                    deleteBook(e);
                                                }} className="btn btn-danger mt-3 ml-3" id={results.bookId} data={results}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            ) : (<div><h1>No Saved Books</h1></div>)}
        </div>
    )
}

export default SavedBooks;
