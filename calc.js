class Calculator {

    constructor(firstItemName, secondItemName) {
        this.firstItemName = firstItemName;
        this.secondItemName = secondItemName;
     }

    getItemName(itemOrder) {
        this.itemOrder = itemOrder;
        
        if(itemOrder = 1) {
            return this.firstItemName;
        }
        else if (itemOrder = 2) {
            return this.secondItemName;
        }
    }

    setItemValues(firstItemValue,secondItemValue) {
        
    }

    multiply(multiplyingItem,factor) {
        this.factor = factor;

        if(multiplyingItem = 1) {
            return result = this.firstItemName * this.factor;
        }
        else if(multiplyingItem = 2) {
            return result = this.secondItemName * this.factor;
        }

    }

}