<?php
    require_once('config.php');
    $login = $_GET['login'];
    $select = "SELECT * FROM `users` WHERE `login` = '$login'";
    $query = $link -> prepare($select);
    $query -> execute();
    $result = $query -> get_result();
    $exists = false;
    if($result -> num_rows > 0){
        $exists = true;
        foreach ($result as $row) { 
            echo 'Добро пожаловать ' . $row['FIO'] . '!';
        };
    }
    else{
        echo '<p>' . 'Такого пользователя нет, хотите ' . '<a href="reg.html"> зарегистрироваться ' . '</a>?' . '</p>';
    }
?>