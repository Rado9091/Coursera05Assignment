(function() {
    'use strict';
//Creating Module
    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

//Injecting ToBuyController
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyItem = this;
       toBuyItem.items = ShoppingListCheckOffService.getToBuyItems();
       toBuyItem.buyItem = function(itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        };
    }

//Injecting AlreadyBoughtController
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBougthList = this;
        alreadyBougthList.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
    }

//Creating ShoppingListCheckOffService function
    function ShoppingListCheckOffService() {
        var service = this;
        var toBuyItem = [
            { name: "cookies", quantity: 10 },
            { name: "cola", quantity: 10 },
            { name: "wine", quantity: 10 },
            { name: "beer", quantity: 10 },
            { name: "chip", quantity: 10 }
        ];

        var alreadyBoughtItems = [];
        service.buyItem = function(itemIndex) {
            var item = toBuyItem[itemIndex];
            alreadyBoughtItems.push(item);
           toBuyItem.splice(itemIndex, 1);
        };

        service.getToBuyItems = function() {
            return toBuyItem;
        };

        service.getAlreadyBoughtItems = function() {
            return alreadyBoughtItems;
        };
    }
})();
