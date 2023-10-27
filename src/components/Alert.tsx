import { ReactNode } from "react";

interface Props {
  //  ReactNode means that the component can take an html element as an argument
  children: ReactNode;
}
const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
