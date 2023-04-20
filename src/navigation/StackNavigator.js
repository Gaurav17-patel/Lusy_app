import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyTabs from "./TabNavigator";
// import DatePicker from "../screens/DatePicker/DatePicker";
// import Feeling from "../screens/Feeling/Feeling";
import JournalEntry from "../screens/Tabs/Journal/JournalEntry/JournalEntry";
import RecordingEntry from "../screens/Tabs/Journal/NewRecordingJournal/RecordingEntry";
import EditViewJournal from "../screens/Tabs/Journal/EditViewJournal/EditViewJournal";
import OnBoarding from "../screens/WelcomeOnBoarding/OnBoarding";
import OnBoardingTwo from "../screens/ProfileSetupOnBoarding/OnBoardingTwo/OnBoardingTwo";
import HerodoseOptions from "../screens/ProfileSetupOnBoarding/HerodoseOptions/HerodoseOptions";
import MicroDosedOptions from "../screens/ProfileSetupOnBoarding/MicroDosedOptions/MicroDosedOptions";
import DoseScreen from "../screens/ProfileSetupOnBoarding/DoseScreen/DoseScreen";
import SignUp from "../screens/Auth/SignUp/SignUp";
import OtpScreen from "../screens/Auth/OtpScreen/OtpScreen";
import GetMembership from "../screens/Auth/GetMembership/GetMembership";
import JoiningRegards from "../screens/Auth/JoiningAppRegards/JoiningRegards";
import AllowTrackingData from "../screens/Auth/AllowTrackingData/AllowTrackingData";
import NotificationPermission from "../screens/Auth/NotificationPermission/NotificationPermission";
import SignIn from "../screens/Auth/SignIn/SignIn";
import ForgotPassword from "../screens/Auth/ForgotPassword/ForgotPassword";
import ResetPassword from "../screens/Auth/ResetPassword/ResetPassword";
import SelectPsychedelic from "../screens/Tabs/Track/SelectPsychedelic/SelectPsychedelic";
import ViewJournalEntries from "../screens/Tabs/Journal/ViewJournalEntries/ViewJournalEntries";
import RecentActivity from "../screens/Tabs/Home/InsightsModule/RecentActivity/RecentActivity";
import SelectDoseType from "../screens/Tabs/Track/SelectDoseType/SelectDoseType";
import SelectDose from "../screens/Tabs/Track/SelectDose/SelectDose";
import Greetings from "../screens/Tabs/Track/Greetings/Greetings";
import Insights from "../screens/Tabs/Home/InsightsModule/Insights/Insights";
import SelectMonthAndYear from "../screens/Tabs/Home/InsightsModule/Insights/SelectMonthAndYear/SelectMonthAndYear";
import PsychActivity from "../screens/Tabs/Home/InsightsModule/PsychActivity/PsychActivity";
import PsychActivityDetails from "../screens/Tabs/Home/InsightsModule/PsychActivityDetails/PsychActivityDetails";
import JournalingHistory from "../screens/Tabs/Home/InsightsModule/JournalingHistory/JournalingHistory";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={"OnBoarding"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen name="Verification" component={OtpScreen} />
      <Stack.Screen name="GetMembership" component={GetMembership} />
      <Stack.Screen name="JoiningRegards" component={JoiningRegards} />
      <Stack.Screen name="AllowTrackingData" component={AllowTrackingData} />
      <Stack.Screen
        name="NotificationPermission"
        component={NotificationPermission}
      />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="OnBoardingTwo" component={OnBoardingTwo} />
      <Stack.Screen
        name="Tabs"
        component={MyTabs}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen name="DoseScreen" component={DoseScreen} />
      <Stack.Screen name="HerodoseOptions" component={HerodoseOptions} />
      <Stack.Screen name="MicroDosedOptions" component={MicroDosedOptions} />
      {/* <Stack.Screen name="DatePicker" component={DatePicker} />
      <Stack.Screen name="Feeling" component={Feeling} /> */}
      <Stack.Screen name="JournalEntry" component={JournalEntry} />
      <Stack.Screen name="RecordingEntry" component={RecordingEntry} />
      <Stack.Screen name="EditViewJournal" component={EditViewJournal} />
      <Stack.Screen name="ViewJournalEntries" component={ViewJournalEntries} />
      <Stack.Screen name="SelectPsychedelic" component={SelectPsychedelic} />
      <Stack.Screen name="RecentActivity" component={RecentActivity} />
      <Stack.Screen name="SelectDoseType" component={SelectDoseType} />
      <Stack.Screen name="SelectDose" component={SelectDose} />
      <Stack.Screen name="ThankYou" component={Greetings} />
      <Stack.Screen name="Insights" component={Insights} />
      <Stack.Screen name="SelectMonthAndYear" component={SelectMonthAndYear} />
      <Stack.Screen name="PsychActivity" component={PsychActivity} />
      <Stack.Screen
        name="PsychActivityDetails"
        component={PsychActivityDetails}
      />
      <Stack.Screen name="JournalingHistory" component={JournalingHistory} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
