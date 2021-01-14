import { State } from '../types/storeTypes';
class Favorites {
	tableElements: NodeListOf<Element>;
	constructor() {
		this.tableElements = document.querySelectorAll('.table__element')!;
	}

	printFavorites = ({ favorites }: State) => {
		favorites.map((fav, i) => {
			const favImg = `<img class='table__pokemon' src=${fav.icon} />`;
			this.tableElements[i].innerHTML = '';
			this.tableElements[i].innerHTML = favImg;
		});
	};
}

export default Favorites;
