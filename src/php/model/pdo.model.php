<?php
    try{
        $pdo = new PDO(DB_DRIVER . ":host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET, DB_LOGIN, DB_PASS, DB_OPTIONS);
    }
    catch (PDOException $e){
        exit("❌🙀❌ OOPS :\n" . $e->getMessage());
    }