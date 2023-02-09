import React from "react";


const Loading = ({ isloading, error, children }) => {
  const elementType = children?.type?.displayName;
  const renderHandler = () => {
    if (elementType === "Button") {
      const cloneButton = React.cloneElement(
        children,
        { disabled: true },
        "Loading..."
      );
      return (
        <>
          {isloading ? (
            cloneButton
          ) : error ? (
            <>
              {children}
              <p>
                <br />
                {error}
              </p>
            </>
          ) : (
            children
          )}
        </>
      );
    }
    return (
      <>
        {isloading ? (
          <p>loading please wait...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          children
        )}
      </>
    );
  };

  return renderHandler();
};

export default Loading;