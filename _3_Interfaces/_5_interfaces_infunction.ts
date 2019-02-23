interface OrderManager {
    addProductCount: (count: number) => void;
    getProductTotalPrice:() => number;
}

function OrderManagerSample(): OrderManager {
    
    var productFunc = (cnt: number = 10) => {
        for (var i = 0; i < cnt; i++) {
            console.log(i);
        }
    }

    var totalFunc = () => {
        return 1000;
    }

    return {
        addProductCount: productFunc,
        getProductTotalPrice: totalFunc
    }
}


var c = OrderManagerSample();
c.addProductCount(3);
console.log(c.getProductTotalPrice());