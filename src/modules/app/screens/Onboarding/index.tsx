/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useThemedStyles } from "@src/hooks";
import translate from "@helpers/localization";
import Routes from "@utils/Routes";
import { styles as createStyles } from "./style";

const { width } = Dimensions.get("window");

interface OnboardingSlide {
  id: string;
  title: string;
  description: string;
  image: any;
}

const slides: OnboardingSlide[] = [
  {
    id: "1",
    title: "onboarding.slide1.title",
    description: "onboarding.slide1.description",
    image: require("@assets/images/icon.png"),
  },
  {
    id: "2",
    title: "onboarding.slide2.title",
    description: "onboarding.slide2.description",
    image: require("@assets/images/icon.png"),
  },
  {
    id: "3",
    title: "onboarding.slide3.title",
    description: "onboarding.slide3.description",
    image: require("@assets/images/icon.png"),
  },
];

export default function Onboarding() {
  const navigation = useNavigation();
  const styles = useThemedStyles(createStyles);
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      navigation.navigate(Routes.Login as never);
    }
  };

  const handleSkip = () => {
    navigation.navigate(Routes.Login as never);
  };

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const renderSlide = ({ item }: { item: OnboardingSlide }) => (
    <View style={[styles.slide, { width }]}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{translate(item.title)}</Text>
      <Text style={styles.description}>{translate(item.description)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderSlide}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />

      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, index === currentIndex && styles.dotActive]}
          />
        ))}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>
            {currentIndex === slides.length - 1
              ? translate("onboarding.getStarted")
              : translate("onboarding.next")}
          </Text>
        </TouchableOpacity>

        {currentIndex < slides.length - 1 && (
          <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
            <Text style={styles.skipText}>{translate("onboarding.skip")}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
