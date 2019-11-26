<?php

    $id = '';

    if(isset($_GET['id'])) {
        $id = $_GET['id'];
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Online store</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/main.js"></script>
</head>
<body onload="getProduct('<?php echo htmlspecialchars($id); ?>')">
<div id="main-screen">
    <header>
        <nav>
            <ul class="nav clearfix">
                <li class="nav"><a href="index.html" class="nav">HOME</a></li>
                <li class="nav"><a href="" class="nav">ABOUT</a></li>
            </ul>
        </nav>
    </header>
    <section class="clearfix" id="product-details">
        <h2 id="product-title"></h2>
        <p id="product-description"></p>
        <div id="product-price"></div>
        <div id="product-stock"></div>
        <button style="display: block; margin-left: auto;" id="btn-get-actual-stock"
            onclick="getActualStock(<?php echo $id; ?>)">GET ACTUAL STOCK</button>
    </section>
    <footer>
        <div class="copyright">Copyright 2019 Red Hornet Studio</div>
    </footer>
</div>
</body>
</html>