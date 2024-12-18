<?php
    require_once('config.php');
    $login = $_GET['login'];
    $select = "SELECT * FROM `villagers` WHERE `login-villager` = '$login'";
    $query = $link -> prepare($select);
    $query -> execute();
    $result = $query -> get_result();
    if($result -> num_rows > 0){
        foreach ($result as $row) { 
            echo 'Добро пожаловать ' . $row['fio-villager'] . '!';
        };
    }
    else{
        echo '<p>' . 'Такого пользователя нет, хотите ' . '<a href="reg.html"> зарегистрироваться ' . '</a>?' . '</p>';
    }
?>