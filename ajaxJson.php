<?php
    require_once('config.php');
    $array = json_decode(file_get_contents('php://input'), true);
    $login = $array['login'];
    $select = "SELECT * FROM `users` WHERE `login` = '$login'";
    $query = $link -> prepare($select);
    $query -> execute();
    $result = $query -> get_result();
    if($result -> num_rows > 0){
        foreach ($result as $row) { 
            echo 'Добро пожаловать ' . $row['FIO'] . '!';
        };
    }
    else{
        echo '<p>' . 'Такого пользователя нет, хотите ' . '<a href="reg.html"> зарегистрироваться ' . '</a>?' . '</p>';
    }
?>