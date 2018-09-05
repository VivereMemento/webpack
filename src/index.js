import './index.scss';
import { updateOrderData } from './controller';
import mainTemplate from './main.ejs';

window.addEventListener('load', () => {
	const rootElement = document.querySelector('#demo-order-list');
	updateOrderData(rootElement);
});

const html = data => {
	const test = document.querySelector('#test');
	test.innerHTML = mainTemplate(data);
}
html({name: 'Sasha'});

