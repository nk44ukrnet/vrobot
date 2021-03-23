<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
          rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <title><?php echo $title ?></title>
    <meta name="description" content="<?php echo $description ?>">
    <!--SWIPER-->
    <link rel="stylesheet" href="css/swiper.css">
    <script src="script/swiper.js"></script>

    <?php
    //extra meta (if needed)
    if (isset($meta)) {
        echo $meta;
    }
    ?>

    <link rel="stylesheet" href="css/styles.css">
</head>
<body>

<div class="header_wrapper">
    <header>
        <a href="/" class="logo">
            <img src="img/logo.svg" alt="logo">
        </a>
        <nav>
            <ul id="navUl">
                <li><a href="/">Home</a></li>
                <li><a href="/#features">Features</a></li>
                <li><a href="#!">Cource</a></li>
                <li class="social"><a href="https://www.facebook.com/vrobotworld"><i class="fab fa-facebook-square"></i></a></li>
                <li class="social"><a href="https://www.instagram.com/vrobot_official/"><i class="fab fa-instagram"></i></a></li>
            </ul>
            <a href="#!" class="hamburger">
                <i class="fas fa-bars"></i>
            </a>
        </nav>
        <a href="#offerForm" class="btn">Try Demo</a>
    </header>
</div>