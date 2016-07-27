##Helpful guide to using apache2 on Ubuntu

https://help.ubuntu.com/lts/serverguide/httpd.html:<br>
Store the files from the apache server folder in /var/www/html which is the default folder for apache2 sites on ubtuntu. Make sure that the ruby scripts are executable by using ls -l. Change ruby scripts to read, write and executable by using chmod 777 helloworld.rb. I have been able to work with this on both Mac (call ./helloworldmac.rb in action.php) and Ubuntu.
