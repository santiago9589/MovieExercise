import React from 'react'

interface props {
    name: string
    type: string
    handleChange: (e: React.ChangeEvent) => void;
    value: string
    touched: boolean
    errors: string,
    placeholder:string
}

const InputComponent = ({ name, type, handleChange, touched, errors, value,placeholder }: props) => {
    return (
        <>
            <label className='text-2xl capitalize'>{name}</label>
            <input
                className='p-2 rounded-md bg-slate-50 placeholder:text-lg placeholder:text-100'
                type={type}
                value={value}
                onChange={handleChange}
                name={name}
                placeholder={placeholder}
            />
            {touched && errors && (<div className='text-red-400 text-lg font-semibold uppercase'>{errors}</div>)}
        </>
    )
}


export default InputComponent