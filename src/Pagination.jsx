import React from "react";

export const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
    console.log("totalPages", totalPages);
    return (<div>
        <button onClick={()=> setCurrentPage(prev=> Math.max(1, prev-1))} disabled={currentPage === 1}>Prev</button>
        <span>Page {currentPage} of {totalPages}</span>
        {Array.from({length: totalPages}).map((_, i) => <button key={i+1} onClick={()=> setCurrentPage(i+1)}>{i+1}</button>)}
        
        <label>Go to page: <input type='number' min={1} max={totalPages} value={currentPage} onChange={(e)=> setCurrentPage(Number(e.target.value))}/></label  >
        <button onClick={()=> setCurrentPage(prev=> Math.min(totalPages, prev+1))} disabled={currentPage === totalPages}>Next</button>
    </div>)
 }
