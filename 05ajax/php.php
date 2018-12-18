<?php
    // echo "hello world"

    // 正常的表单提交数据到php中
    // get方法:连接到新的地址,在地址栏的后边会拼接接受到的用户输入的值:http://localhost/ajax/php.php?name=张三
    if(isset($_GET["name"])){
        echo "用户输入的名字是:".$_GET["name"];
    }

    // 连接数据库
    $conn = mysqli_connect('localhost','root','123456','ajax');

    // post方法:连接到php接口,但不会将用户输入的值拼接到url地址栏中去
    if(isset($_POST["name"])){
        // echo "POST:你的名字是:".$_POST['name'];
        // form提交表单的时候设置数据库的编码格式,防止乱码
        mysqli_query($conn , "set names 'utf8' ");
        // 将拿到的数据转化一下
        $name = mysqli_real_escape_string($conn , $_POST['name']);
        // 数据库执行语句
        $query = "INSERT INTO users(name) VALUES('$name')";
        // 判断数据是否插入成功
        if(mysqli_query($conn,$query)){
            echo "用户数据插入成功";
        }else{
            echo "用户数据添加失败!".mysqli_error($conn);
        }
    }
?>