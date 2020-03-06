import React, { useEffect } from "react";
import './savedbooks.css';

function SavedBooks(props) {
    useEffect(() => {
        console.log("hello, you just came to the saved books component");
        return () => console.log("goodbye, you are leaving saved books");
    }, []);

    // const [mood, moodModifier] = useState("good");
    // const [counter, counterModifier] = useState({ counter1: 0, counter2: 0 });

    return (
        <div className="savedComponent">
            <h1>Your saved books are:</h1>



        </div>
    )
}

export default SavedBooks;