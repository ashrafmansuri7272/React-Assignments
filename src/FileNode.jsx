import React, { useMemo, useState } from "react";

export const FileNode = ({ node }) => {
    const [isNodeOpen, setIsNodeOpen] = useState(false);
    return (
        <div style={{ cursor: 'pointer' }}>
            <span onClick={() => setIsNodeOpen(prev => !prev)}>{`${node.children ? (isNodeOpen ? '[-]' : '[+]') : '[ ]'} ${node.name}`} </span>
            {isNodeOpen && node.children?.map((child) => (
                <ul >
                    <li key={child.id}>
                        <FileNode node={child} />
                    </li>
                </ul>
            ))}
        </div>
    );
}