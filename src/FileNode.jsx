import React, { useMemo, useState } from "react";

export const FileNode = ({ node }) => {
    console.log(node);
    const [isNodeOpen, setIsNodeOpen] = useState(false);
    return (
        <div style={{cursor: 'pointer'}}>
            <span onClick={() => setIsNodeOpen(prev => !prev)}>{`${node.children ? (isNodeOpen ? '[-]' : '[+]') : '[ ]'} ${node.name}`} </span>
            <ul >
                {isNodeOpen && node.children?.map((child) => (
                    <li key={child.id}>
                        <FileNode node={child} />
                    </li>
                ))}
            </ul>
        </div>
    );
}