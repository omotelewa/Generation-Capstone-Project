
// Create ItemsController class
class ItemsController {
        constructor(currentId = 0) {
        this.items = [];
        this.currentId = currentId;
    }

    addNewItem(flavor, description, bakeDate, batchCode,imageUrl) {

    // Create method for addItem
    
        const item = {

            // Increment currentId 
            id: this.currentId++,
            name:flavor,
            description: description,
            bakedDate: bakeDate,
            batch: batchCode,
            image: imageUrl,
        };

         this.items.push(item);
    }
            loadItemsFromLocalStorage()
        {
            const storageItems = localStorage.getItem("items");
                if(storageItems){
                    const items = JSON.parse(storageItems);
                    for(let i = 0,size = items.length; i < size; i++){
                        const item = items[i];
                        this.items.push(item);
                    }
                }
        }
}

