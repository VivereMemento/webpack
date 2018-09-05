import Item from '../item';

const TABLE_HEAD = `
	<thead>
		<tr>
			<th class="mdl-data-table__cell--non-numeric">Name</th>
			<th class="mdl-data-table__cell--non-numeric">Params</th>
			<th>Quantity</th>
			<th>Unit price</th>
			<th>Total price</th>
		</tr>
	</thead>`;

export default order => `
	<table class="demo-content--full demo-content--separated mdl-data-table mdl-shadow--2dp mdl-color--white">
		${TABLE_HEAD}
		<tbody>${order.items.map(Item).join('')}</tbody>
	<table>`;