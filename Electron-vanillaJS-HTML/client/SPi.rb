# Modified code from: https://github.com/Widdershin/sonic-pi-cli/blob/master/lib/sonic_pi.rb
# Thanks to samaaron for making sonic-pi

require 'socket'
require 'osc-ruby'

class SPiReader
  HOSTNAME = 'localhost'
  PORT = 4557
  GUI_ID = 'SPi-Reader'

  RUN_COMMAND = '/run-code'
  STOP_COMMAND = '/stop-all-jobs'

  def run(command)
    send_command(RUN_COMMAND, command)
  end

  def stop
    send_command(STOP_COMMAND)
  end

  def test_connection!
    begin
	  OSC::Server.new(PORT)
    #TO-DO: Write an if branch here: if (!windows)
	  #abort("Error: Sonic Pi not listening on #{PORT}")
	rescue
	  puts 'Sonic-pi running'
	end
  end

  private

  def send_command(call_type, command=nil)
    prepared_command = OSC::Message.new(call_type, GUI_ID, command)
	client.send(prepared_command)
  end
  
  def client
    @client ||= OSC::Client.new(HOSTNAME, PORT)
  end
end
