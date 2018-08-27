const Item = (function () {

   const Item = {};
   
   const validateName = function(name){
     if(Item.name !== name){
       throw new TypeError('Name does not exist');
     }
   }

   const create = function(name){
     const item =  {
       id: cuid(),
       name: name,
       checked: 'false'
     }
     return item;
   }

  return {
    Item,
    validateName,
    create
  }


}() );
