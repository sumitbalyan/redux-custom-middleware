const loggerMiddleWare = store => next => action => {
    console.log("logger action type:: ", action);
    console.log("logger state: ", store.getState());
    next(action);
  }
  
  const counterMiddleware = store => next => action => {
    if(action.type === 'INCREMENT') {
      alert(`After Increment button clicked, state is ${JSON.stringify(store.getState())} \nNew value will be added.`);
    }
    next(action);
  }

  export {
    loggerMiddleWare,
    counterMiddleware
  }