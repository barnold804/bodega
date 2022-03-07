import React from 'react'

function InventoryItemCard({ item, onReorder, isInventory, onRemoveReorder, onDeleteItem }) {

    function handleClick(e) {
        isInventory ? onReorder(item) : onRemoveReorder(item)
    }

    function handleDelete(e) {
        e.stopPropagation()
        fetch(`http://localhost:8001/inventory/${item.id}`, {
            method: "DELETE",
        })
            .then((r) => r.json())
            .then(() => onDeleteItem(item));
    }

    return (
        <div className="card" onClick={handleClick}>
            <img src={item.image} alt={item.name}></img>
            <h3>{item.name}</h3>
            <h4>${item.price}</h4>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default InventoryItemCard;