import React from 'react'
import InventoryItemCard from './InventoryItemCard';

function ReorderInventoryList({reorder, onRemoveReorder, onDeleteItem}) {
    const itemCards = reorder.map((item) => {
        return <InventoryItemCard 
        key={item.id} 
        item={item} 
        isInventory={false}
        onRemoveReorder={onRemoveReorder}
        onDeleteItem={onDeleteItem}
        />
    })


    return(
        <div id="reorder-container">
            <h2>Reorder</h2>
            <div>
                {itemCards}
            </div>
        </div>
    );
}

export default ReorderInventoryList;