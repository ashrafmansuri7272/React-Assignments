import React from "react";
import { useFetch } from "./hooks/useFetch";

export const VirtualizedList = () => {
  const { data, loading, error } = useFetch(
    "https://dummyjson.com/products?limit=100"
  );
};
