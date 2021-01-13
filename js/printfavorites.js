const tableElements = document.querySelectorAll('.table__element');

export const printFavorites = (store) => {
	const { getState } = store;
	getState()
		.favorites.slice(0, 10)
		.map((fav, i) => {
			const favImg = document.createElement('img');
			favImg.setAttribute('src', fav.icon);
			favImg.classList.add('table__pokemon');
			tableElements[i].innerHTML = '';
			tableElements[i].appendChild(favImg);
		});
};
