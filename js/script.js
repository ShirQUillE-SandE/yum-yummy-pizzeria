function pizza(name) {
    this.pizzaName = name;
}

pizza.prototype.nameSize = function() {
    if (this.pizzaName === "Chicken Hawaiian.") {
        return "Chicken Hawaiian.";
    }else if(this.pizzaName === "Cheese Burger.") {
        return "Cheese Burger.";
    }else if(this.pizzaName === "Meat Deluxe.") {
        return "Meat Deluxe.";
    }else if(this.pizzaName === "Chicken Macon BBQ.") {
        return "Chicken Macon BBQ.";
    }else if(this.pizzaName === "Chicken & Beef Pepperoni.") {
        return "Chicken & Beef Pepperoni.";
    }else if(this.pizzaName === "Veg Feast.") {
        return "Veg Feast.";
    }else if(this.pizzaName === "Roast Veg & Feta.") {
        return "Roast Veg & Feta.";
    }else if(this.pizzaName === "Spicy Boerewors.") {
        return "Spicy Boerewors.";
    }else {
        alert("Please select a pizza type to continue");
    };
}

function size(name) {
    this.sizeName = name;
}

size.prototype.priceSize = function() {
    if (this.sizeName === "large") {
        // alert("Large");
        return 1500;
    } else if(this.sizeName === "medium") {
        // alert("Not large");
        return 1150;
    } else if(this.sizeName === "small") {
        return 900;
    } else {
        alert("Please select a pizza size");
    }
}

function crust(name) {
    this.crustName = name;
}

crust.prototype.crustPrice = function() {
    if (this.crustName === "cheese") {
        // alert("cheese");
        return 100;
    } else if (this.crustName === "thin") {
        return 70;
    } else if (this.crustName === "neapolitan") {
        return 120;
    } else {
        alert("Please select a prefferable crust to continue");
    }
}

function topping(name) {
    this.toppingName = name;
}

topping.prototype.toppingPrice = function() {
    if (this.toppingName === "Pepperoni") {
        return 10;
    } else if (this.toppingName === "Mushrooms") {
        return 40;
    } else if (this.toppingName === "Onions") {
        return 15;
    } else if (this.toppingName === "Sausage") {
        return 20;
    } else if (this.toppingName === "Bacon") {
        return 30;
    } else if (this.toppingName === "Extra-cheese") {
        return 10;
    } else if (this.toppingName === "Black-olives") {
        return 15;
    } else if (this.toppingName === "Green-peppers") {
        return 5;
    } else {
        alert("Please choose topping(s) of your choice");
    }
}

function quantity(name) {
    this.quantityName = name;
}

quantity.prototype.quantityPrice = function() {

}

$(Yum-Yummy-Pizzeria).ready(function() {
    $("#delivery").click(function() {
        alert("For to door deliveries. Please confirm by pressing ok to continue");
        prompt("Please Enter your mobile number");
        prompt("Enter your current location");
    });
});



$(Yum-Yummy-Pizzeria).ready(function() {
    $("#checkout").click(function() {
        event.preventDefault();




    var pizzaInput = $("#type").val();

        pizzaSelect = new pizza(pizzaInput);
        pizzaSelect.nameSize();

    var sizeInput = $("#size").val();

    var pizzaSize = new size(sizeInput);
        pizzaSize.priceSize();

    var crustInput = $("#crust").val();
    
    var crustSize = new crust(crustInput);
        crustSize.crustPrice();


    var toppingInput = $("#toppings").val();

    var toppingSize = new topping(toppingInput);
        toppingSize.toppingPrice();


    var quantityInput = $("quantity").val();

    var  quantitySize = new quantity (quantityInput);
         quantitySize.quantityPrice();


    var pizzaPrice = (parseInt(parseInt(pizzaSize.priceSize()) + parseInt(crustSize.crustPrice()) + parseInt(toppingSize.toppingPrice())));
    $("#summation").append(pizzaPrice);


    var pizzaS = (pizzaSize.priceSize());
    $("#psize").append(pizzaS);

    var pizzaC = (crustSize.crustPrice());
    $("#cprice").append(pizzaC);

    var pizzaT = (toppingSize.toppingPrice());
    $("#tprice").append(pizzaT);

    var pizzaN = (pizzaSelect.nameSize());
    $("#ptype").append(pizzaN);
    event.preventDefault();
    
    });
})
