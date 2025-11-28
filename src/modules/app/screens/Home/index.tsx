/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useAppSelector } from "@src/store";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useThemedStyles, useTheme } from "@src/hooks";
import translate from "@helpers/localization";
import Routes from "@utils/Routes";
import { styles as createStyles } from "./style";

function Home() {
  const navigation = useNavigation();
  const styles = useThemedStyles(createStyles);
  const theme = useTheme();
  const user = useAppSelector((state) => state.AppReducer?.user);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  }, []);

  const quickActions = [
    {
      icon: "newspaper-outline",
      iconType: "ionicons",
      title: translate("home.actions.news"),
      subtitle: translate("home.actions.newsDesc"),
      color: "#FF6B6B",
      onPress: () => navigation.navigate(Routes.News as never),
    },
    {
      icon: "chart-line",
      iconType: "material",
      title: translate("home.actions.trending"),
      subtitle: translate("home.actions.trendingDesc"),
      color: "#4ECDC4",
      onPress: () => navigation.navigate(Routes.News as never),
    },
    {
      icon: "bookmark-outline",
      iconType: "ionicons",
      title: translate("home.actions.saved"),
      subtitle: translate("home.actions.savedDesc"),
      color: "#FFE66D",
      onPress: () => {},
    },
    {
      icon: "person-outline",
      iconType: "ionicons",
      title: translate("home.actions.profile"),
      subtitle: translate("home.actions.profileDesc"),
      color: "#A8E6CF",
      onPress: () => navigation.navigate(Routes.Profile as never),
    },
  ];

  const recentActivities = [
    {
      icon: "checkmark-circle",
      title: translate("home.activity.loggedIn"),
      time: translate("news.justNow"),
    },
    {
      icon: "newspaper",
      title: translate("home.activity.readNews"),
      time: "2 " + translate("news.hoursAgo"),
    },
    {
      icon: "person",
      title: translate("home.activity.updatedProfile"),
      time: translate("news.yesterday"),
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={theme.primary}
            colors={[theme.primary]}
          />
        }
      >
        <LinearGradient
          colors={[theme.primary, theme.primary + "DD", theme.primary + "88"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.header}
        >
          <View style={styles.headerTop}>
            <View>
              <Text style={styles.welcomeText}>
                {translate("home.welcome")}!
              </Text>
              <Text style={styles.nameText}>
                {user?.name || translate("home.guest")}
              </Text>
            </View>
            <TouchableOpacity style={styles.notificationButton}>
              <Ionicons name="notifications-outline" size={24} color="#fff" />
              <View style={styles.notificationBadge}>
                <Text style={styles.badgeText}>3</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <Ionicons name="newspaper" size={24} color="#fff" />
              <Text style={styles.statValue}>24</Text>
              <Text style={styles.statLabel}>
                {translate("home.stats.articles")}
              </Text>
            </View>
            <View style={styles.statCard}>
              <Ionicons name="eye" size={24} color="#fff" />
              <Text style={styles.statValue}>156</Text>
              <Text style={styles.statLabel}>
                {translate("home.stats.views")}
              </Text>
            </View>
            <View style={styles.statCard}>
              <Ionicons name="bookmark" size={24} color="#fff" />
              <Text style={styles.statValue}>8</Text>
              <Text style={styles.statLabel}>
                {translate("home.stats.saved")}
              </Text>
            </View>
          </View>
        </LinearGradient>

        <View style={styles.content}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              {translate("home.quickActions")}
            </Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>{translate("home.seeAll")}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.actionGrid}>
            {quickActions.map((action, index) => (
              <TouchableOpacity
                key={index}
                style={styles.actionCard}
                onPress={action.onPress}
                activeOpacity={0.7}
              >
                <LinearGradient
                  colors={[action.color + "20", action.color + "10"]}
                  style={styles.actionIconContainer}
                >
                  {action.iconType === "ionicons" ? (
                    <Ionicons
                      name={action.icon as any}
                      size={28}
                      color={action.color}
                    />
                  ) : (
                    <MaterialCommunityIcons
                      name={action.icon as any}
                      size={28}
                      color={action.color}
                    />
                  )}
                </LinearGradient>
                <Text style={styles.actionTitle}>{action.title}</Text>
                <Text style={styles.actionSubtitle}>{action.subtitle}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              {translate("home.recentActivity")}
            </Text>
          </View>

          {recentActivities.map((activity, index) => (
            <View key={index} style={styles.activityItem}>
              <View
                style={[
                  styles.activityIconContainer,
                  { backgroundColor: theme.primary + "15" },
                ]}
              >
                <Ionicons
                  name={activity.icon as any}
                  size={22}
                  color={theme.primary}
                />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>{activity.title}</Text>
                <Text style={styles.activityTime}>{activity.time}</Text>
              </View>
              <Ionicons
                name="chevron-forward"
                size={20}
                color={theme.text}
                style={{ opacity: 0.3 }}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;
