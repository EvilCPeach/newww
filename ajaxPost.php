<?php
    require_once('config.php');
    if(!empty($_POST)){
        $login = $_POST['login'];
        $select = "SELECT * FROM `villagers` WHERE `login-villager` = '$login'";
        $query = $link -> prepare($select);
        $query -> execute();
        $result = $query -> get_result();
        foreach ($result as $row) { 
            echo 'Добро пожаловать ' . $row['fio-villager'] . '!';
        }
    }
?>