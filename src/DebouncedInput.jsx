import React,{useEffect, useState} from "react";

export const DebouncedInput = ({delay, onDebounceChange}) => {
    const [debouncedValue, setDebouncedValue] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            onDebounceChange(debouncedValue);
        }, delay);
        return () => clearTimeout(timer);
    }, [debouncedValue, delay, onDebounceChange]);
    
        
    return (
        <input
            type = "text"
            value = {debouncedValue}
            onChange={e => setDebouncedValue(e.target.value)}
        />
    );
}