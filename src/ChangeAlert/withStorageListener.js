import React from "react";

function withStorageListener(WrappedComponent){
  return function WrappedComponentWithStorageListener(props) {

    const [storageChange, setStorageChange] = React.useState(false);

    window.addEventListener('storage', (change) => {
      if(change.key === 'simpleTodosList_V1') {
        setStorageChange(true);
      }
    });

    const toggleShow = () => {
      props.sincronize();
      setStorageChange(false);
    }

    return (
      <WrappedComponent 
        show={storageChange}
        toggleShow={toggleShow}
      />
    );
  }
}


export { withStorageListener }