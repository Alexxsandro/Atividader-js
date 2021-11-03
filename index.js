class Item {
    constructor(name, price) {
        this.name = name;
        console.log(name)
        this.price = price;
        console.log(price)
    }
}
class Bill {
    constructor() {
        this.items = [];
        this.total = 0;
    }
    addItem = (item) => {
        this.items.push(item);
        this.render();
        this.billTotal();
    };
    removeItem = (name) => {

      
    };
    billTotal = () => {
        var total = this.items.reduce((acumulador, valorAtual) => {
            return acumulador + valorAtual.price
        }, 0);
        if (total > 0) {
            var comanda = document.getElementById('comanda');
            var mesage = 'Comanda';

            comanda.innerHTML = mesage;
        }
        document.getElementById('total').innerHTML = 'R$ ' + total;
    };
    render = () => {
        //UNFINISHED
        let billContainer = document.getElementById("items");
        billContainer.innerHTML = '';

        this.items.map((item) => {
            let row = document.createElement("tr");
            let foodName = document.createElement("td");
            let foodPrice = document.createElement("td");
            foodName.innerHTML = item.name;
            foodPrice.innerHTML = "R$ " + item.price;

            row.append(foodName);
            row.append(foodPrice);
            billContainer.append(row);
        });
    };
}
var bill = new Bill();

function init() {
    bill.render();
    document.getElementsByTagName("body")[0].style.display = "flex";
}

function printBill() {
    window.print();
    window.location.reload();
}
function adicionarItem() {
    var nomeProduto = document.getElementById('produto').value;
    precoProduto = document.getElementById('preco').value;

    if (nomeProduto == '' || precoProduto <= 0) {
        var itemConta = document.getElementById('itemConta');
        var mensagemConta = 'Preencha os campos';

        itemConta.innerHTML = mensagemConta;

    } else {
        precoProduto = parseFloat(precoProduto);

        bill.addItem(new Item(nomeProduto, precoProduto));

        var itemConta = document.getElementById('itemConta');
        mensagemConta = 'Adicionar item à conta';

        itemConta.innerHTML = mensagemConta;
        console.log(precoProduto)
    }
}
