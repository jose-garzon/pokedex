import { State } from '../types/storeTypes';

class StatsScreen {
	statsScreen: HTMLElement;
	weight: HTMLElement;
	experience: HTMLElement;
	constructor() {
		this.statsScreen = document.getElementById('statsScreen')!;
		this.weight = document.getElementById('weight')!;
		this.experience = document.getElementById('experience')!;
	}

	printStats = ({ currentPokemon: { stats, experience, weight } }: State) => {
		this.statsScreen.innerHTML = '';
		stats.map(({ base_stat, stat: { name } }) => {
			const statItem = `
      <p class='stats-screen__item'>${name}: <span>${base_stat}</span></p>
      `;
			this.statsScreen.innerHTML = this.statsScreen.innerHTML + statItem;
		});
		this.weight.innerHTML = `<p>Weight: <span>${weight}</span></p>`;
		this.experience.innerHTML = `<p>Exp: <span>${experience}</span></p>`;
	};
}

export default StatsScreen;
