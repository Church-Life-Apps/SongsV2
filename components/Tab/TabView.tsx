import { ViewProps } from "react-native";

export interface TabViewProps extends ViewProps {
  active: boolean;
}

export const TabView = ({ active, children, ...rest }: TabViewProps) => {
  if (!active) return null;
  return children;
};
