#!/bin/bash

#Test: Intended to detect OS and start the sonic-pi server
#echo 'OSTYPE: ' $OSTYPE
#echo 'You are running on: '
#case "$OSTYPE" in
#  darwin*) echo "OSX"
#           SP_SERVER='/Applications/Sonic\ Pi.app/server/bin/sonic-pi-server.rb'
#		   ;;
#
#  linux*)  echo "LINUX" ;;
#  *)       echo "unknown" ;;
#esac
#$SP_SERVER

echo 'From Spi.sh: ' $*
SPATH=$(which sonic_pi)
echo 'Your sonic-pi-cli path:' $SPATH
$SPATH $*
