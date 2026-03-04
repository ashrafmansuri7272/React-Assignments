import React, { useState } from "react";
import { useFetch } from "./hooks/useFetch";

const ITEM_HEIGHT = 40;
const VIR_WIN = 400;
const PRODUCT_URL = "https://dummyjson.com/products?limit=100";

export const Virtualizedlist = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const { data: { products = [], total } = {} } = useFetch(PRODUCT_URL);

  const startIndex = Math.floor(scrollTop / ITEM_HEIGHT);
  const endIndex = startIndex + Math.ceil(VIR_WIN / ITEM_HEIGHT);

  const payload = products.slice(startIndex, endIndex);

  return (
    <div
      style={{
        height: `${VIR_WIN}px`,
        background: "lightGrey",
        overflowY: "auto",
      }}
      onScroll={(e) => setScrollTop(e.target.scrollTop)}
    >
      <div style={{ height: `${ITEM_HEIGHT * products.length}px` }}>
        <div
          style={{
            transform: `translateY(${startIndex * ITEM_HEIGHT}px)`,
          }}
        >
          {payload.length > 0 &&
            payload.map((item) => (
              <p key={item.id} style={{ height: `${ITEM_HEIGHT}px` }}>
                {item.title}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};
