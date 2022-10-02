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

### Tech Stack

- HTML/CSS
- Javascript
- Vue.js 3 (standalone script, no build step => Node.js not needed)
- Bootstrap 5
- Some utility scripts in PHP

## What is this?

The idea is to have a touch screen with a browser window where you can easily click buttons, turn knobs etc in your aircraft
when you don't want to use the mouse and don't have a hardware panel.
You can also monitor other values from your aircraft. So this can even be better than a hardware panel that only has buttons but doesn't give you any feedback on the state of the function. For that very reason I'm not even using all the hardware buttons I have.
This uses [FSUIPC](http://fsuipc.com/) and is limited to its capabilities.

Nothing speaks better than a visualization - this is a simple example screen:

![Example screen of an aircraft panel](https://aviation.allanville.com/media/flightsim-aircraft-panel-example.jpg "Example screen")

You might wonder why there are no auto-pilot or radio functions added yet but that's because I have a separate hardware panel for that (VRInsight MCP Combo I) so I haven't really had a need to add them yet.


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
| offset | FSUIPC offsets, defined in map() in Fsuipc.js | `refName="pitotHeat"` | |
| lVar | WASM LVars, defined in lVarOptions() in Fsuipc.js | `refName="AS1000_MFD_Brightness"` |  |
| hVar | WASM HVars | `refName="AS1000_PFD_RANGE_INC"` |  |
| simControl | Native sim control, defined in /databases/MsfsControlsList.txt | `refName="MASTER_WARNING_ACKNOWLEDGE"` | `setValue="0"` |
| presetCommand | MobiFlight presets from HubHop, defined in /databases/MobiFlightHubHopPresets.js.<br>Can be extended or overwritten by our own presets defined in presetCommands() in Fsuipc.js. | `refName="Asobo.Cessna 172.Autopilot.C_172_AP"` <br><br> `refName="autoSetAltimeter"` <br><br> Use two different presets for a toggle:<br>`:refName="{0: 'FenixSim.A320.Lights.Input.FNX320_LIGHT_RWY_TURNOFF_OFF', 1: 'FenixSim.A320.Lights.Input.FNX320_LIGHT_RWY_TURNOFF_ON'}"`<br>0 and 1 are the internal converted values, not necessarily the raw values coming from FSUIPC. _Note the colon before refName!_ | |
| calcCode | Execute WASM "Calculator Code" | `25 (>K:ELECTRICAL_CIRCUIT_TOGGLE) 2 (>K:ELECTRICAL_BUS_TO_BUS_CONNECTION_TOGGLE)` | |

All methods can be used for setting values (input), but only offsets and LVars can be used for monitoring values (output).

#### Setup of the aircraft

All values that are going to be displayed (output) for this aircraft must be defined in the setup function of the aircraft panel,
specifically in the object passed to `onPanelLoad()`.

For offsets, the key is the name from map() in Fsuipc.js.
For LVars, the key is the actual LVar name (usually specific to the aircraft).

The value determine how the value is being displayed on the panel, it can be:

- An object with these possible keys:
	- `toHtml` : A string or function:
		- A string, in which case it refers to a method in `FsuipcHtml` which holds commonly used formatting. They will return HTML.
		- A function that will format and return HTML - which is defined within the setup() function. Used for aircraft-specific formatting.
	- `inputOptions`: One of these objects (where the values must be based on the internal converted values, not necessarily the raw values coming from FSUIPC):
		- `{toggleValues: [3, 1] }` : Toggle between these values
		- `{validValues: [0, 1, 2, 3, 4] }` : A list of valid values
		- `{min: 0, max: 100, step: 5}` : The minimum and maximum allowed values. `step` is optional and defaults to 1.
- A string or function can be used as a shorthand for just specifying the `toHtml` value that we would have specified if we had provided an object.

For example:

```
	setup(props) {
		function flapsHtml(value) {
			if (value == 0) {
				return '<span class="cdarkgray">UP</span>';
			} else if (value < 8300) {
				return 'TAKEOFF';
			} else {
				return 'DOWN';
			}
		}

		props.eventHandlers.onPanelLoad({
			watchValues: {
				offset: {
					batteryMaster: 'brightOffValue',
					gearHandle: 'gearHandle',
					flapsPositionLeft: flapsHtml,
					lightsNav: 'brightOnValue',
				},
				lVar: {
					AS1000_MFD_Brightness: 'pass',
					S_OH_EXT_LT_RWY_TURNOFF: {
						inputOptions: { toggleValues: [0, 1] },
						toHtml: 'brightOnValue',
					},
				},
			},
		});
	},
```

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
