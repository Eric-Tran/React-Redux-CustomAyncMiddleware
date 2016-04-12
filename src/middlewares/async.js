export default function({ dispatch }) {
	return next => action => {
		//if action does not have a payload or payload does not have a .then property,
		//we don't care about it, send it on
		if ( !action.payload || !action.payload.then) {
			return next(action);
		}
		// console.log("We have a promise", action);
		// Step 1. Make sure the action's promise resolves
		action.payload
			.then(function(response) {
				//create a new action with the old type, but replace the response data.
				//...action means whatever the original action is.
				const newAction = { ...action, payload: response };
				//dispatch runs the action through every middleware again. Use dispatch since other middlewares might need new action.
				dispatch(newAction);
			});

	};
} 