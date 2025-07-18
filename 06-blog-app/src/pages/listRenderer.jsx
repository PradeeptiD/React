import React from 'react';
import "./commentSection.css"

function ListRenderer({ items, renderItem, emptyMessage = "No items to display." }) {
    if (!items || items.length === 0) {
        return <p className='empty-message'>{emptyMessage}</p>;
    }

    return (
        <div className='comment-container'>
        {items.map((item, index) => (
            <div key={item.id || index}>
            {renderItem(item)}
            </div>
        ))}
        </div>
    );
}

export default ListRenderer;
