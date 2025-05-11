let disabled = true;

const
	{ clear } = console,
	blockDevtool = () => {
		if(disabled) {
			clear();
			debugger;
		}
		requestAnimationFrame(blockDevtool);
	}
;

blockDevtool();

export const
	enableDev = () => disabled = false,
	disableDev = () => disabled = true
;