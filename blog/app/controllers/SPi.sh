#!/bin/bash
ls
SPATH=$(which sonic_pi)
echo $SPATH
cd /${SPATH:1:${#SPATH}-9}
pwd
ls
/Users/ravi/.rvm/gems/ruby-2.3.0/bin/sonic_pi play 70
