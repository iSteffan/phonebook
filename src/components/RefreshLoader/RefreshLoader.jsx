import { CirclesWithBar } from 'react-loader-spinner';

export const PageLoader = () => {
  return (
    <CirclesWithBar
      height="200"
      width="200"
      color="#4fa94d"
      wrapperStyle={{
        marginTop: '200px',
        marginRight: 'auto',
        marginLeft: 'auto',
        display: 'block',
        width: '200px',
      }}
      wrapperClass=""
      visible={true}
      outerCircleColor="blue"
      innerCircleColor="blue"
      barColor="yellow"
      ariaLabel="circles-with-bar-loading"
    />
  );
};
