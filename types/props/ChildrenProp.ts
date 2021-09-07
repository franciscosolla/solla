import { ReactNode } from "react";

export default interface ChildrenProp<Children extends ReactNode = ReactNode> {
  children: Children
}