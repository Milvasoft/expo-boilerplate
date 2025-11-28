/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  RefreshControl,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useAppSelector } from "@src/store";
import { newsService } from "../../services/newsService";
import {
  setArticles,
  setSelectedArticle,
  setLoading,
  setError,
  setSelectedCategory,
} from "../../redux/newsSlice";
import { INewsArticle, NewsCategory } from "../../types/INewsArticle";
import { useTheme, useThemedStyles } from "@src/hooks";
import translate from "@helpers/localization";
import ErrorComponent from "@components/ErrorComponent";
import { NewsListSkeleton } from "@components/Skeleton/SkeletonVariants";
import Routes from "@utils/Routes";
import { useDispatch } from "react-redux";
import { styles as createStyles } from "./style";

const categories: Array<{ key: NewsCategory | "all"; label: string }> = [
  { key: "all", label: "news.categories.all" },
  { key: "technology", label: "news.categories.technology" },
  { key: "sports", label: "news.categories.sports" },
  { key: "business", label: "news.categories.business" },
  { key: "entertainment", label: "news.categories.entertainment" },
  { key: "health", label: "news.categories.health" },
  { key: "science", label: "news.categories.science" },
];

export default function NewsList() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const theme = useTheme();
  const styles = useThemedStyles(createStyles);
  const { articles, isLoading, error, selectedCategory } = useAppSelector(
    (state) => state.NewsReducer
  );

  useEffect(() => {
    fetchNews();
  }, [selectedCategory]);

  const fetchNews = async () => {
    try {
      dispatch(setLoading(true));
      const news = await newsService.getNews(selectedCategory);
      dispatch(setArticles(news));
      dispatch(setError(null));
    } catch (err) {
      dispatch(
        setError(
          err instanceof Error ? err.message : translate("generalErrorText")
        )
      );
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleArticlePress = (article: INewsArticle) => {
    dispatch(setSelectedArticle(article));
    navigation.navigate(Routes.NewsDetail as never);
  };

  const handleCategoryPress = (category: NewsCategory | "all") => {
    dispatch(setSelectedCategory(category));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    );

    if (diffInHours < 1) return translate("news.justNow");
    if (diffInHours < 24) return `${diffInHours}${translate("news.hoursAgo")}`;

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays === 1) return translate("news.yesterday");
    if (diffInDays < 7) return `${diffInDays}${translate("news.daysAgo")}`;

    return date.toLocaleDateString();
  };

  const renderCategoryItem = ({ item }: { item: (typeof categories)[0] }) => (
    <TouchableOpacity
      style={[
        styles.categoryButton,
        selectedCategory === item.key && styles.categoryButtonActive,
      ]}
      onPress={() => handleCategoryPress(item.key)}
    >
      <Text
        style={[
          styles.categoryText,
          selectedCategory === item.key && styles.categoryTextActive,
        ]}
      >
        {translate(item.label)}
      </Text>
    </TouchableOpacity>
  );

  const renderNewsItem = ({ item }: { item: INewsArticle }) => (
    <TouchableOpacity
      style={styles.newsItem}
      onPress={() => handleArticlePress(item)}
      activeOpacity={0.8}
    >
      <View style={styles.imageGradient}>
        <Image
          source={{ uri: item.imageUrl }}
          style={styles.newsImage}
          resizeMode="cover"
        />
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryBadgeText}>
            {translate(`news.categories.${item.category}`)}
          </Text>
        </View>
      </View>
      <View style={styles.newsContent}>
        <Text style={styles.newsTitle} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.newsDescription} numberOfLines={2}>
          {item.description}
        </Text>
        <View style={styles.newsFooter}>
          <View style={styles.authorContainer}>
            <Ionicons
              name="person-circle-outline"
              size={16}
              color={theme.text}
              style={{ opacity: 0.6 }}
            />
            <Text style={styles.newsAuthor}>{item.author}</Text>
          </View>
          <View style={styles.dateContainer}>
            <Ionicons
              name="time-outline"
              size={16}
              color={theme.text}
              style={{ opacity: 0.6 }}
            />
            <Text style={styles.newsDate}>{formatDate(item.publishedAt)}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  if (error) {
    return (
      <View style={styles.container}>
        <ErrorComponent errorMessage={error || ""} onRetry={fetchNews} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[theme.primary, theme.primary + "E6"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>{translate("news.title")}</Text>
        <Text style={styles.headerSubtitle}>{translate("news.subtitle")}</Text>
      </LinearGradient>

      <View style={styles.categoryContainer}>
        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.key}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScroll}
        />
      </View>

      {isLoading && articles.length === 0 ? (
        <NewsListSkeleton />
      ) : (
        <FlatList
          data={articles}
          renderItem={renderNewsItem}
          keyExtractor={(item) => item.id}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={fetchNews}
              tintColor={theme.primary}
            />
          }
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>
                {translate("news.noArticles")}
              </Text>
            </View>
          }
          contentContainerStyle={
            articles.length === 0 ? { flex: 1 } : { padding: 16 }
          }
        />
      )}
    </View>
  );
}
