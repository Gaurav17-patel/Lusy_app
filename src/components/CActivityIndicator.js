import React from "react";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

const CActivityIndicator = () => (
  <ActivityIndicator
    animating={true}
    color={MD2Colors.red800}
    size="large"
    style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: '#FFFFFF' }}
  />
);

export default CActivityIndicator;
