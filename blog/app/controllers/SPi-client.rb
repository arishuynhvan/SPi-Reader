#!/Users/ravi/.rvm/rubies/ruby-2.3.0/bin/ruby

require 'socket'
require 'osc-ruby'

HOSTNAME = 'localhost'
PORT = 4557
GUI_ID = 'SPi-Reader'

client = TCPSocket.new(HOSTNAME, PORT)

ARGV.each do |argv|
  puts argv
  client.write(argv)
end
