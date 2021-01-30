import React from 'react';

const Input = (props) => {
    const {handleSubmit, handleType, tempType} = props;
    
    const submitLocation = (e) => {
        e.preventDefault();
        handleSubmit(e);
    }

    return (
    <div className='options'>
        <div className="input">
            <form onSubmit={submitLocation}>
                <input
                    type="text"
                    name="location"
                    placeholder="Search"
                />
            </form>
        </div>
        <button onClick={handleType}>
            {tempType}
        </button>
    </div>
    )
}

export default Input