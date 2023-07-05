<script>
	import moment from 'moment';
	export let data;

	export let month = moment().format('MM');
	export let year = moment().format('YYYY');

	if ( data.summaries.length > 1) {
		month = moment(data.summaries[0].name, 'YY.MM.DD').format('MM');
		year = moment(data.summaries[0].name, 'YY.MM.DD').format('YYYY');
	}

</script>

<h2>Month report</h2>

<form>
	<div class="grid">
		<label
			>Year
			<input
				type="text"
				name="year"
				value={ year }
				required
			/>
		</label>
		<label
			>Month
			<input
				type="text"
				name="month"
				value={ month }
				required
			/>
		</label>
	</div>
</form>

{#if data.summaries.length > 1}
<table>
	<thead>
		<tr>
			<th>Date</th>
			<th>Worked</th>
			<th>Due</th>
		</tr>
	</thead>
	<tbody>
		{#each data.summaries as { day, name, hours, quota }}
			<tr>
				<td>{moment(name, 'YY.MM.DD').format('ll')}</td>
				<td>{hours.toFixed(2)}</td>
				<td>{name}</td>
			</tr>
		{/each}
	</tbody>
</table>
{/if}
