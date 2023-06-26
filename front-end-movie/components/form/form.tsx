import React from 'react'

interface props {
    handleSubmit: () => void
    children: React.ReactNode
}

const FormComponent = ({ children, handleSubmit }: props) => {
    return (
        <form className="flex h-5/6 rounded-xl flex-col p-4 w-2/3  mx-auto mt-6 justify-between" onSubmit={handleSubmit}>
            {children}
        </form>
    )
}

export default FormComponent