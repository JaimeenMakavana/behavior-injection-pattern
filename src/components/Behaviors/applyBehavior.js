export const applyBehavior = (Component, behaviors) => {
  return function EnhancedComponent(props) {
    // reduce method: props =>{canBanUser , canEditChannel}
    // output : {canBanUser: false, canEditChannel: true}

    const injectedProps = behaviors.reduce((acc, behavior) => {
      return { ...acc, ...behavior(props) };
    }, {});

    //   observe the console
    console.log("injectedProps::: ", injectedProps);
    return <Component {...props} {...injectedProps} />;
  };
};
