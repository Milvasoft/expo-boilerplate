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
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { useThemedStyles, useTheme } from "@src/hooks";
import translate from "@helpers/localization";
import { showToast } from "@helpers/toast/showToast";
import { SetUser } from "@modules/app/redux/appSlice";
import Routes from "@utils/Routes";
import { styles as createStyles } from "../Login/style";

export default function Signup() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const styles = useThemedStyles(createStyles);
  const theme = useTheme();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignup = () => {
    const newErrors = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (!name) {
      newErrors.name = translate("auth.errors.nameRequired");
    }

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

    if (!confirmPassword) {
      newErrors.confirmPassword = translate(
        "auth.errors.confirmPasswordRequired"
      );
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = translate("auth.errors.passwordsDoNotMatch");
    }

    setErrors(newErrors);

    if (
      !newErrors.name &&
      !newErrors.email &&
      !newErrors.password &&
      !newErrors.confirmPassword
    ) {
      showToast(translate("auth.signupSuccess"));
      dispatch(SetUser({ name }));
    }
  };

  const handleLogin = () => {
    navigation.navigate(Routes.Login as never);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.logoContainer}>
          <Image
            source={require("@assets/images/icon.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>{translate("auth.createAccount")}</Text>
          <Text style={styles.subtitle}>
            {translate("auth.signupSubtitle")}
          </Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>{translate("auth.name")}</Text>
            <TextInput
              style={[styles.input, errors.name && styles.inputError]}
              placeholder={translate("auth.namePlaceholder")}
              placeholderTextColor={theme.text + "60"}
              value={name}
              onChangeText={(text) => {
                setName(text);
                setErrors({ ...errors, name: "" });
              }}
              autoCapitalize="words"
              autoComplete="name"
            />
            {errors.name ? (
              <Text style={styles.errorText}>{errors.name}</Text>
            ) : null}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>{translate("auth.email")}</Text>
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
            {errors.email ? (
              <Text style={styles.errorText}>{errors.email}</Text>
            ) : null}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>{translate("auth.password")}</Text>
            <View style={styles.passwordContainer}>
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
                  size={24}
                  color={theme.text}
                />
              </TouchableOpacity>
            </View>
            {errors.password ? (
              <Text style={styles.errorText}>{errors.password}</Text>
            ) : null}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>
              {translate("auth.confirmPassword")}
            </Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={[
                  styles.input,
                  errors.confirmPassword && styles.inputError,
                ]}
                placeholder={translate("auth.confirmPasswordPlaceholder")}
                placeholderTextColor={theme.text + "60"}
                value={confirmPassword}
                onChangeText={(text) => {
                  setConfirmPassword(text);
                  setErrors({ ...errors, confirmPassword: "" });
                }}
                secureTextEntry={!showConfirmPassword}
                autoCapitalize="none"
              />
              <TouchableOpacity
                style={styles.eyeButton}
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <Ionicons
                  name={showConfirmPassword ? "eye-off-outline" : "eye-outline"}
                  size={24}
                  color={theme.text}
                />
              </TouchableOpacity>
            </View>
            {errors.confirmPassword ? (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            ) : null}
          </View>

          <TouchableOpacity
            style={[
              styles.button,
              (!name || !email || !password || !confirmPassword) &&
                styles.buttonDisabled,
            ]}
            onPress={handleSignup}
            disabled={!name || !email || !password || !confirmPassword}
          >
            <Text style={styles.buttonText}>{translate("auth.signup")}</Text>
          </TouchableOpacity>

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>{translate("auth.or")}</Text>
            <View style={styles.dividerLine} />
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              {translate("auth.alreadyHaveAccount")}
            </Text>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={styles.footerLink}>{translate("auth.login")}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
