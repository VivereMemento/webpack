import { getOrders } from '../modules/order';
// import OrderList from '../components/OrderList';
import OrderList from '../template.ejs';

export async  function updateOrderData(rootEelement) {
	// 1. fetch orders list
	const orderData = await getOrders();
	// 2. generate html
	// const html = OrderList(orderData);
	const html = OrderList({orders: orderData});
	// 3. assign html
	rootEelement.innerHTML = html;
}