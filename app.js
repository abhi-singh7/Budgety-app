var budgetConroller = (function(){
 
  
})(); // immediately invoice function



var UIController = (function(){
// Some code


})();




var controller = (function(bdtCtrl, UICtrl){

  var ctrAddItem = function(){
     // get the field input
    // add the item to the budget controller
    // add the item to the UI
    // calculate the budget
    // Disply the budget on UI
    console.log ('working');
  }

  document.querySelector('.add__btn').addEventListener('click',ctrAddItem);
  document.addEventListener('keypress', function(event){
    if (event.keyCode === 13 || event.which === 13){
      ctrAddItem();
    }
  })

})(budgetConroller, UIController);