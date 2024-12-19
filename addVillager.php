<?php
    require_once('config.php');
    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        $login = $_POST['login'];
        $FIO = $_POST['FIO'];
        $select = " SELECT * FROM `users` WHERE `login` = '$login' ";
        $querySelect = $link -> prepare($select);
        $querySelect -> execute();
        $resultSelect = $querySelect -> get_result();
        if($resultSelect -> num_rows > 0){
            echo 'exists';
        }
        else{
            $insert = " INSERT INTO `users`( `login`, `FIO`) 
            VALUES ('$login','$FIO') ";
            $query = $link -> prepare($insert);
            $query -> execute();
            echo "Пользователь успешно зарегистрирован!";
        }
    }
?>