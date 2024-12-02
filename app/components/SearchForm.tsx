import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";
import { Form } from "react-router";

export interface SearchFormSchema {
    s: string
}

export interface SearchFormProps {
}

export function SearchForm({  }: SearchFormProps) {
    const [isFocused, setIsFocused] = useState(false)

    return (
        <Form
            action="/search"
            className="px-3 py-2 flex justify-between items-center rounded-md border-2 border-secondary"
        >
            <input
                name="s"
                onFocus={_ => setIsFocused(true)}
                onBlur={_ => setIsFocused(false)}
                className="outline-none text-black placeholder:text-tertiary w-full"
                type="search"
                placeholder="Search Article"
            />
            {isFocused ? <FaFilter size={20} className="text-secondary"/> : <FaSearch size={20} className="text-secondary" />}
        </Form>
    );
}