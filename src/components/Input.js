import React, {useState} from 'react';

const Input = (props) => {
    const {handleSubmit} = props;
    const [tempType, setTempType] = useState('C');

    const submitLocation = (e) => {
        e.preventDefault();
        handleSubmit(e);
    }

    const changeTempType = () => {
        (tempType === 'C') ? setTempType('F') : setTempType ('C');
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
        <button onClick={changeTempType}>
            {tempType}
        </button>
    </div>
    )
}

export default Input