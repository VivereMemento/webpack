import './index.scss';
import { updateOrderData } from './controller';

window.addEventListener('load', () => {
	const rootElement = document.querySelector('#demo-order-list');
	updateOrderData(rootElement);
});


