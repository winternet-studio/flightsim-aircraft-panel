# flightsim-aircraft-panel

[Microsoft Flight Simulator](https://www.flightsimulator.com/) aircraft panel for touch screens using [FSUIPC WebSocket Server](http://fsuipcwebsockets.paulhenty.com/).

**!!! THIS IS A PROJECT IN DEVELOPMENT !!!**<br>
Only relevant for you if you are a programmer and know what you are doing. You are welcome to take a look and do pull requests if you have
any suggestions for improvement.
Eventually it will be more polished and well documented so that anyone can set it up.

You're welcome to take a look at my online services at [aviation.allanville.com](https://aviation.allanville.com/).

## Requirements

- A browser! (only tested with Chrome and Firefox (dragging touch events do not work in Firefox though))
- A touch screen monitor or tablet or phone (otherwise you still have to use the mouse)
	- Any touch screen will work but of course the larger the better. As of 2020 the best touch screen monitor seems to be the [23" Acer T232HL](https://www.acer.com/ac/en/US/content/model/UM.VT2AA.A01). They also have a [27" version, T272HL](https://www.acer.com/ac/en/US/content/model/UM.HT2AA.003).
- [Microsoft Flight Simulator 2020](https://www.flightsimulator.com/) or any flight simulator supported by FSUIPC
- [FSUIPC7](http://fsuipc.com/) (free)
- [FSUIPC WebSocket Server](http://fsuipcwebsockets.paulhenty.com/) (free)

## What is this?

The idea is to have a touch screen with a browser window where you can easily click buttons, turn knobs etc in your aircraft
when you don't want to use the mouse and don't have a hardware panel.
You can also monitor other values from your aircraft.
This uses [FSUIPC](http://fsuipc.com/) and is limited to its capabilities.

Nothing speaks better than a visualization - this is a simple example screen:

![Example screen of an aircraft panel](https://aviation.allanville.com/media/flightsim-aircraft-panel-example.jpg "Example screen")


## Documentation

### Installation

JUST INCOMPLETE NOTES SO FAR.

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

JUST INCOMPLETE NOTES SO FAR.

#### Instrument/button types

JUST INCOMPLETE NOTES SO FAR.

| Name | Description |
| ---- | ----------- |
| Button | A button that triggers a single action, doesn't show state |
| Toggleable | A button that toggles between two states |
| Indicator | Only an indicator of a given state, with a label (not a button) |
| Annunciator | Like an indicator but without any label, only a light or text that can be on/off |
| KnobUpDown | A "knob" that can be set to several different states by clicking |
| KnobTouchDrag | A "knob" that can be set to several different states by dragging |

#### Instrument/button methods

JUST INCOMPLETE NOTES SO FAR.

| Method value | Description | refName examples | Other attributes used |
|--------------|-----|------|------|
| offset | FSUIPC offsets, defined in map() in Fsuipc.js | pitotHeat | |
| lVar | WASM LVars, defined in lVarOptions() in Fsuipc.js | AS1000\_MFD\_Brightness |  |
| hVar | WASM HVars | AS1000\_PFD\_RANGE\_INC |  |
| simControl | Native sim control, defined in /databases/MsfsControlsList.txt | MASTER\_WARNING\_ACKNOWLEDGE | setValue="0" |
| presetCommand | MobiFlight presets from HubHop, defined in /databases/MobiFlightHubHopPresets.js. Can be extended or overwritten by our own presets defined in presetCommands() in Fsuipc.js. | Asobo.Cessna 172.Autopilot.C\_172\_AP <br><br> autoSetAltimeter | |
| calcCode | Execute WASM "Calculator Code" | 25 (>K:ELECTRICAL\_CIRCUIT\_TOGGLE) 2 (>K:ELECTRICAL\_BUS\_TO\_BUS\_CONNECTION\_TOGGLE) | |

### Customizing/creating instruments

JUST INCOMPLETE NOTES SO FAR.

Special classes that can be used:

- INOPERABLE: class that dims the control to indicate that it is inoperable
- defect-write: class that indicates the control cannot write to the sim but is read-only
- no-sound: don't play sound when button is clicked


## Adding and customizing your own panels and FSUIPC offsets

**ALL** customization must be done in the `user-config` to keep things organized.

When you have created new panels that other people can benefit from I will gladly include them in the official application.
You can send them to me or do a pull request.


## Troubleshooting

- Some buttons stopped working
	- It might be because you have restarted the simulator without restarting FSUIPC WebSocket Server. Simply restart FSUIPC. If still doesn't work restart the WebSocker Server as well.
