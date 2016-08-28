#!/usr/bin/env ruby
# Modified code from: https://github.com/Widdershin/sonic-pi-cli/blob/master/bin/sonic_pi
# Thanks to samaaron for making sonic-pi

require_relative 'SPi'

def args
  ARGV.join(' ')
end

def run
  puts 'Running Spi-Reader.rb'
  app = SPiReader.new
  app.test_connection!
  app.run(args)
end

run
