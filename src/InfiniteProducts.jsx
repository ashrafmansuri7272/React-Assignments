import React, { useEffect, useRef } from "react";
import { useInfiniteFetch } from "./hooks/useInfiniteFetch";
import { Link } from "react-router-dom";

export const InfiniteProducts = () => {
  const { hasMore, loading, error, products, fetchNext } = useInfiniteFetch();
  const sentinentalRef = useRef();

  useEffect(() => {
    if (!hasMore || loading) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fetchNext();
        }
      },
      {
        root: null,
        rootMargin: "200px",
        threshold: 0,
      }
    );
    if (sentinentalRef.current) {
      observer.observe(sentinentalRef.current);
    }
    return () => observer.disconnect();
  }, [hasMore, fetchNext, loading]);

  return (
    <>
      <Link to={"/"}>Back to Home</Link>
      <ul>
        Infinite products
        {/* <button onClick={fetchNext}>try to fetch more</button> */}
        {products?.length > 0 &&
          products.map((pr) => (
            <li key={pr.id} style={{ marginTop: "30px" }}>
              {" "}
              {pr.title}{" "}
            </li>
          ))}
      </ul>
      <div ref={sentinentalRef} style={{ height: "100px" }}>
        {" "}
      </div>
    </>
  );
};
