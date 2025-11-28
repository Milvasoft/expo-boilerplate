/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import React from "react";
import { View, StyleSheet } from "react-native";
import Skeleton from "../Skeleton";
import padding from "@styles/padding";

export const NewsListSkeleton = () => {
  return (
    <View style={styles.container}>
      {[1, 2, 3, 4].map((item) => (
        <View key={item} style={styles.newsItem}>
          <Skeleton width="100%" height={200} borderRadius={12} />
          <View style={styles.newsContent}>
            <Skeleton width="30%" height={12} style={{ marginBottom: 8 }} />
            <Skeleton width="90%" height={20} style={{ marginBottom: 8 }} />
            <Skeleton width="95%" height={16} style={{ marginBottom: 8 }} />
            <Skeleton width="80%" height={16} style={{ marginBottom: 12 }} />
            <View style={styles.footer}>
              <Skeleton width="40%" height={12} />
              <Skeleton width="30%" height={12} />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export const HomeStatsSkeleton = () => {
  return (
    <View style={styles.statsContainer}>
      {[1, 2, 3].map((item) => (
        <View key={item} style={styles.statItem}>
          <Skeleton width={60} height={32} style={{ marginBottom: 4 }} />
          <Skeleton width={50} height={12} />
        </View>
      ))}
    </View>
  );
};

export const HomeActionsSkeleton = () => {
  return (
    <View style={styles.actionsGrid}>
      {[1, 2, 3, 4].map((item) => (
        <View key={item} style={styles.actionCard}>
          <Skeleton
            width={48}
            height={48}
            borderRadius={24}
            style={{ marginBottom: 8 }}
          />
          <Skeleton width={80} height={14} />
        </View>
      ))}
    </View>
  );
};

export const ProfileMenuSkeleton = () => {
  return (
    <View style={styles.menuContainer}>
      {[1, 2, 3, 4, 5].map((item) => (
        <View key={item} style={styles.menuItem}>
          <Skeleton width={40} height={40} borderRadius={20} />
          <View style={{ flex: 1, marginLeft: padding.MEDIUM }}>
            <Skeleton width="60%" height={16} style={{ marginBottom: 4 }} />
            <Skeleton width="80%" height={12} />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: padding.SMALL,
  },
  newsItem: {
    marginHorizontal: padding.MEDIUM,
    marginVertical: padding.SMALL,
    borderRadius: 12,
    overflow: "hidden",
  },
  newsContent: {
    padding: padding.MEDIUM,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: padding.LARGE,
  },
  statItem: {
    alignItems: "center",
  },
  actionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -padding.SMALL,
  },
  actionCard: {
    width: "48%",
    margin: padding.SMALL,
    padding: padding.MEDIUM,
    alignItems: "center",
    borderRadius: 12,
  },
  menuContainer: {
    padding: padding.LARGE,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: padding.MEDIUM,
  },
});
