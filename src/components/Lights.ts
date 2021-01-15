import { State } from '../types/storeTypes';

class Lights {
	favLight: HTMLElement;
	constructor() {
		this.favLight = document.getElementById('fav-light')!;
	}

	successMark = ({ favoriteAdded }: State) => {
		if (favoriteAdded) {
			this.favLight.classList.add('succes-mark');
			setTimeout(() => {
				this.favLight.classList.remove('succes-mark');
			}, 1000);
		}
	};
}

export default Lights;
