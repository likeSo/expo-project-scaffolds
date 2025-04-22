import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import {
  createBottomSheetNavigator,
  BottomSheetNavigationOptions,
  BottomSheetNavigationState,
  BottomSheetNavigationProp,
  BottomSheetNavigationEventMap,
} from "@th3rdwave/react-navigation-bottom-sheet";
import { Tabs } from "expo-router";

import { withLayoutContext } from "expo-router";

const { Navigator } = createBottomSheetNavigator();

export const BottomSheet = withLayoutContext<
  BottomSheetNavigationOptions,
  typeof Navigator,
  BottomSheetNavigationState<ParamListBase>,
  BottomSheetNavigationEventMap
>(Navigator);
