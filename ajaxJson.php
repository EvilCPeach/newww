<?php
    require_once('config.php');
    print_r(file_get_contents('php://input'));
    $array = json_decode(file_get_contents('php://input'), true);
    print_r($array);
    $login = $array['login'];
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