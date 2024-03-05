import React from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { useTheme, useThemedStyles } from "@src/hooks";
import translate from "@helpers/localization";
import { styles } from "./style";
import type { GeneralActivityIndicatorProps } from "./type";

function GeneralActivityIndicator({ text }: GeneralActivityIndicatorProps) {
  const theme = useTheme();
  const themedStyles = useThemedStyles<typeof styles>(styles);

  // TODO Modal
  return (
    <View style={themedStyles.activityIndicator}>
      <ActivityIndicator animating size="large" color={theme.primary} />
      <Text style={themedStyles.activityIndicatorText}>
        {text || translate("generalActivityIndicatorText")}
      </Text>
    </View>
  );
}

export default GeneralActivityIndicator;
