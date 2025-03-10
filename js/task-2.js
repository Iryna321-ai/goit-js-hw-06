class Storage {
    #items;
constructor (initialItems) {
    this.#items = initialItems;
}

getItems() {
    return this.#items;
}

addItem(newItem) {
this.#items.push(newItem);
}

removeItem(itemToRemove) {
const itemIndex = this.#items.indexOf(itemToRemove);
if (itemIndex !== -1) {
    this.#items.splice(itemIndex, 1);
}
}
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); 

storage.addItem("Droid");
console.log(storage.getItems()); 

storage.removeItem("Prolonger");
console.log(storage.getItems()); 

storage.removeItem("Scaner");
console.log(storage.getItems()); 

