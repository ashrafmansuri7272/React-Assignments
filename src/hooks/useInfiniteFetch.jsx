import React, { useEffect, useState, useRef } from "react";

const LIMIT = 10;

export const useInfiniteFetch = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  const didFetch = useRef(false);

  const fetchNext = async () => {
    let payload;
    try {
      setLoading(true);
      setError("");
      const skip = LIMIT * page;
      const response = await fetch(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`
      );
      payload = await response.json();
      setProducts((prev) => [...prev, ...payload.products]);
      setHasMore(skip + payload?.products?.length < payload?.total);
      setPage((prev) => prev + 1);
    } catch (error) {
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (didFetch.current) return;
    didFetch.current = true;
    fetchNext();
  }, []);

  return { hasMore, loading, error, products, fetchNext };
};
