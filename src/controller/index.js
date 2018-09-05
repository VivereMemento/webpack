import { getOrders } from '../modules/order';
import OrderList from '../components/OrderList';

export async  function updateOrderData(rootEelement) {
	// 1. fetch orders list
	const orderData = await getOrders();
	// 2. generate html
	const html = OrderList(orderData);
	// 3. assign html
	rootEelement.innerHTML = html;
}