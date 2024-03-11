<template>
<div :class="'panel-container grid-container '+ panelInfo.path.join(' ')">
	<div class="all-instruments">




		<div class="grid-container text-center std-spacing the-overhead">
			<div class="overhead-center-left">

				<div class="section antiice">Anti Ice</div>

				<Switch label="WING" method="offset" refName="antiIceWing" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				<Switch label="ENG 1" method="offset" refName="antiIceEng1" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				<Switch label="ENG 2" method="offset" refName="antiIceEng2" :dataStore="dataStore" :eventHandlers="eventHandlers" />

				<div class="section extlt">Ext Lt</div>

				<Switch label="STROBE" method="offset" refName="lightsStrobe" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				<Switch label="BEACON" method="offset" refName="lightsBeacon" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				<Switch label="WING" method="offset" refName="lightsWing" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				<Switch label="NAV & LOGO" method="offset" refName="lightsNav" :dataStore="dataStore" :eventHandlers="eventHandlers" />

				<div class="spacer-extlt"></div>

				<Switch label="RWY TURN" method="presetCommand" :refName="{0: 'FenixSim.A320.Lights.Input.FNX320_LIGHT_RWY_TURNOFF_OFF', 1: 'FenixSim.A320.Lights.Input.FNX320_LIGHT_RWY_TURNOFF_ON'}" readMethod="lVar" readRefName="S_OH_EXT_LT_RWY_TURNOFF" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				<Switch label="LAND L" method="presetCommand" :refName="{0: 'FenixSim.A320.Lights.Input.FNX320_LIGHT_LANDING_L_RETRACT', 1: 'FenixSim.A320.Lights.Input.FNX320_LIGHT_LANDING_L_ON'}" readMethod="lVar" readRefName="S_OH_EXT_LT_LANDING_L" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				<Switch label="LAND R" method="presetCommand" :refName="{0: 'FenixSim.A320.Lights.Input.FNX320_LIGHT_LANDING_R_RETRACT', 1: 'FenixSim.A320.Lights.Input.FNX320_LIGHT_LANDING_R_ON'}" readMethod="lVar" readRefName="S_OH_EXT_LT_LANDING_R" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				<Switch label="TAXI" method="offset" refName="lightsTaxi" :dataStore="dataStore" :eventHandlers="eventHandlers" />

			</div>
			<div class="overhead-center-middle">

				<div class="section aircond">Air Cond</div>

				<Switch label="APU BLEED" method="presetCommand" refName="FenixSim.A320.Pneumatic.FNX320 Pneumatic APU Bleed Button Press" readMethod="lVar" readRefName="I_OH_PNEUMATIC_APU_BLEED_L" :dataStore="dataStore" />

				<div class="section apu">APU</div>

				<Switch label="APU MASTER" method="presetCommand" refName="FenixSim.A320.Electrical.Input.FNX320_APU_MASTER_SWITCH" readMethod="lVar" readRefName="I_OH_ELEC_APU_MASTER_L" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				<br>
				<Switch label="APU START" method="presetCommand" refName="FenixSim.A320.Electrical.Input.FNX320_APU_START_SWITCH" readMethod="lVar" readRefName="I_OH_ELEC_APU_START_L" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				<div style="text-align: center">
					<Annunciator text="AVAIL" method="lVar" refName="I_OH_ELEC_APU_START_U" onStyle="color: #bcf417" offStyle="opacity: 0" :options="{classes: 'apu-avail'}" :dataStore="dataStore" />
				</div>

			</div>
			<div class="overhead-center-right">

				<div class="section intlt">Int Lt</div>

				<KnobUpDown label="DOME" method="presetCommand" :refName="{0: 'FenixSim.A320.Lights.Input.FNX320_LIGHT_DOME_OFF', 1: 'FenixSim.A320.Lights.Input.FNX320_LIGHT_DOME_DIM', 2: 'FenixSim.A320.Lights.Input.FNX320_LIGHT_DOME_BRT'}" readMethod="lVar" readRefName="S_OH_INT_LT_DOME" :dataStore="dataStore" :eventHandlers="eventHandlers" />

				<div class="section signs">Signs</div>

				<Switch label="SEAT BELT" method="presetCommand" :refName="{0: 'FenixSim.A320.Safety.Input.FNX320_SAFETY_SEAT_BELTS_OFF', 1: 'FenixSim.A320.Safety.Input.FNX320_SAFETY_SEAT_BELTS_ON'}" readMethod="lVar" readRefName="S_OH_SIGNS" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				<Switch label="NO SMOKING" method="presetCommand" :refName="{0: 'FenixSim.A320.Safety.Input.FNX320_SAFETY_NO_SMOKING_OFF', 1: 'FenixSim.A320.Safety.Input.FNX320_SAFETY_NO_SMOKING_AUTO'}" readMethod="lVar" readRefName="S_OH_SIGNS_SMOKING" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				<!-- Setting No Smoking to ON instead of AUTO would make a memo on the ECAM - or?? -->

			</div>
		</div>

		<div class="text-center std-spacing the-display-wall">
			<Switch label="MASTER WARN" method="presetCommand" refName="FenixSim.A320.Warning.FNX320 Glareshield Master Warning Captain Button Press" readMethod="lVar" readRefName="Glareshield_Master_Warning_Captain_Button_Annunciator_Upper" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<Switch label="MASTER CAUT" method="presetCommand" refName="FenixSim.A320.Warning.FNX320 Glareshield Master Caution Captain Button Press" readMethod="lVar" readRefName="Glareshield_Master_Caution_Captain_Button_Annunciator_Upper" :dataStore="dataStore" :eventHandlers="eventHandlers" />

			<Annunciator text="GEAR" method="offset" refName="gearHandle" :dataStore="dataStore" />

			<Switch label="LO" method="presetCommand" refName="FenixSim.A320.Gear.FNX320 MainPanel Autobrake Low Button Press" readMethod="lVar" readRefName="MainPanel_Autobrake_Low_Button_Annunciator_Lower" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<Switch label="MED" method="presetCommand" refName="FenixSim.A320.Gear.FNX320 MainPanel Autobrake Medium Button Press" readMethod="lVar" readRefName="MainPanel_Autobrake_Medium_Button_Annunciator_Lower" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			<Switch label="MAX" method="presetCommand" refName="FenixSim.A320.Gear.FNX320 MainPanel Autobrake Max Button Press" readMethod="lVar" readRefName="MainPanel_Autobrake_Max_Button_Annunciator_Lower" :dataStore="dataStore" :eventHandlers="eventHandlers" />
		</div>

		<div class="text-center std-spacing the-ecam">
			<div>
				<Button label="TO CONFIG" method="presetCommand" refName="FenixSim.A320.ECAM.FNX320 ECAM TO CONFIG Button Press" :options="{classes: 'small-instr'}" :eventHandlers="eventHandlers" />
			</div>
			<div>
				<Switch label="ENG" method="presetCommand" refName="FenixSim.A320.ECAM.FNX320 ECAM ENG Button Press" readMethod="lVar" readRefName="I_ECAM_ENGINE" :options="{classes: 'small-instr'}" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				<Switch label="BLEED" method="presetCommand" refName="FenixSim.A320.ECAM.FNX320 ECAM BLEED Button Press" readMethod="lVar" readRefName="I_ECAM_BLEED" :options="{classes: 'small-instr'}" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				<Switch label="PRESS" method="presetCommand" refName="FenixSim.A320.ECAM.FNX320 ECAM PRESS Button Press" readMethod="lVar" readRefName="I_ECAM_CAB_PRESS" :options="{classes: 'small-instr'}" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				<Switch label="ELEC" method="presetCommand" refName="FenixSim.A320.ECAM.FNX320 ECAM ELEC Button Press" readMethod="lVar" readRefName="I_ECAM_ELEC" :options="{classes: 'small-instr'}" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				<Switch label="HYD" method="presetCommand" refName="FenixSim.A320.ECAM.FNX320 ECAM HYD Button Press" readMethod="lVar" readRefName="I_ECAM_HYD" :options="{classes: 'small-instr'}" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				<Switch label="FUEL" method="presetCommand" refName="FenixSim.A320.ECAM.FNX320 ECAM FUEL Button Press" readMethod="lVar" readRefName="I_ECAM_FUEL" :options="{classes: 'small-instr'}" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			</div>
			<div>
				<Switch label="APU" method="presetCommand" refName="FenixSim.A320.ECAM.FNX320 ECAM APU Button Press" readMethod="lVar" readRefName="I_ECAM_APU" :options="{classes: 'small-instr'}" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				<Switch label="COND" method="presetCommand" refName="FenixSim.A320.ECAM.FNX320 ECAM COND Button Press" readMethod="lVar" readRefName="I_ECAM_COND" :options="{classes: 'small-instr'}" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				<Switch label="DOOR" method="presetCommand" refName="FenixSim.A320.ECAM.FNX320 ECAM DOOR Button Press" readMethod="lVar" readRefName="I_ECAM_DOOR" :options="{classes: 'small-instr'}" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				<Switch label="WHEEL" method="presetCommand" refName="FenixSim.A320.ECAM.FNX320 ECAM WHEEL Button Press" readMethod="lVar" readRefName="I_ECAM_WHEEL" :options="{classes: 'small-instr'}" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				<Switch label="F/CTL" method="presetCommand" refName="FenixSim.A320.ECAM.FNX320 ECAM FCTL Button Press" readMethod="lVar" readRefName="I_ECAM_FCTL" :options="{classes: 'small-instr'}" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				<Button label="ALL" method="presetCommand" refName="FenixSim.A320.ECAM.FNX320 ECAM ALL Button Press" :options="{classes: 'small-instr'}" :eventHandlers="eventHandlers" />
			</div>
			<div>
				<Switch label="CLR" method="presetCommand" refName="FenixSim.A320.ECAM.FNX320 ECAM CLR Left Button Press" readMethod="lVar" readRefName="I_ECAM_CLR_LEFT" :options="{classes: 'small-instr'}" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				<Switch label="STS" method="presetCommand" refName="FenixSim.A320.ECAM.FNX320 ECAM STS Button Press" readMethod="lVar" readRefName="I_ECAM_STATUS" :options="{classes: 'small-instr'}" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				<Button label="RCL" method="presetCommand" refName="FenixSim.A320.ECAM.FNX320 ECAM RCL Button Press" :options="{classes: 'small-instr'}" :eventHandlers="eventHandlers" />
			</div>
		</div>

		<div class="grid-container text-center std-spacing the-pedestal">
			<div class="pedestal-left">
				<KnobUpDown label="Spoilers" method="offset" refName="spoilersArm" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			</div>
			<div class="pedestal-middle">
				<KnobUpDown label="ENG MODE" method="offset" refName="ignition" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			</div>
			<div class="pedestal-right">
			</div>
			<div class="pedestal-lower">
				<Switch label="Parking Break" method="offset" refName="parkingBrake" :dataStore="dataStore" :eventHandlers="eventHandlers" />
				<Indicator label="Flaps" method="offset" refName="flapsPositionLeft" :dataStore="dataStore" />
				<KnobUpDown label="XPDR" method="offset" refName="transponderState" :dataStore="dataStore" :eventHandlers="eventHandlers" />
			</div>
		</div>

		<div class="grid-container std-spacing misc-buttons">
			<div>
				<Button label="A/P DISCONNECT" method="presetCommand" refName="FenixSim.A320.Autopilot.FNX320 Misc Sidestick AP Disconnect Captain Button Press" :eventHandlers="eventHandlers" />
				<br>
				<Button label="A/T DISCONNECT" method="presetCommand" refName="FenixSim.A320.Engines.Input.FNX320 Throttle Autothrottle Disconnect Left Button Press" :eventHandlers="eventHandlers" />
			</div>
		</div>



	</div>
	<div class="efb" style="text-align: right">




		<iframe src="http://localhost:8083" style="width: 42vw; height: 100vh"></iframe>




	</div>
	<div class="mcdu" style="text-align: right">




		<iframe src="http://localhost:8083/#/mcdu" style="width: 33vw; height: 100vh"></iframe>




	</div>
<!--
This was for Version 1 (not fully working though, and bg image not put in repo). Version 2 (Block 2) now has an inbuilt MCDU!
	<div class="mcdu" :style="'width: 36vw; height: 100vh; background-image: url(&quot;aircraft-panels/'+ panelInfo.path.join('/').replace('default-vue', '') +'a320-mcdu.jpg&quot;)'">
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY LSK1L Press" id="mcdu-lsk1l" style="left:  1vh; top: 12.7vh; width: 5vh; height: 4vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY LSK2L Press" id="mcdu-lsk2l" style="left:  1vh; top: 18.4vh; width: 5vh; height: 4vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY LSK3L Press" id="mcdu-lsk3l" style="left:  1vh; top: 24.1vh; width: 5vh; height: 4vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY LSK4L Press" id="mcdu-lsk4l" style="left:  1vh; top: 29.8vh; width: 5vh; height: 4vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY LSK5L Press" id="mcdu-lsk5l" style="left:  1vh; top: 35.4vh; width: 5vh; height: 4vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY LSK6L Press" id="mcdu-lsk6l" style="left:  1vh; top: 41.1vh; width: 5vh; height: 4vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY LSK1R Press" id="mcdu-lsk1r" style="left: 58vh; top: 12.7vh; width: 5vh; height: 4vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY LSK2R Press" id="mcdu-lsk2r" style="left: 58vh; top: 18.4vh; width: 5vh; height: 4vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY LSK3R Press" id="mcdu-lsk3r" style="left: 58vh; top: 24.1vh; width: 5vh; height: 4vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY LSK4R Press" id="mcdu-lsk4r" style="left: 58vh; top: 29.8vh; width: 5vh; height: 4vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY LSK5R Press" id="mcdu-lsk5r" style="left: 58vh; top: 35.4vh; width: 5vh; height: 4vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY LSK6R Press" id="mcdu-lsk6r" style="left: 58vh; top: 41.1vh; width: 5vh; height: 4vh" class="mcdu-btn" :eventHandlers="eventHandlers" />

		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY DIR Press" id="mcdu-dir"  style="left:  6.9vh; top: 50.8vh; width: 6.6vh; height: 4.3vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY PROG Press" id="mcdu-prog" style="left: 14.8vh; top: 50.8vh; width: 6.6vh; height: 4.3vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY PERF Press" id="mcdu-perf" style="left: 22.6vh; top: 50.8vh; width: 6.6vh; height: 4.3vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY INIT Press" id="mcdu-init" style="left: 30.4vh; top: 50.8vh; width: 6.6vh; height: 4.3vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY DATA Press" id="mcdu-data" style="left: 38.2vh; top: 50.8vh; width: 6.6vh; height: 4.3vh" class="mcdu-btn" :eventHandlers="eventHandlers" />

		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY FPLN Press" id="mcdu-fpln"    style="left:  6.9vh; top: 56.1vh; width: 6.6vh; height: 4.3vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY RAD NAV Press" id="mcdu-radnav"  style="left: 14.8vh; top: 56.1vh; width: 6.6vh; height: 4.3vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY FUEL PRED Press" id="mcdu-fuel"    style="left: 22.6vh; top: 56.1vh; width: 6.6vh; height: 4.3vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY SEC FPLN Press" id="mcdu-secfpln" style="left: 30.4vh; top: 56.1vh; width: 6.6vh; height: 4.3vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.Input.FNX320 CDU1 KEY ATC COM Press" id="mcdu-atc"     style="left: 38.2vh; top: 56.1vh; width: 6.6vh; height: 4.3vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY MENU Press" id="mcdu-menu"    style="left: 46.1vh; top: 56.1vh; width: 6.6vh; height: 4.3vh" class="mcdu-btn" :eventHandlers="eventHandlers" />

		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY AIRPORT Press" id="mcdu-airport" style="left: 6.9vh; top: 61.4vh; width: 6.6vh; height: 4.3vh" class="mcdu-btn" :eventHandlers="eventHandlers" />

		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY ARROW LEFT Press" id="mcdu-left"  style="left:  6.9vh; top: 66.7vh; width: 6.6vh; height: 4.3vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY ARROW UP Press" id="mcdu-up"    style="left: 14.8vh; top: 66.7vh; width: 6.6vh; height: 4.3vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY ARROW RIGHT Press" id="mcdu-right" style="left:  6.9vh; top: 72.0vh; width: 6.6vh; height: 4.3vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY ARROW DOWN Press" id="mcdu-down"  style="left: 14.8vh; top: 72.0vh; width: 6.6vh; height: 4.3vh" class="mcdu-btn" :eventHandlers="eventHandlers" />

		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY 1 Press" id="mcdu-1"    style="left:  6.2vh; top: 77.1vh; width: 6vh; height: 4.6vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY 2 Press" id="mcdu-2"    style="left: 12.5vh; top: 77.1vh; width: 6vh; height: 4.6vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY 3 Press" id="mcdu-3"    style="left: 18.8vh; top: 77.1vh; width: 6vh; height: 4.6vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY 4 Press" id="mcdu-4"    style="left:  6.2vh; top: 82.3vh; width: 6vh; height: 4.6vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY 5 Press" id="mcdu-5"    style="left: 12.5vh; top: 82.3vh; width: 6vh; height: 4.6vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY 6 Press" id="mcdu-6"    style="left: 18.8vh; top: 82.3vh; width: 6vh; height: 4.6vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY 7 Press" id="mcdu-7"    style="left:  6.2vh; top: 87.4vh; width: 6vh; height: 4.6vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY 8 Press" id="mcdu-8"    style="left: 12.5vh; top: 87.4vh; width: 6vh; height: 4.6vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY 9 Press" id="mcdu-9"    style="left: 18.8vh; top: 87.4vh; width: 6vh; height: 4.6vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY DOT Press" id="mcdu-dot"  style="left:  6.2vh; top: 92.5vh; width: 6vh; height: 4.6vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY 0 Press" id="mcdu-0"    style="left: 12.5vh; top: 92.5vh; width: 6vh; height: 4.6vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY MINUS Press" id="mcdu-plus" style="left: 18.8vh; top: 92.5vh; width: 6vh; height: 4.6vh" class="mcdu-btn" :eventHandlers="eventHandlers" />

		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY A Press" id="mcdu-a"     style="left: 24.9vh; top: 62.0vh; width: 6.3vh; height: 5.7vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY B Press" id="mcdu-b"     style="left: 31.5vh; top: 62.0vh; width: 6.3vh; height: 5.7vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY C Press" id="mcdu-c"     style="left: 38.1vh; top: 62.0vh; width: 6.3vh; height: 5.7vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY D Press" id="mcdu-d"     style="left: 44.8vh; top: 62.0vh; width: 6.3vh; height: 5.7vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY E Press" id="mcdu-e"     style="left: 51.5vh; top: 62.0vh; width: 6.3vh; height: 5.7vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY F Press" id="mcdu-f"     style="left: 24.9vh; top: 68.0vh; width: 6.3vh; height: 5.7vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY G Press" id="mcdu-g"     style="left: 31.5vh; top: 68.0vh; width: 6.3vh; height: 5.7vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY H Press" id="mcdu-h"     style="left: 38.1vh; top: 68.0vh; width: 6.3vh; height: 5.7vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY I Press" id="mcdu-i"     style="left: 44.8vh; top: 68.0vh; width: 6.3vh; height: 5.7vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY J Press" id="mcdu-j"     style="left: 51.5vh; top: 68.0vh; width: 6.3vh; height: 5.7vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY K Press" id="mcdu-k"     style="left: 24.9vh; top: 74.0vh; width: 6.3vh; height: 5.7vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY L Press" id="mcdu-l"     style="left: 31.5vh; top: 74.0vh; width: 6.3vh; height: 5.7vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY M Press" id="mcdu-m"     style="left: 38.1vh; top: 74.0vh; width: 6.3vh; height: 5.7vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY N Press" id="mcdu-n"     style="left: 44.8vh; top: 74.0vh; width: 6.3vh; height: 5.7vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY O Press" id="mcdu-o"     style="left: 51.5vh; top: 74.0vh; width: 6.3vh; height: 5.7vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY P Press" id="mcdu-p"     style="left: 24.9vh; top: 79.9vh; width: 6.3vh; height: 5.7vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY Q Press" id="mcdu-q"     style="left: 31.5vh; top: 79.9vh; width: 6.3vh; height: 5.7vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY R Press" id="mcdu-r"     style="left: 38.1vh; top: 79.9vh; width: 6.3vh; height: 5.7vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY S Press" id="mcdu-s"     style="left: 44.8vh; top: 79.9vh; width: 6.3vh; height: 5.7vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY T Press" id="mcdu-t"     style="left: 51.5vh; top: 79.9vh; width: 6.3vh; height: 5.7vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY U Press" id="mcdu-u"     style="left: 24.9vh; top: 85.9vh; width: 6.3vh; height: 5.7vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY V Press" id="mcdu-v"     style="left: 31.5vh; top: 85.9vh; width: 6.3vh; height: 5.7vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY W Press" id="mcdu-w"     style="left: 38.1vh; top: 85.9vh; width: 6.3vh; height: 5.7vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY X Press" id="mcdu-x"     style="left: 44.8vh; top: 85.9vh; width: 6.3vh; height: 5.7vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY Y Press" id="mcdu-y"     style="left: 51.5vh; top: 85.9vh; width: 6.3vh; height: 5.7vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY Z Press" id="mcdu-z"     style="left: 24.9vh; top: 91.9vh; width: 6.3vh; height: 5.7vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY SLASH Press" id="mcdu-slash" style="left: 31.5vh; top: 91.9vh; width: 6.3vh; height: 5.7vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY SPACE Press" id="mcdu-sp"    style="left: 38.1vh; top: 91.9vh; width: 6.3vh; height: 5.7vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY OVFLY Press" id="mcdu-ovfy"  style="left: 44.8vh; top: 91.9vh; width: 6.3vh; height: 5.7vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
		<Button label="" method="presetCommand" refName="FenixSim.A320.MCDU.FNX320 CDU1 KEY CLEAR Press" id="mcdu-clr"   style="left: 51.5vh; top: 91.9vh; width: 6.3vh; height: 5.7vh" class="mcdu-btn" :eventHandlers="eventHandlers" />
	</div>
-->
</div>
</template>

<script>
var components = {};
import Button from '../../../../instruments/generic/Button.vue'; components.Button = Button;
import Switch from '../../../../instruments/generic/Switch.vue'; components.Switch = Switch;
import KnobUpDown from '../../../../instruments/generic/KnobUpDown.vue'; components.KnobUpDown = KnobUpDown;
import Indicator from '../../../../instruments/generic/Indicator.vue'; components.Indicator = Indicator;
import Annunciator from '../../../../instruments/generic/Annunciator.vue'; components.Annunciator = Annunciator;
import SectionDivider from '../../../../instruments/layout/SectionDivider.vue'; components.SectionDivider = SectionDivider;

export default {
	components,
	props: ['dataStore', 'eventHandlers', 'panelInfo'],
	setup(props) {
		function flapsHtml(value) {
			if (value == 0) {
				return '<span class="c-darkgray">UP</span>';
			} else if (value < 7500) {
				return '1+F';
			} else if (value < 11300) {
				return '2';
			} else if (value < 13500) {
				return '3';
			} else {
				return 'FULL';
			}
		}
		console.log(props.panelInfo);

		props.eventHandlers.onPanelLoad({
			watchValues: {
				offset: {
					antiIceWing: 'brightOnValue',
					antiIceEng1: 'brightOnValue',
					antiIceEng2: 'brightOnValue',
					fuelPumpEng1: 'brightOnValue',
					gearHandle: 'gearHandle',
					flapsPositionLeft: flapsHtml,
					lightsStrobe: 'brightOnValue',
					lightsBeacon: 'brightOnValue',
					lightsNav: 'brightOnValue',
					lightsTaxi: 'brightOnValue',
					// lightsLogo: 'brightOnValue',  //merged with nav light in A320
					lightsWing: 'brightOnValue',
					lightsInstruments: 'brightOnValue',
					lightsCabin: 'brightOnValue',
					parkingBrake: 'brightOnValue',
					spoilersArm: 'spoilerPosition',
				},

				/*
				How to find Fenix LVars: https://kb.fenixsim.com/example-of-how-to-use-lvars
				*/
				lVar: {
					S_OH_EXT_LT_RWY_TURNOFF: 'brightOnValue',
					S_OH_EXT_LT_LANDING_L: 'brightOnValue',
					S_OH_EXT_LT_LANDING_R: 'brightOnValue',
					S_OH_SIGNS: 'brightOnValue',
					S_OH_SIGNS_SMOKING: 'brightOnValue',
					I_OH_ELEC_APU_MASTER_L: 'brightOnValue',  // "ON"
					I_OH_ELEC_APU_START_U: value => (value == 1 ? 'AVAIL' : ''),  // "AVAIL"
					I_OH_ELEC_APU_START_L: value => (value == 1 ? 'ON' : ''),  // "ON"
				},
			},
		});
	},
}
</script>

<style scoped>
.panel-container {
	grid-template-areas: 'all-instruments efb mcdu';
}
.all-instruments {
	grid-area: all-instruments;
}
.efb {
	grid-area: efb;
}
.mcdu {
	grid-area: mcdu;

	position: relative;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: left top;
}

.the-overhead {
	grid-template-areas: 'overhead-center-left overhead-center-middle overhead-center-right';
}
.overhead-center-left {
	grid-area: overhead-center-left;
}
.overhead-center-middle {
	grid-area: overhead-center-middle;
}
.overhead-center-right {
	grid-area: overhead-center-right;
}

.the-pedestal {
	grid-template-areas:
		'pedestal-left pedestal-middle pedestal-right'
		'pedestal-lower pedestal-lower pedestal-lower';
}
.pedestal-left {
	grid-area: pedestal-left;
}
.pedestal-middle {
	grid-area: pedestal-middle;
}
.pedestal-right {
	grid-area: pedestal-right;
}
.pedestal-lower {
	grid-area: pedestal-lower;
}

.apu-avail {
	/* Workaround for putting it over the APU START button */
	position: relative;
	top: -31px;
}

.section.extlt {
	margin-top: 35px;
}
.spacer-extlt {
	height: 15px;
}
.section.apu {
	margin-top: 75px;
}
.section.signs,
.the-display-wall,
.the-pedestal {
	margin-top: 15px;
}

.mcdu-btn {
	position: absolute;
	border-radius: 3px;
	/*background-color: rgba(34, 255, 255, 0.2);*/
}
</style>
<style>
.mcdu .bordered {
	border: 0;
}
</style>
