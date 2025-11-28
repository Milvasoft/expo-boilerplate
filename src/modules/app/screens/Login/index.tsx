/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { useThemedStyles, useTheme } from "@src/hooks";
import translate from "@helpers/localization";
import { showToast } from "@helpers/toast/showToast";
import { SetUser } from "@modules/app/redux/appSlice";
import Routes from "@utils/Routes";
import { styles as createStyles } from "./style";

export default function Login() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const styles = useThemedStyles(createStyles);
  const theme = useTheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    const newErrors = { email: "", password: "" };

    if (!email) {
      newErrors.email = translate("auth.errors.emailRequired");
    } else if (!validateEmail(email)) {
      newErrors.email = translate("auth.errors.emailInvalid");
    }

    if (!password) {
      newErrors.password = translate("auth.errors.passwordRequired");
    } else if (password.length < 6) {
      newErrors.password = translate("auth.errors.passwordTooShort");
    }

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
      showToast(translate("auth.loginSuccess"));
      dispatch(SetUser({ name: email.split("@")[0] }));
    }
  };

  const handleSignup = () => {
    navigation.navigate(Routes.Signup as never);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[theme.primary, theme.primary + "DD", theme.primary + "99"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.headerGradient}
      >
        <View style={styles.headerContent}>
          <View style={styles.logoWrapper}>
            <View style={styles.logoCircle}>
              <Image
                source={require("@assets/images/icon.png")}
                style={styles.logo}
                resizeMode="contain"
              />
            </View>
          </View>
          <Text style={styles.appName}>NewsApp</Text>
          <Text style={styles.tagline}>{translate("auth.tagline")}</Text>
        </View>
      </LinearGradient>

      <KeyboardAvoidingView
        style={styles.formWrapper}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <View style={styles.formCard}>
            <Text style={styles.welcomeTitle}>{translate("auth.welcome")}</Text>
            <Text style={styles.welcomeSubtitle}>
              {translate("auth.loginSubtitle")}
            </Text>

            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <Ionicons
                  name="mail-outline"
                  size={20}
                  color={theme.text}
                  style={{ opacity: 0.5 }}
                />
                <TextInput
                  style={[styles.input, errors.email && styles.inputError]}
                  placeholder={translate("auth.emailPlaceholder")}
                  placeholderTextColor={theme.text + "60"}
                  value={email}
                  onChangeText={(text) => {
                    setEmail(text);
                    setErrors({ ...errors, email: "" });
                  }}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoComplete="email"
                />
              </View>
              {errors.email ? (
                <Text style={styles.errorText}>{errors.email}</Text>
              ) : null}
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  color={theme.text}
                  style={{ opacity: 0.5 }}
                />
                <TextInput
                  style={[styles.input, errors.password && styles.inputError]}
                  placeholder={translate("auth.passwordPlaceholder")}
                  placeholderTextColor={theme.text + "60"}
                  value={password}
                  onChangeText={(text) => {
                    setPassword(text);
                    setErrors({ ...errors, password: "" });
                  }}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  autoComplete="password"
                />
                <TouchableOpacity
                  style={styles.eyeButton}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Ionicons
                    name={showPassword ? "eye-off-outline" : "eye-outline"}
                    size={22}
                    color={theme.text}
                    style={{ opacity: 0.5 }}
                  />
                </TouchableOpacity>
              </View>
              {errors.password ? (
                <Text style={styles.errorText}>{errors.password}</Text>
              ) : null}
            </View>

            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>
                {translate("auth.forgotPassword")}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.button,
                (!email || !password) && styles.buttonDisabled,
              ]}
              onPress={handleLogin}
              disabled={!email || !password}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={
                  !email || !password
                    ? [theme.border, theme.border]
                    : [theme.primary, theme.primary + "DD"]
                }
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.buttonGradient}
              >
                <Text style={styles.buttonText}>{translate("auth.login")}</Text>
                <Ionicons name="arrow-forward" size={20} color="#fff" />
              </LinearGradient>
            </TouchableOpacity>

            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>{translate("auth.or")}</Text>
              <View style={styles.dividerLine} />
            </View>

            <View style={styles.socialButtons}>
              <TouchableOpacity style={styles.socialButton} activeOpacity={0.8}>
                <LinearGradient
                  colors={["#000", "#333"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.socialButtonGradient}
                >
                  <Ionicons name="logo-apple" size={24} color="#fff" />
                  <Text style={styles.socialButtonText}>Apple</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity style={styles.socialButton} activeOpacity={0.8}>
                <LinearGradient
                  colors={["#DB4437", "#E57373"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.socialButtonGradient}
                >
                  <Ionicons name="logo-google" size={24} color="#fff" />
                  <Text style={styles.socialButtonText}>Google</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>

            <View style={styles.socialButtons}>
              <TouchableOpacity style={styles.socialButton} activeOpacity={0.8}>
                <LinearGradient
                  colors={["#1877F2", "#4A9FF5"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.socialButtonGradient}
                >
                  <Ionicons name="logo-facebook" size={24} color="#fff" />
                  <Text style={styles.socialButtonText}>Facebook</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity style={styles.socialButton} activeOpacity={0.8}>
                <LinearGradient
                  colors={["#1DA1F2", "#56C1F7"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.socialButtonGradient}
                >
                  <Ionicons name="logo-twitter" size={24} color="#fff" />
                  <Text style={styles.socialButtonText}>Twitter</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>

            <View style={styles.footer}>
              <Text style={styles.footerText}>
                {translate("auth.dontHaveAccount")}
              </Text>
              <TouchableOpacity onPress={handleSignup}>
                <Text style={styles.footerLink}>
                  {translate("auth.signup")}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
