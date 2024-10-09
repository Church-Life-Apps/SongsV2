import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";
import { TabProps } from "./Tab";

export interface TabBarProps extends ViewProps {
  value?: number;
  onChange?: (value: number) => void;
}

export const TabBar = ({ children, value = 0, onChange = () => {}, style, ...rest }: TabBarProps) => {
  const validChildren = React.useMemo(() => React.Children.toArray(children), [children]);

  return (
    <View {...rest} style={[styles.viewStyle, style]}>
      {React.createElement(React.Fragment, {
        children: (
          <>
            {validChildren.map((child, index) => {
              console.log("make ", child);
              return React.cloneElement(child as React.ReactElement<TabProps>, {
                onPress: () => onChange(index),
                active: index === value,
              });
            })}
          </>
        ),
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: "row",
    position: "relative",
  },
});
