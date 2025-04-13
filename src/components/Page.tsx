import { ReactElement } from "react";

interface PageProps {
  children: ReactElement;
}

export const Page = (props: PageProps) => {
  return <div>{props.children}</div>;
};
