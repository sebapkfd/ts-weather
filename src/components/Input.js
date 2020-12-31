import React from 'react';

const Input = (props) => {
    const {handleSubmit} = props;

    const submitLocation = (e) => {
        e.preventDefault();
        handleSubmit(e);
    }

    return (
    <div className="input">
        <form onSubmit={submitLocation}>
            <input
                type="text"
                name="location"
            />
        </form>
    </div>
    )
}

export default Input