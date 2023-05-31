import React from "react";

interface InputProps {
    id: string;
    onChange: any;
    value: string;
    label: string;
    type?: string;
}

const Input: React.FC<InputProps> = ({
    id,
    onChange,
    value,
    label,
    type
}) => {
    return (
        <div className="relative">
            <input
                onChange={onChange}
                type={type}
                value={value}
                id={id}
                className="block w-full px-6 pt-6 pb-1 text-purple-700 bg-white border border-purple-700 rounded-3xl text-md apperance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
            />
            <label
                className="absolute duration-150 -translate-y-3 text-md text-zinc-400 transfomr scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                htmlFor={id}>
                {label}
            </label>
        </div>
    )
}

export default Input;