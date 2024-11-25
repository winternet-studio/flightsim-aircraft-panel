<template>
<div :class="'panel-container '+ panelInfo.path.join(' ')">

	<table class="table">
	<tr>
		<th>offset</th>
		<th>lVar</th>
		<th>hVar</th>
		<th>simControl</th>
		<th>presetCommand</th>
		<th>calcCode</th>
	</tr>
	<tr v-for="n in inputCopies" :key="n">
		<td v-if="n == 1" :rowspan="declarationRowSpan">
			<textarea class="form-control" v-model="offsetConfig" :placeholder="'gearHandle\nparkingBrake\naltitude,0570,int,8\ngenEng1,3B78,uint,4'" spellcheck="false" style="min-height: 100px; white-space: nowrap; overflow-x: auto;"></textarea>
			<div class="text-end bs-no-padding">
				<button class="btn btn-primary text-end" @click="declareAndMonitor(event, 'offset')">Declare and Monitor</button>
			</div>
			<pre class="json-dump">{{ dataToYaml(dataStore.state.offset, {encloseStrings: true}) }}</pre>
		</td>
		<td v-if="n > declarationRowSpan">
			<div class="d-flex justify-content-between">
				<input type="text" class="form-control" v-model="offset[n]" placeholder="Offset Name">
				<input type="text" class="form-control" v-model="offsetParam[n]" placeholder="Parameter" style="width: 77px">
				<button class="btn btn-primary" @click="run(event, 'offset', n)">Run</button>
			</div>
			<div class="result-msg">{{ offsetMsg[n] ?? '&nbsp;' }}</div>
		</td>

		<td v-if="n == 1" :rowspan="declarationRowSpan">
			<textarea class="form-control" v-model="lVarConfig" :placeholder="'B748_Engine_AntiIce_Switch_State:1\nXMLVAR_ATC_AIRSPACE_MODE_ABV_BLW'" spellcheck="false" style="min-height: 100px; white-space: nowrap; overflow-x: auto;"></textarea>
			<div class="text-end bs-no-padding">
				<button class="btn btn-primary text-end" @click="declareAndMonitor(event, 'lVar')">Declare and Monitor</button>
			</div>
			<pre class="json-dump">{{ dataToYaml(dataStore.state.lVar, {encloseStrings: true}) }}</pre>
		</td>
		<td v-if="n > declarationRowSpan">
			<div class="d-flex justify-content-between">
				<input type="text" class="form-control" v-model="lVar[n]" placeholder="lVar Name">
				<input type="text" class="form-control" v-model="lVarParam[n]" placeholder="Parameter" style="width: 77px">
				<button class="btn btn-primary" @click="run(event, 'lVar', n)">Run</button>
			</div>
			<div class="result-msg">{{ lVarMsg[n] ?? '&nbsp;' }}</div>
		</td>

		<td>
			<div class="d-flex justify-content-between">
				<input type="text" class="form-control" v-model="hVar[n]" placeholder="hVar Name">
				<button class="btn btn-primary" @click="run(event, 'hVar', n)">Run</button>
			</div>
			<div class="result-msg">{{ hVarMsg[n] ?? '&nbsp;' }}</div>
		</td>

		<td>
			<div class="d-flex justify-content-between">
				<input type="text" class="form-control" v-model="simControl[n]" placeholder="SimControl Name/Number">
				<input type="text" class="form-control" v-model="simControlParam[n]" placeholder="Parameter" style="width: 77px">
				<button class="btn btn-primary" @click="run(event, 'simControl', n)">Run</button>
			</div>
			<div class="result-msg">{{ simControlMsg[n] ?? '&nbsp;' }}</div>
		</td>

		<td>
			<div class="d-flex justify-content-between">
				<input type="text" class="form-control" v-model="presetCommand[n]" placeholder="Name (partial) of MobiFlight HubHop Preset">
				<button class="btn btn-primary" @click="run(event, 'presetCommand', n)">Run</button>
			</div>
			<div class="result-msg">{{ presetCommandMsg[n] ?? '&nbsp;' }}</div>
		</td>

		<td>
			<div class="d-flex justify-content-between">
				<textarea class="form-control" v-model="calcCode[n]" placeholder="Calculator Code"></textarea>
				<button class="btn btn-primary" @click="run(event, 'calcCode', n)">Run</button>
			</div>
			<div class="result-msg">{{ calcCodeMsg[n] ?? '&nbsp;' }}</div>
		</td>
	</tr>
	</table>

</div>
</template>

<script>
import MobiFlightHubHopPresets from '../../databases/MobiFlightHubHopPresets.js';

import { ref, inject } from 'vue';

var components = {};

function setNothingToRun(theMsg, n) {
	theMsg.value[n] = 'Nothing to run.';
	setTimeout(() => {
		if (theMsg.value[n] == 'Nothing to run.') {
			delete theMsg.value[n];
		}
	}, 3000);
}

function saveInBrowser(type, n, value1, value2) {
	if (n == 'config') {
		localStorage.setItem('testPanel-'+ type +'Config', value1);
	} else {
		localStorage.setItem('testPanel-'+ type +'-'+ n, value1);
		if (typeof value2 != 'undefined') {
			localStorage.setItem('testPanel-'+ type +'-'+ n +'P', value2);
		} else {
			localStorage.removeItem('testPanel-'+ type +'-'+ n +'P');
		}
	}
}

export default {
	components,
	props: ['dataStore', 'eventHandlers', 'panelInfo'],
	setup(props) {
		props.eventHandlers.onPanelLoad({  //currently this object must be defined even though it's empty...
			watchValues: {
				offset: {},
				lVar: {},
			},
		});

		// const appData = inject('appData');

		var inputCopies = 7;
		var declarationRowSpan = 3;

		const offsetConfig = ref('');
		const offsetOutputValues = ref('');
		const lVarConfig = ref('');
		const lVarOutputValues = ref('');
		const offset = ref([]);
		const offsetParam = ref([]);
		const offsetMsg = ref([]);
		const lVar = ref([]);
		const lVarParam = ref([]);
		const lVarMsg = ref([]);
		const hVar = ref([]);
		const hVarMsg = ref([]);
		const simControl = ref([]);
		const simControlMsg = ref([]);
		const simControlParam = ref([]);
		const presetCommand = ref([]);
		const presetCommandMsg = ref([]);
		const calcCode = ref([]);
		const calcCodeMsg = ref([]);

		// Load saved commands from last page load
		if (localStorage.getItem('testPanel-offsetConfig') !== null) offsetConfig.value = localStorage.getItem('testPanel-offsetConfig');
		if (localStorage.getItem('testPanel-lVarConfig') !== null)   lVarConfig.value =   localStorage.getItem('testPanel-lVarConfig');
		for (var i = 1; i <= inputCopies; i++) {
			if (localStorage.getItem('testPanel-offset-'+ i)          !== null) offset.value[i] =          localStorage.getItem('testPanel-offset-'+ i);
			if (localStorage.getItem('testPanel-offset-'+ i +'P')     !== null) offsetParam.value[i] =     localStorage.getItem('testPanel-offset-'+ i +'P');
			if (localStorage.getItem('testPanel-lVar-'+ i)            !== null) lVar.value[i] =            localStorage.getItem('testPanel-lVar-'+ i);
			if (localStorage.getItem('testPanel-lVar-'+ i +'P')       !== null) lVarParam.value[i] =       localStorage.getItem('testPanel-lVar-'+ i +'P');
			if (localStorage.getItem('testPanel-hVar-'+ i)            !== null) hVar.value[i] =            localStorage.getItem('testPanel-hVar-'+ i);
			if (localStorage.getItem('testPanel-simControl-'+ i)      !== null) simControl.value[i] =      localStorage.getItem('testPanel-simControl-'+ i);
			if (localStorage.getItem('testPanel-simControl-'+ i +'P') !== null) simControlParam.value[i] = localStorage.getItem('testPanel-simControl-'+ i +'P');
			if (localStorage.getItem('testPanel-presetCommand-'+ i)   !== null) presetCommand.value[i] =   localStorage.getItem('testPanel-presetCommand-'+ i);
			if (localStorage.getItem('testPanel-calcCode-'+ i)        !== null) calcCode.value[i] =        localStorage.getItem('testPanel-calcCode-'+ i);
		}

		const declareAndMonitor = (event, type) => {
			var formattedData = [];
			if (type == 'offset') {
				var temp = offsetConfig.value.split('\n')
					.map(line => line.trim())
					.filter(line => line !== '');
				var namesOnly = {};
				temp.forEach(item => {
					if (item.indexOf(',') > -1) {
						// Comma-sep. field values
						var fields = item.split(',');
						fields.map(field => field.trim());
						if (!fields[1] || !fields[2] || !fields[3]) {
							alert('Line must be comma-sep. values of name, address, type, and size.'); return;
						}
						var name = fields[0];
						var hex  = parseInt(fields[1], 16);
						var dataType = fields[2];
						var size = parseInt(fields[3], 10);
						formattedData.push({name: name, address: hex, type: dataType, size: size});
					} else {
						// Line only has known name of an existing offset, details will be looked up (and name verified at the same time)
						formattedData.push(item);
					}
				});
				props.eventHandlers.restartOffsetMonitoring(formattedData, true);
				saveInBrowser(type, 'config', offsetConfig.value);
			} else if (type == 'lVar') {
				formattedData = lVarConfig.value.split('\n')
					.map(line => line.trim())
					.filter(line => line !== '')
					.map(line => ({ name: line }));
				props.eventHandlers.restartLvarMonitoring(formattedData, true);
				saveInBrowser(type, 'config', lVarConfig.value);
			}
		};

		const run = (event, type, n) => {
			var code;
			if (type == 'offset') {
				code = offset.value[n];
				var param = offsetParam.value[n];
				if (typeof code != 'undefined' && code.length > 0) {
					if (typeof param != 'undefined' && param.length > 0) {
						props.eventHandlers.singleClick(event, type, code, null, param);
						saveInBrowser(type, n, code, param);
					} else {
						props.eventHandlers.singleClick(event, type, code);
						saveInBrowser(type, n, code);
					}
				} else {
					setNothingToRun(offsetMsg, n);
				}

			} else if (type == 'lVar') {
				code = lVar.value[n];
				var param = lVarParam.value[n];
				if (typeof code != 'undefined' && code.length > 0) {
					if (typeof param != 'undefined' && param.length > 0) {
						props.eventHandlers.singleClick(event, type, code, null, param);
						saveInBrowser(type, n, code, param);
					} else {
						props.eventHandlers.singleClick(event, type, code);
						saveInBrowser(type, n, code);
					}
				} else {
					setNothingToRun(lVarMsg, n);
				}

			} else if (type == 'hVar') {
				code = hVar.value[n];
				if (typeof code != 'undefined' && code.length > 0) {
					props.eventHandlers.singleClick(event, type, code);
					saveInBrowser(type, n, code);
				} else {
					setNothingToRun(hVarMsg, n);
				}

			} else if (type == 'simControl') {
				code = simControl.value[n];
				var param = simControlParam.value[n];
				if (typeof code != 'undefined' && code.length > 0) {
					if (typeof param != 'undefined' && param.length > 0) {
						props.eventHandlers.singleClick(event, type, code, null, param);
						saveInBrowser(type, n, code, param);
					} else {
						props.eventHandlers.singleClick(event, type, code);
						saveInBrowser(type, n, code);
					}
				} else {
					setNothingToRun(simControlMsg, n);
				}

			} else if (type == 'presetCommand') {
				code = presetCommand.value[n];

				// If no exact match, try find a partial match
				var effCode;
				delete presetCommandMsg.value[n];
				if (!MobiFlightHubHopPresets[code]) {
					Object.keys(MobiFlightHubHopPresets).some(key => {
						if (key.indexOf(code) > -1) {
							effCode = key;
							presetCommandMsg.value[n] = effCode;
							return true;
						}
					});
				} else {
					effCode = code;
				}

				if (typeof effCode != 'undefined' && effCode.length > 0) {
					props.eventHandlers.singleClick(event, type, effCode);
					saveInBrowser(type, n, code);
				} else {
					setNothingToRun(presetCommandMsg, n);
				}

			} else if (type == 'calcCode') {
				code = calcCode.value[n];
				if (typeof code != 'undefined' && code.length > 0) {
					props.eventHandlers.singleClick(event, type, code);
					saveInBrowser(type, n, code);
				} else {
					setNothingToRun(calcCodeMsg, n);
				}
			}
		};

		const formatForDisplay = (data) => {
			if (!data) return JSON.stringify(data);
			const lines = JSON.stringify(data, null, 2).split("\n");

			// Filter out lines that contain only `{`, `}`, or `},`
			var filteredLines = lines.filter(line => {
				const trimmed = line.trim();
				return !(trimmed === '{' || trimmed === '}' || trimmed === '},');
			});
			filteredLines = filteredLines.map(line => line.replace(/^ {2}/, '') );  //remove 2 first spaces in indent

			return filteredLines.join("\n");
		};

		const dataToYaml = (variable, options = {}, level = 0) => {    //TODO: replace with jensen-js-essentials npm package that has Core.toYaml()
			const indent = options.indent ?? 2;  // number of spaces for YAML indentation
			const spaces = ' '.repeat(indent).repeat(level);
			if (typeof variable === 'object' && variable !== null) {
				if (Array.isArray(variable)) {
					// Handle arrays
					return variable
						.map(item => `${spaces}- ${dataToYaml(item, options, level + 1).trim()}`)
						.join('\n');
				} else {
					// Handle objects
					return Object.keys(variable)
						.map(key => `${spaces}${key}:${typeof variable[key] === 'object' ? `\n${dataToYaml(variable[key], options, level + 1)}` : ` ${dataToYaml(variable[key], options, 0)}`}`)
						.join('\n');
				}
			} else {
				// Handle primitive values
				if (typeof variable == 'string') {
					if (!options.encloseStrings || variable.indexOf('"') > -1) {
						return variable;  //will be confused if the string itself also has "
					} else {
						return '"'+ variable +'"';  //makes strings be enclosed with "" and quotes escaped within the string
					}
				} else {
					return JSON.stringify(variable);  //makes strings be enclosed with "" and quotes escaped within the string
				}
				// return variable === null ? 'null' : variable.toString();  //throws strange error "TypeError: Cannot read properties of undefined (reading 'toString')"
			}
		};

		return {
			inputCopies,
			declarationRowSpan,

			offsetConfig,
			offsetOutputValues,
			lVarConfig,
			lVarOutputValues,

			offset,
			offsetParam,
			offsetMsg,
			lVar,
			lVarParam,
			lVarMsg,
			hVar,
			hVarMsg,
			simControl,
			simControlParam,
			simControlMsg,
			presetCommand,
			presetCommandMsg,
			presetCommandMsg,
			calcCode,
			calcCodeMsg,

			declareAndMonitor,
			run,
			formatForDisplay,
			dataToYaml,
		};
	},
}
</script>

<style>
.bs-no-padding {
	padding: 0 !important;
}
.form-control {
	font-size: 0.7rem !important;
}

.panel-container {
	padding: 20px;
}

.table input,
.table textarea {
	background-color: #e7e7e7;
}

th {
	font-size: 3em;
	color: #d4d4d4;
	text-align: center;
}
td {
	padding: 8px;
	vertical-align: top;
}

pre.json-dump {
	color: white;
	overflow-x: auto;
}

.result-msg {
	color: #c4c4c4;
	padding: 0 !important;
}
</style>
