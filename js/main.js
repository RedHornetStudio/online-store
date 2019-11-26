function addProducts() {
    clearAll();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var products = JSON.parse(this.responseText);
            for(var i = 0; i < products.length; i++) {
                var section = document.getElementById('products_list');
                var divCol = document.createElement('div');
                section.appendChild(divCol);
                divCol.className = 'col';

                var divProduct = document.createElement('div');
                divProduct.className = 'product';
                divCol.appendChild(divProduct);
                
                var divDescription = document.createElement('div');
                divDescription.className = 'description';
                divProduct.appendChild(divDescription);

                var h3 = document.createElement('h3');
                h3.className = 'product';
                divDescription.appendChild(h3);
                h3.innerText = products[i].title;

                var p = document.createElement('p');
                divDescription.appendChild(p);
                p.innerText = products[i].description;

                var hr = document.createElement('hr');
                divProduct.appendChild(hr);

                var divPrice = document.createElement('div');
                divProduct.appendChild(divPrice);
                divPrice.className = 'price-stock';
                divPrice.innerText = '€' + products[i].price;

                var divStock = document.createElement('div');
                divProduct.appendChild(divStock);
                divStock.className = 'price-stock';
                divStock.innerText = products[i].stock;

                var button = document.createElement('button');
                button.addEventListener("click", function() {
                    window.location.href = 'product.php?id=' + this.id;
                });
                divProduct.appendChild(button);
                button.id = products[i].id;
                button.className = 'product';
                button.innerText = 'MORE INFO';
            }
        }
    };
    xhttp.open("POST", "https://rhswarehouse.000webhostapp.com/get.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("get=" + "all");
}

function clearAll() {
    var productsList = document.getElementById('products_list');
    while(productsList.firstChild) {
        productsList.removeChild(productsList.firstChild);
    }
}

function getProduct(id) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            try {
                var product = JSON.parse(this.responseText);

                var productTitle = document.getElementById('product-title');
                productTitle.innerText = product[0].title;

                var productDescription = document.getElementById('product-description');
                productDescription.innerText = product[0].description;

                var productPrice = document.getElementById('product-price');
                productPrice.innerText = 'Price: €' + product[0].price;

                var productStock = document.getElementById('product-stock');
                productStock.innerText = 'Stock: ' + product[0].stock;
            } catch (e) {
                var productTitle = document.getElementById('product-title');
                productTitle.innerText = 'no such product';
                var buttonGetActualStock = document.getElementById('btn-get-actual-stock');
                buttonGetActualStock.style.display = 'none';
            }
        }
    };
    xhttp.open("POST", "https://rhswarehouse.000webhostapp.com/get.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("get=" + id);
}

function getActualStock(id) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            try {
                var product = JSON.parse(this.responseText);

                var productStock = document.getElementById('product-stock');
                productStock.innerText = 'Stock: ' + product[0].stock;
            } catch {
                var productTitle = document.getElementById('product-title');
                productTitle.innerText = 'No such product';

                var buttonGetActualStock = document.getElementById('btn-get-actual-stock');
                buttonGetActualStock.style.display = 'none';

                var productDescription = document.getElementById('product-description');
                productDescription.innerText = '';

                var productPrice = document.getElementById('product-price');
                productPrice.innerText = '';

                var productStock = document.getElementById('product-stock');
                productStock.innerText = '';
            }
        }
    };
    xhttp.open("POST", "https://rhswarehouse.000webhostapp.com/get.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("get=" + id);
}