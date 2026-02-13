import React, {useEffect, useState} from "react";

export function useFetch(url) {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchApiData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(url);
            if(!response.ok) {
                throw new Error(`Error fetching users: ${response.statusText}`);
            }
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchApiData();
    }, [])
    return { users, loading, error };
}

