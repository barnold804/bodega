import React from 'react'
import InventoryItemCard from './InventoryItemCard';

function CurrentInventoryList({inventory, onReorder, onDeleteItem}) {
    const itemCards = inventory.map((item) => {
            return <InventoryItemCard 
            key={item.id} 
            item={item} 
            onReorder={onReorder} 
            isInventory={true}
            onDeleteItem={onDeleteItem}
            />
    })

    return(
        <div id="current-inventory">
            <h2>Current Inventory</h2>
            <div>
                {itemCards}
            </div>
        </div>
    );
}

export default CurrentInventoryList;