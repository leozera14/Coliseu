import { Oval } from "react-loader-spinner";

export const LoadingSpinner = () => {
  return (
    <Oval
      color="#FFF"
      secondaryColor="#fff"
      ariaLabel="loading-indicator"
      strokeWidth={1}
    />
  );
};
