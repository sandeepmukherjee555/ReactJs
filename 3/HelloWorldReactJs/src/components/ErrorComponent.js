import { useRouteError } from 'react-router-dom';

const ErrrorComponent = () => {
  const errorData = useRouteError();
  return (
    <div>
      <h1>Opps we found an error</h1>
      <h1>Something went wrong</h1>
      <h3>Details: {errorData.statusText || errorData.message}</h3>
    </div>
  );
};
export default ErrrorComponent;
