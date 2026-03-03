import { useEffect, useState, type ReactNode } from "react";
import { View, Text, Modal, StyleSheet } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/Button";
import translate from "@/lib/i18n";
import { spacing, typography } from "@/constants/spacing";

interface Props {
  children: ReactNode;
}

export function NetworkProvider({ children }: Props) {
  const { isConnected } = useNetInfo();
  const { colors } = useTheme();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(isConnected === false);
  }, [isConnected]);

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.backdrop}>
          <View style={[styles.modal, { backgroundColor: colors.card }]}>
            <Text style={[styles.text, { color: colors.text }]}>
              {translate("noInternet")}
            </Text>
            <Button title="OK" onPress={() => setVisible(false)} />
          </View>
        </View>
      </Modal>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backdrop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modal: {
    margin: spacing.lg - 4,
    borderRadius: spacing.md,
    padding: spacing.xl,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    marginBottom: spacing.md,
    textAlign: "center",
    fontSize: typography.md,
    fontFamily: "SemiBold",
  },
});
