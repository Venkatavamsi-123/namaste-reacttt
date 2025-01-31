import { useRouteError } from "react-router-dom";
const Error = () => {
    const error = useRouteError();
    
    return (
      <div className="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="error-message">
          <i>{error.statusText || error.message}</i>
        </p>
        <a href="/" className="back-home">Go Back to Home</a>
      </div>
    );
  };
  
  export default Error;