import { StackNavigationState, ParamListBase } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationEventMap,
} from "@react-navigation/stack";

import { withLayoutContext } from "expo-router";

const { Navigator } = createStackNavigator();

export const CustomStack = withLayoutContext<
  StackNavigationOptions,
  typeof Navigator,
  StackNavigationState<ParamListBase>,
  StackNavigationEventMap
>(Navigator);
