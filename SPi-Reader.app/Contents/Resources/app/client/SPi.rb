# Modified code from: https://github.com/Widdershin/sonic-pi-cli/blob/master/lib/sonic_pi.rb
# Thanks to samaaron for making sonic-pi

require 'socket'
require 'osc-ruby'

class SPiReader
  HOSTNAME = 'localhost'
  PORT = 4557
  GUI_ID = 'SPi-Reader'

  STOP_ARG = 'SAJ'
  START_RECORDING_ARG = 'SRR'
  STOP_RECORDING_ARG = 'SOR'
  SAVE_RECORDING_ARG = 'SVR'

  RUN_COMMAND = '/run-code'
  STOP_COMMAND = '/stop-all-jobs'
  START_RECORDING_COMMAND = '/start-recording'
  STOP_RECORDING_COMMAND = '/stop-recording'
  SAVE_RECORDING_COMMAND = '/save-recording'

  def identifyCommand(args)
    runcommand = args
    args = args.split(" ")

    puts 'args[0]' + ' ' + args[0]
    
    puts case (args[0])
    when STOP_ARG
      stop()

    when START_RECORDING_ARG
      start_recording()

    when STOP_RECORDING_ARG
      stop_recording()

    when SAVE_RECORDING_ARG
      args[1].slice!(0)
      #puts 'args[1]' + ' ' + args[1]
      save_recording(args[1])

    else
      run(runcommand)
    end
  end

  def run(command)
    send_command(RUN_COMMAND, command)
  end

  def stop
    send_command(STOP_COMMAND)
  end

  def start_recording
    send_command(START_RECORDING_COMMAND)
  end

  def stop_recording
    send_command(STOP_RECORDING_COMMAND)
  end

  def save_recording(filename)
    puts filename
    send_command(SAVE_RECORDING_COMMAND, filename)
  end

  def test_connection!
    begin
	  OSC::Server.new(PORT)
    #TO-DO: Write an if branch here: if (!windows)
	  abort("Error: Sonic Pi not listening on #{PORT}")
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
