/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useAppSelector } from "@src/store";
import { useTheme, useThemedStyles } from "@src/hooks";
import translate from "@helpers/localization";
import NotFoundComponent from "@components/NotFoundComponent";
import { styles as createStyles } from "./style";

export default function NewsDetail() {
  const navigation = useNavigation();
  const theme = useTheme();
  const styles = useThemedStyles(createStyles);
  const { selectedArticle } = useAppSelector((state) => state.NewsReducer);

  if (!selectedArticle) {
    return (
      <View style={styles.container}>
        <NotFoundComponent onPress={() => navigation.goBack()} />
      </View>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleReadMore = async () => {
    if (selectedArticle.url) {
      await Linking.openURL(selectedArticle.url);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: selectedArticle.imageUrl }}
            style={styles.image}
            resizeMode="cover"
          />
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.8)"]}
            style={styles.imageGradient}
          >
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back" size={24} color="#fff" />
            </TouchableOpacity>
          </LinearGradient>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>
              {translate(`news.categories.${selectedArticle.category}`)}
            </Text>
          </View>

          <Text style={styles.title}>{selectedArticle.title}</Text>

          <View style={styles.metaContainer}>
            <View style={styles.metaItem}>
              <Ionicons name="person-outline" size={18} color={theme.primary} />
              <View style={styles.metaContent}>
                <Text style={styles.metaLabel}>{translate("news.author")}</Text>
                <Text style={styles.metaValue}>{selectedArticle.author}</Text>
              </View>
            </View>
            <View style={styles.metaItem}>
              <Ionicons name="time-outline" size={18} color={theme.primary} />
              <View style={styles.metaContent}>
                <Text style={styles.metaLabel}>
                  {translate("news.published")}
                </Text>
                <Text style={styles.metaValue}>
                  {formatDate(selectedArticle.publishedAt)}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.divider} />

          <Text style={styles.description}>{selectedArticle.description}</Text>

          <Text style={styles.content}>{selectedArticle.content}</Text>

          <View style={styles.sourceContainer}>
            <Ionicons
              name="newspaper-outline"
              size={20}
              color={theme.text}
              style={{ opacity: 0.6 }}
            />
            <View>
              <Text style={styles.sourceLabel}>{translate("news.source")}</Text>
              <Text style={styles.sourceText}>{selectedArticle.source}</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.readMoreButton}
            onPress={handleReadMore}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={[theme.primary, theme.primary + "CC"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.readMoreGradient}
            >
              <Text style={styles.readMoreText}>
                {translate("news.readFullArticle")}
              </Text>
              <Ionicons name="open-outline" size={20} color="#fff" />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
