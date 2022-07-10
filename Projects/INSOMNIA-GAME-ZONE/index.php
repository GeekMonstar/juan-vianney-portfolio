<?php
require_once './php/ressources.php';
require_once './php/components.php';
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/loader.css">
    <script src="js/script.js" defer></script>
</head>
<body>
    <?=Loading()?>
    <header>
        <nav>
            <div id="logo-label">
                <img id="header-logo" src="img/logo-png.png"/>
                <h1>Insomnia Game Zone</h1>
            </div>
            <div id="nav-links">
                <a href="#">Présentation</a>
                <a href="#">Nos Evennements</a>
                <a href="#">Nous contacter</a>
            </div>
        </nav>
        <div id="div-header-cover">
            <h1>Bienvenue sur notre site officiel</h1>
        </div>
    </header>
    <section id="presentation">
        <h2>Presentation</h2>
        <?php for ($i = 0; $i < sizeof($presentation_data); $i += 2):?>
            <?php if($i < (sizeof($presentation_data)-1)):?>
            <div class="presentation-item-l">
                <img class="presentation-img" src="<?=$presentation_data[$i][0]?>" alt="img" />
                <div class="presentation-text">
                    <h3 class="presentation-item-title"><?=$presentation_data[$i][1]?></h3>
                    <p class="presentation-p"><?=$presentation_data[$i][2]?></p>
                </div>
            </div>
            <div class="presentation-item-r">
                <div class="presentation-text">
                    <h3 class="presentation-item-title"><?=$presentation_data[$i+1][1]?></h3>
                    <p class="presentation-p"><?=$presentation_data[$i+1][2]?></p>
                </div>
                <img class="presentation-img" src="<?=$presentation_data[$i+1][0]?>" alt="img"/>
            </div>
            <?php else:?>
                <div class="presentation-item-l">
                <img class="presentation-img" src="<?=$presentation_data[$i][0]?>" alt="img"/>
                <div class="presentation-text">
                    <h3 class="presentation-item-title"><?=$presentation_data[$i][1]?></h3>
                    <p class="presentation-p"><?=$presentation_data[$i][2]?></p>
                </div>
            </div>
            <?php endif?>
        <?php endfor?>
    </section>
    <section>
        <h2>Nos jeux fares</h2>
        <div id='scroll'>
            <?php for($i = 0; $i < sizeof($games_data); $i++):?>
                <div class="game-item">
                    <img src="<?=$games_data[$i][0]?>" alt="game"/>
                    <h4><?=$games_data[$i][1]?></h4>
                    <p><?=$games_data[$i][2]?></p>
                </div>
            <? endfor?>
        </div>
    </section>
    <section class="consoles">
        <h2>Nos consoles</h2>
        <div class="console-list">
            <?php for($i = 0; $i < sizeof($consoles_data); $i++):?>
                <img class="console-img" src=<?=$consoles_data[$i]?> alt="consonsole">
            <? endfor?>
        </div>
    </section>
    <section id="evenement">
        <!-- <h2>Prochain evenement</h2> -->
    </section>
    <footer>
        <div id="reseaux">
            <a class="project-link" href="https://www.facebook.com/insomniagameafrica/" target="_blank"><img id="fb" src="img/fb-logo.png" alt="fb"/></a>
            <a class="project-link" href=""><img id="whatsapp" src="img/whatsapp-logo.png" alt="whatsapp"/></a>
            <a class="project-link" href="#" target="_blank"><img id="insta" src="img/instagram-logo.png" alt="instagram"/></a>
            <a class="project-link" href="https://twitter.com/insomniagamezone?fbclid=IwAR3OvZaoaapvqzMRke17CO1q3WXh2NKJMUBBWEX-Z8vsu_CEK59JRZSgqyo" target="_blank"><img id="twitter" src="img/twitter-logo.png" alt="twitter"/></a>        </div>
    </footer>

</body>
</html>