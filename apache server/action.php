<?php
$cmd = './helloworld.rb ';
$arg = $_POST['statement'];
#print_r($_POST);
#echo $arg;
$rbcmd = $cmd.$arg;
echo $rbcmd;
$output = shell_exec($rbcmd);
echo "<pre>$output</pre>";
?>
