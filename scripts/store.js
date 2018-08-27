
const store = (function () {

  let items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  let hideCheckedItems = false;
  let searchTerm = '';

  function toggleCheckedFilter(){
    this.hideCheckedItems = !this.hideCheckedItems
  }

  function setSearchTerm(term){
    this.searchTerm = term;
  }

  function findById(id) {
    return items.find(item => item.id === id);
  }

  function addItem(name) {
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    }
    catch {
      throw new Error('not a valid name');
    }
  }


  function findAndToggleById(id) {
    const theItem = this.findById(id);
    theItem.checked = !theItem.checked;
  }

  function findAndUpdateName(id, newName){
    try {
      const theItem = this.items.findById(id);
      theItem.name = newName;
      theItem.validateName(newName);
    }
    catch(error){
      throw new Error('not a valid name: ' + error.message);
    }
  }

  function findAndDelete(id){
    const theItem = this.items.findById(id);
    let index = this.items.indexOf(theItem);
    this.items.splice(index, 1);
  }

  return {
    items,
    setSearchTerm,
    findById,
    findAndDelete,
    findAndUpdateName,
    findAndToggleById,
    addItem,
    toggleCheckedFilter
  }

}() );
