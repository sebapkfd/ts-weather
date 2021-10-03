import React from 'react';

const Input = ({ handleSubmit, handleType, tempType }) => {

    const submitLocation = (e) => {
        e.preventDefault();
        handleSubmit(e);
    }

    return (
        <div className='search-options'>
            <form onSubmit={(e) => submitLocation(e)}>
                <input
                    type="text"
                    name="location"
                    placeholder="Search"
                />
            </form>
            <button onClick={() => handleType()}>
                {tempType}
            </button>
        </div>
    )
}

export default Input