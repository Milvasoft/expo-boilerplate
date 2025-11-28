/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@src/store";
import { Ionicons } from "@expo/vector-icons";
import { useThemedStyles, useTheme } from "@src/hooks";
import translate from "@helpers/localization";
import { Logout } from "@modules/app/redux/appSlice";
import { showToast } from "@helpers/toast/showToast";
import { styles as createStyles } from "./style";

function Profile() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const styles = useThemedStyles(createStyles);
  const theme = useTheme();
  const user = useAppSelector((state) => state.AppReducer?.user);

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

  const menuItems = [
    {
      icon: "person-outline",
      title: translate("profile.menu.editProfile"),
      subtitle: translate("profile.menu.editProfileDesc"),
      onPress: () => showToast(translate("profile.menu.editProfile")),
    },
    {
      icon: "notifications-outline",
      title: translate("profile.menu.notifications"),
      subtitle: translate("profile.menu.notificationsDesc"),
      onPress: () => showToast(translate("profile.menu.notifications")),
    },
    {
      icon: "shield-checkmark-outline",
      title: translate("profile.menu.privacy"),
      subtitle: translate("profile.menu.privacyDesc"),
      onPress: () => showToast(translate("profile.menu.privacy")),
    },
    {
      icon: "help-circle-outline",
      title: translate("profile.menu.help"),
      subtitle: translate("profile.menu.helpDesc"),
      onPress: () => showToast(translate("profile.menu.help")),
    },
    {
      icon: "information-circle-outline",
      title: translate("profile.menu.about"),
      subtitle: translate("profile.menu.aboutDesc"),
      onPress: () => showToast(translate("profile.menu.about")),
    },
  ];

  const getInitials = (name?: string) => {
    if (!name) return "?";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[theme.primary, theme.primary + "DD", theme.primary + "AA"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <View style={styles.avatarContainer}>
          <LinearGradient
            colors={["#fff", "#f0f0f0"]}
            style={styles.avatarGradient}
          >
            <Text style={styles.avatarText}>{getInitials(user?.name)}</Text>
          </LinearGradient>
        </View>
        <Text style={styles.nameText}>
          {user?.name || translate("home.guest")}
        </Text>
        <Text style={styles.emailText}>
          {user?.name
            ? `${user.name.toLowerCase().replace(" ", ".")}@example.com`
            : "guest@example.com"}
        </Text>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {translate("profile.accountSettings")}
          </Text>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={item.onPress}
              activeOpacity={0.7}
            >
              <LinearGradient
                colors={[theme.primary + "15", theme.primary + "08"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.menuIconContainer}
              >
                <Ionicons
                  name={item.icon as any}
                  size={22}
                  color={theme.primary}
                />
              </LinearGradient>
              <View style={styles.menuTextContainer}>
                <Text style={styles.menuTitle}>{item.title}</Text>
                <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
              </View>
              <Ionicons
                name="chevron-forward"
                size={20}
                color={theme.text}
                style={{ opacity: 0.3 }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
        activeOpacity={0.8}
      >
        <LinearGradient
          colors={["#FF3B30", "#FF6B5F"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.logoutGradient}
        >
          <Ionicons name="log-out-outline" size={22} color="#fff" />
          <Text style={styles.logoutText}>{translate("profile.logout")}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

export default Profile;
