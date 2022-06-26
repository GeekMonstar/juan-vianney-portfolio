<?php require_once './php/ressources.php'?>
<?php require_once './php/functions.php'?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="style/style.css"/>
        <script src="js/script.js" defer></script>
        <script src="js/comands.js" defer></script>
        <title>Kaitin Restaurant</title>
    </head>
    <body>
        <div class="comand-menu">
            <div id="comand-interface">
                <button class="fermer"><span>X</span></button>
                <h2>Interface de commande</h2>
                <div id="command-items"></div>
            </div>
        </div>
        <header>
            <div id="first-head">
                <img src="./img/Logo.jpg" alt="Logo" id="logo"/>
                <h1>Chez Juanito</h1>
            </div>
            <div id="second-head">
                <div id="sub-div">
                    <img src="./img/cart.png" alt="cart-btn" id='cart_img' />
                </div>
            </div>
        </header>
        <div id='scroll'>
            <? for($i = 0; $i < count($scroll_img); $i++){
                echo("<div class='menu-example-scroll'><a href='{$scroll_img[$i][1]}'><img src='{$scroll_img[$i][0]}' alt='Top-menu'/></a></div>");
            }?>
        </div>
        <div id="main">
            <div id='main-head'>
                <h2>categories</h2>
            </div>
            <div id="main-content">
                <div id="categories">
                    <ul id="categories-list">
                        <? foreach($categories_list as $categorie => $id): ?>
                            <li class='catergories-list-item'><a href='<?=$id?>'><?=$categorie?></a></li>
                        <? endforeach ?>
                    </ul>
                </div>
                <div id="menu">
                    <?foreach($categories_list as $categorie => $id):?>
                        <div id="<?$id?>">
                            <h3 class="categorie-title"><?=$categorie?></h3>
                            <div class="categorie-content">
                                <?foreach($$categorie as $c):?>
                                    <div class="menu-example">
                                        <img src="<?=$c[1]?>" alt="Asian-Burger" class='meat-img'/>
                                        <h4 class="meat-title"><?=$c[0]?> - <span class="meat-price"><?=$c[2]?>$</span></h4><br/>
                                        <button class='add' onclick="<?click($c)?>">Ajouter à la commande</button>
                                        <?var_dump($c[3])?>
                                    </div>
                                <?endforeach?>
                            </div>
                        </div>
                    <? endforeach ?>
                </div>
            </div>
        </div>
    </body>
</html>