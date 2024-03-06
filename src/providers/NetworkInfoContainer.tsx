import { useNetInfo } from "@react-native-community/netinfo";
import React, { useState, useEffect } from "react";
import { View, Text, Modal, Button, StyleSheet } from "react-native";

const NetworkInfoContainer = ({ children }: any) => {
  const { isConnected } = useNetInfo();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (!isConnected) {
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  }, [isConnected]);

  return (
    <View style={{ flex: 1 }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              İnternet bağlantınızı kontrol edin!
            </Text>
            <Button title="Tamam" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default NetworkInfoContainer;
