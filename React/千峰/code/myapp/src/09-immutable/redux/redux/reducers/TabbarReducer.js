import { fromJS } from 'immutable';

const TabbarReducer = (
	prevState = fromJS({
		show: true,
		// ...
	}),
	action
) => {
	console.log(action);
	let newState = { ...prevState };
	// eslint-disable-next-line default-case
	switch (action.type) {
		case 'leeHide-tabbar':
			// newState.show = false;
			return prevState.set('show', false);
		case 'leeShow-tabbar':
			// newState.show = true;
			return prevState.set('show', true);
		default:
			return prevState;
	}
};
export default TabbarReducer;
