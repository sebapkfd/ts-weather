import React from 'react';

const Input = ({ handleSubmit, handleType, tempType }) => {

    const submitLocation = (e) => {
        e.preventDefault();
        handleSubmit(e.target.location.value);
    }

    return (
        <div className='search-options'>
            <form onSubmit={(e) => submitLocation(e)}>
                <input
                    type="text"
                    name="location"
                    placeholder="Search"
                    required
                />
            </form>
            <button onClick={() => handleType()}>
                {tempType}
            </button>
        </div>
    )
}

export default Input