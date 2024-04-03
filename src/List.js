import React from "react";

const List = ({authors}) => {
    return (
        <div className="submitted-authors">
            <h2>Submitted Authors:</h2>
            <ul>
                {authors.map((author,index) =>(
                    <li key={index}>{author}</li>
                ))}
            </ul>
        </div>
        );
};

export default List;