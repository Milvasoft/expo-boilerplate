import { useEffect, useState, type ReactNode } from "react";
import { View, Text, Modal, Pressable, StyleSheet } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";
import translate from "@/lib/i18n";

interface Props {
  children: ReactNode;
}

export function NetworkProvider({ children }: Props) {
  const { isConnected } = useNetInfo();
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
          <View style={styles.modal}>
            <Text style={styles.text}>{translate("noInternet")}</Text>
            <Pressable
              style={styles.button}
              onPress={() => setVisible(false)}
            >
              <Text style={styles.buttonText}>OK</Text>
            </Pressable>
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
    margin: 20,
    backgroundColor: "white",
    borderRadius: 16,
    padding: 32,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    marginBottom: 16,
    textAlign: "center",
    fontSize: 16,
    fontFamily: "SemiBold",
  },
  button: {
    backgroundColor: "#f27a1a",
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Bold",
    fontSize: 14,
  },
});
