# flightsim-aircraft-panel

[Microsoft Flight Simulator](https://www.flightsimulator.com/) aircraft panel for touchscreens using [FSUIPC WebSocket Server](http://fsuipcwebsockets.paulhenty.com/).

**!!! THIS IS A PROJECT IN DEVELOPMENT !!!**<br>
Only relevant for you if you are a programmer and know what you are doing. You are welcome to take a look and do pull requests if you have
any suggestions for improvement.
Eventually it will be more polished and well documented so that anyone can set it up.

You're welcome to take a look at my online services at [aviation.allanville.com](https://aviation.allanville.com/).

## Requirements

- A browser! (only tested with Chrome and Firefox)
- A touchscreen monitor or tablet or phone (otherwise you still have to use the mouse)
- [Microsoft Flight Simulator 2020](https://www.flightsimulator.com/) or any flight simulator supported by FSUIPC
- [FSUIPC7](http://fsuipc.com/) (free)
- [FSUIPC WebSocket Server](http://fsuipcwebsockets.paulhenty.com/) (free)

## What is this?

The idea is to have a touchscreen with a browser window where you can easily click buttons, turn knobs etc in your aircraft
when you don't want to use the mouse and don't have a hardware panel.
You can also monitor other values from your aircraft.
This uses [FSUIPC](http://fsuipc.com/) and is limited to its capabilities.

Nothing speaks better than a visualization - this is a simple example screen:

![Example screen of an aircraft panel](https://aviation.allanville.com/media/flightsim-aircraft-panel-example.jpg "Example screen")

## Documentation

### Installation

THIS IS JUST MISC NOTES SO FAR.

- ...set up FSUIPC and FSUIPC WebSocker Server...
- To overlay eg. the G1000 displays on your panels click on the display in MSFS while holding down the Alt-Gr key (the Alt key on the **right** side of your keyboard). The window will now pop out and your can move it where you want. Keep in mind that you can only do this if you have your panels on the same computer as your flight simulator.
	- To have the displays show on top of your panel we need to make the Flight Simulator windows top-most and remove title bar
		- Use command line program [NirCmd](https://www.nirsoft.net/utils/nircmd.html) (no installation)
			- Resize and position your windows before running these commands. Otherwise the settings will be canceled.
			- Run command to set top-most:
				- `nircmd.exe win settopmost process FlightSimulator.exe 1`
			- Run command to remove title bar:
				- `nircmd.exe win -style process FlightSimulator.exe 0x00400000`

### Customizing/creating panels

TODO

### Customizing/creating instruments

THIS IS JUST MISC NOTES SO FAR.

Special classes that can be used:

- INOPERABLE: class that dims the control to indicate that it is inoperable
- defect-write: class that indicates the control cannot write to the sim but is read-only
- no-sound: don't play sound when button is clicked

## Troubleshooting

- Some buttons stopped working
	- It might be because you have restarted the simulator without restarting FSUIPC WebSocket Server. Simply restart FSUIPC. If still doesn't work restart the WebSocker Server as well.
