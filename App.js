import { Colors } from "./src/theme";
import React, { Fragment, useState } from "react";
import RootNavigation from "./src/navigation/RootNavigation";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";

const STYLES = ["default", "dark-content", "light-content"];
const TRANSITIONS = ["fade", "slide", "none"];

const App = () => {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
  const [statusBarTransition, setStatusBarTransition] = useState(
    TRANSITIONS[0]
  );
  return (
    <Fragment>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: Colors.onBoardBackground }}
      >
        <StatusBar
          animated={true}
          backgroundColor={Colors.onBoardBackground}
          barStyle={statusBarStyle}
          showHideTransition={statusBarTransition}
          hidden={false}
        />
        <RootNavigation />
        {/* <HerodoseOptions /> */}
      </SafeAreaView>
    </Fragment>
  );
};

export default App;

const styles = StyleSheet.create({});
