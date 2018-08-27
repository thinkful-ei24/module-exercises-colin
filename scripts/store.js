
const store = (function () {


  let items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  let hideCheckedItems = false;
  let searchTerm = '';

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
    let theItem = this.items.findById(id);
    return theItem.checked = !theItem.checked;
  }

  return {
    items,
    hideCheckedItems,
    searchTerm
  }

}() );
