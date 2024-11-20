<template>
<div :class="'panel-container '+ panelInfo.path.join(' ')">

	<table class="table">
	<tr>
		<!--
		<th>offset</th>
		<th>lVar</th>
		-->
		<th>hVar</th>
		<th>simControl</th>
		<th>presetCommand</th>
		<th>calcCode</th>
	</tr>
	<tr v-for="n in inputCopies" :key="n">
		<!--
		<td>
			<div class="d-flex justify-content-between">
				<input type="text" class="form-control" v-model="offset[n]">
				<button class="btn btn-primary" @click="run(event, 'offset', n)">Run</button>
			</div>
			<div class="result-msg">{{ offsetMsg[n] ?? '&nbsp;' }}</div>
		</td>
		<td>
			<div class="d-flex justify-content-between">
				<input type="text" class="form-control" v-model="lVar[n]">
				<button class="btn btn-primary" @click="run(event, 'lVar', n)">Run</button>
			</div>
			<div class="result-msg">{{ lVarMsg[n] ?? '&nbsp;' }}</div>
		</td>
		-->
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

import { ref } from 'vue';

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
	localStorage.setItem('testPanel-'+ type +'-'+ n, value1);
	if (typeof value2 != 'undefined') {
		localStorage.setItem('testPanel-'+ type +'-'+ n +'B', value2);
	} else {
		localStorage.removeItem('testPanel-'+ type +'-'+ n +'B');
	}
}

export default {
	components,
	props: ['dataStore', 'eventHandlers', 'panelInfo'],
	setup(props) {
		props.eventHandlers.onPanelLoad({});  //currently this must be defined even though it's empty...

		var inputCopies = 7;

		const offset = ref([]);
		const offsetMsg = ref([]);
		const lVar = ref([]);
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
		for (var i = 1; i <= inputCopies; i++) {
			var val = localStorage.getItem('testPanel-hVar-'+ i);
			if (val !== null) hVar.value[i] = val;

			var val = localStorage.getItem('testPanel-simControl-'+ i);
			if (val !== null) simControl.value[i] = val;
			var val2 = localStorage.getItem('testPanel-simControl-'+ i +'B');
			if (val2 !== null) simControlParam.value[i] = val2;

			var val = localStorage.getItem('testPanel-presetCommand-'+ i);
			if (val !== null) presetCommand.value[i] = val;

			var val = localStorage.getItem('testPanel-calcCode-'+ i);
			if (val !== null) calcCode.value[i] = val;
		}

		const run = (event, type, n) => {
			var code;
			// NOT YET IMPLEMENTED (because these first have to be declared)
			// if (type == 'offset') {
			// 	props.eventHandlers.singleClick(event, type, );
			// } else
			// if (type == 'lVar') {

			// } else
			if (type == 'hVar') {
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

		return {
			inputCopies,

			offset,
			offsetMsg,
			lVar,
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

			run,
		};
	},
}
</script>

<style>
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
	padding: 20px;
	vertical-align: top;
}

.result-msg {
	color: #c4c4c4;
	padding: 0 !important;
}
</style>
