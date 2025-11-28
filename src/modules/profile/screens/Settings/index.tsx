/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  Switch,
} from "react-native";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@src/store";
import { Ionicons } from "@expo/vector-icons";
import { useThemedStyles, useTheme } from "@src/hooks";
import translate from "@helpers/localization";
import { Logout, SetColorShceme } from "@modules/app/redux/appSlice";
import { showToast } from "@helpers/toast/showToast";
import { styles as createStyles } from "./style";

function Settings() {
  const dispatch = useDispatch();
  const styles = useThemedStyles(createStyles);
  const theme = useTheme();
  const userColorScheme = useAppSelector((s) => s?.AppReducer?.userColorScheme);
  const isDarkMode = userColorScheme === "dark";

  const handleLogout = () => {
    Alert.alert(
      translate("profile.logoutConfirm"),
      translate("profile.logoutMessage"),
      [
        {
          text: translate("cancel"),
          style: "cancel",
        },
        {
          text: translate("profile.logout"),
          style: "destructive",
          onPress: () => {
            dispatch(Logout());
            showToast(translate("profile.logoutSuccess"));
          },
        },
      ]
    );
  };

  const toggleDarkMode = () => {
    dispatch(SetColorShceme(isDarkMode ? "light" : "dark"));
  };

  const settingsItems = [
    {
      icon: "moon-outline",
      title: translate("settings.darkMode"),
      subtitle: translate("settings.darkModeDesc"),
      rightElement: (
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          trackColor={{ false: "#767577", true: theme.primary }}
          thumbColor={isDarkMode ? "#f4f3f4" : "#f4f3f4"}
        />
      ),
    },
    {
      icon: "language-outline",
      title: translate("settings.language"),
      subtitle: translate("settings.languageDesc"),
      onPress: () => showToast(translate("settings.language")),
    },
    {
      icon: "notifications-outline",
      title: translate("settings.notifications"),
      subtitle: translate("settings.notificationsDesc"),
      onPress: () => showToast(translate("settings.notifications")),
    },
    {
      icon: "shield-checkmark-outline",
      title: translate("settings.privacy"),
      subtitle: translate("settings.privacyDesc"),
      onPress: () => showToast(translate("settings.privacy")),
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {translate("settings.general")}
          </Text>
          {settingsItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={item.onPress}
              disabled={!!item.rightElement}
            >
              <View style={styles.menuIconContainer}>
                <Ionicons
                  name={item.icon as any}
                  size={22}
                  color={theme.primary}
                />
              </View>
              <View style={styles.menuTextContainer}>
                <Text style={styles.menuTitle}>{item.title}</Text>
                <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
              </View>
              {item.rightElement || (
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={theme.text}
                  style={{ opacity: 0.3 }}
                />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            name="log-out-outline"
            size={20}
            color="#fff"
            style={{ marginRight: 8 }}
          />
          <Text style={styles.logoutText}>{translate("profile.logout")}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Settings;
