import React from 'react';

interface Props {
    handleSubmit: (place: string) => void,
    handleScale: () => void,
    tempType: string
}

const Input = ({ handleSubmit, handleScale, tempType }: Props) => {

    const submitLocation = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmit(e.currentTarget.location.value);
    }

    return (
        <div className='search-options'>
            <form onSubmit={(e) => submitLocation(e)}>
                <input
                    type="text"
                    name="location"
                    id='location'
                    placeholder="Search"
                    required
                />
            </form>
            <button onClick={() => handleScale()}>
                {tempType}
            </button>
        </div>
    )
}

export default Input