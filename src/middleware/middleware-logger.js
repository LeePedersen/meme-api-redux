const middlewareLogger = store => next => async action => {
  console.log("Original State: ", store.getState());
  console.log("Current Action: ", action);
  let newAction = await action;
  next(newAction);
  console.log("New Updated State: ", store.getState());
};

export default middlewareLogger;
