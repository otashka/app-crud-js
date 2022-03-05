let products = [];
let selectedIndex = -1;

function addProduct() {
    let productName  = document.getElementById("name").value;
    let productSurname = document.getElementById("surname").value;
    let productDate = document.getElementById("date").value;

    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("date").value = "";

    let newProduct = {
        name: productName,
        surname: productSurname,
        date: productDate
    };

    if (selectedIndex >= 0){
        products[selectedIndex] = newProduct;
        selectedIndex = -1;
    } else {
        products.push(newProduct);
    }

    drawPage();
}

function deleteProduct(index) {
    products.splice(index, 1);
    drawPage();
}

function drawPage() {

    let result = "";

    for (let i = 0; i < products.length; i++){
        result +=
         // "<th>" +
         //    "<td>" +
         //    "<p>Name: <b>"+ products[i].name +"</b></p>" +
         //    "<p>Surname: <b>"+ products[i].surname +"</b></p>" +
         //    "<p>Date: <b>"+ products[i].date +"</b></p>" +
         //    "</td>" +
         //    "</th>"
            "<div class='col-12 mt-3'>" +
            "<div class='card'>" +
            "<div class='card-header'><h3>"+ products[i].name +"</h3></div>" +
            "<div class='card-body'>" +
            "<p>Surname: <b>"+ products[i].surname +"</b></p>" +
            "<p>Date: <b>"+ products[i].date +"</b></p>" +
            "</div>" +
            "<div class='card-footer d-flex justify-content-between align-items-center'>" +
            "<button type='button' class='btn btn-success' onclick='editProduct("+ i +")'>Edit</button>" +
            "<button type='button' class='btn btn-danger' onclick='deleteProduct("+ i +")'>Delete</button>" +
            "</div>" +
            "</div>" +
            "</div>"
    }
    document.getElementById("result").innerHTML = result;
}

function editProduct(index) {
    document.getElementById("product-name").value = products[index].name;
    document.getElementById("product-surname").value = products[index].surname;
    document.getElementById("product-date").value = products[index].date;

    selectedIndex = index;
}