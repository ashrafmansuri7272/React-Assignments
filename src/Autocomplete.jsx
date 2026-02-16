import React, { useEffect, useState } from "react";
import { useDebounce } from "./hooks/useDebounce";
import { fetchSuggestions } from "./service/autosuggestion";
import { Link } from "react-router-dom";
export const Autocomplete = ({ }) => {
    const [query, setQuery] = useState("");
    const debouncedQuery = useDebounce(query, 1000);
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        if (!debouncedQuery.trim()) setSuggestions([]);
        if (debouncedQuery) {
            const fetchSuggestionUrl = `https://dummyjson.com/products/search?q=${debouncedQuery}`;
            fetchSuggestions(fetchSuggestionUrl).then((data) => {
                setSuggestions(data?.products || []);
            });
        }
    }, [debouncedQuery]);

    return (
        <div>
            <input type="text" placeholder="Search... eg. iphone" value={query} onChange={(e) => setQuery(e.target.value)} />
            <ul>
                {suggestions.length > 0 && suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion.title}</li>
                ))}
            </ul>
            <Link to="/" className="back-link">Back to Assignments</Link>
        </div>
    )
}