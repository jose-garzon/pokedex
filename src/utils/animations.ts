export const rotateAnimation = (element: HTMLElement) => {
	return element.animate(
		[{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }],
		{
			duration: 1000,
			easing: 'linear',
			fill: 'forwards',
			iterations: Infinity,
		}
	);
};
