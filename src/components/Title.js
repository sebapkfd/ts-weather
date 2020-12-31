import React from 'react';

const Title = (props) => {

    const {handleSubmit} = props;

    const submitLocation = (e) => {
        e.preventDefault();
        handleSubmit(e);
    }

    return (
        <div>
            <div className="title">
                <h1>Weather</h1>
            </div>
            <div className="input">
                <form onSubmit={submitLocation}>
                    <input
                        type="text"
                        name="location"
                    />
                </form>
            </div>
        </div>
    )
}

export default Title;