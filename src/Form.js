import React, {useState} from 'react';

const Form = ({onSubmit}) => {
    const [authorName, setAuthorName]  = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(authorName);
        setAuthorName('');
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input type="text" value={authorName} onChange={(e) => setAuthorName(e.target.value)} placeholder="Enter Author Name"/>
                <button type="submit">Submit</button>
            </form>
        </div>
        );
};

export default Form;