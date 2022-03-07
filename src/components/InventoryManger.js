import React, { useEffect, useState } from "react";
import CurrentInventoryList from "./CurrentInventoryList";
import ReorderInventoryList from "./ReorderInventoryList"

function InventoryManager() {
    const [inventory, setInventory] = useState([])
    const [reorder, setReorder] = useState([])

    useEffect(() => {
        fetch("http://localhost:8001/inventory")
            .then((r) => r.json())
            .then((items) => setInventory(items));
    }, []);

    function onReorder(item) {
        const isAdded = reorder.find(product => product.id === item.id)
        isAdded ? console.log("item already added") : setReorder([...reorder, item])
    }

    function onRemoveReorder(item) {
        const updatedReorder = reorder.filter((product) => product.id !== item.id)
        setReorder(updatedReorder)
    }

    function onDeleteItem(item) {
        const updatedInventory = inventory.filter((product) => product.id !== item.id)
        setInventory(updatedInventory)
        onRemoveReorder(item)
    }

    return (
        <div className="container">
            <CurrentInventoryList 
            inventory={inventory} 
            onReorder={onReorder} 
            onDeleteItem={onDeleteItem}
            />
            <ReorderInventoryList 
            reorder={reorder} 
            onRemoveReorder={onRemoveReorder}
            onDeleteItem={onDeleteItem}/>
        </div>
    );
}

export default InventoryManager;