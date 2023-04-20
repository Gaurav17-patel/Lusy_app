import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {
  stopAudio,
  playAudio,
  pauseAudio,
  recordAudio,
} from "../../../../assets";
import React, { useState } from "react";
import styles from "./RecordingEntryStyles";
import { Strings } from "../../../../constant";
import { CButton } from "../../../../components";
import { CHeader } from "../../../../components/CHeader";
import { useNavigation, useRoute } from "@react-navigation/native";
import AudioRecorderPlayer from "react-native-audio-recorder-player";

const audioRecorderPlayer = new AudioRecorderPlayer();

const RecordingEntry = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRecorderStates, setIsRecorderStates] = useState("isRecorder");
  const [start, setStart] = useState(false);
  const [pause, setPause] = useState(true);
  const [playAudioRecord, setPlayAudioRecord] = useState(false);

  const [recordTime, setRecordTime] = useState();
  const [recordSecs, setRecordSecs] = useState();

  const totalSeconds = minutes * 60 + seconds;

  let text;
  isRecorderStates == "isRecorder"
    ? (text = Strings.readyRecordAudio)
    : isRecorderStates == "inProgressRecorder"
    ? (text = Strings.inProgressRecordAudio)
    : isRecorderStates == "isAudioPlay"
    ? (text = Strings.playAudio)
    : null;

  // useEffect(() => {
  //   let myInterval = setInterval(() => {
  //     setSeconds(seconds + 1);
  //     if (seconds > 59) {
  //       setMinutes(minutes + 1);
  //       setSeconds(0);
  //     }
  //     if (minutes == 10) {
  //       clearInterval(myInterval);
  //     }
  //   }, 1000);
  //   return () => {
  //     clearInterval(myInterval);
  //   };
  // });

  // useEffect(() => {
  //   if (route.params?.player == "isAudioPlay") {
  //     setIsRecorderStates("isAudioPlay");
  //   }
  //   if (start) {
  //     let interval = setInterval(() => {
  //       setSeconds(seconds + 1);
  //       if (seconds === 59) {
  //         setSeconds(0);
  //         setMinutes(minutes + 1);
  //       }
  //       if (minutes == 10) {
  //         setStart(false);
  //         setSeconds(0);
  //       }
  //     }, 10);
  //     return () => {
  //       clearInterval(interval);
  //     };
  //   } else if (playAudioRecord) {
  //     let interval = setInterval(() => {
  //       if (seconds > 0) {
  //         // setSeconds(59);
  //         setSeconds(59 - 1);
  //         // setPlayAudioRecord(false);
  //       }
  //       // setSeconds(seconds - 1);

  //       // clearInterval(interval);
  //     }, 1000);
  //   }
  // });

  // const startTimer = () => {
  //   setIsRecorderStates("inProgressRecorder");
  //   setStart(!start);
  // };

  // const stopTimer = () => {
  //   setIsRecorderStates("isAudioPlay");
  //   setStart(!start);
  //   // playRecording("stop");
  // };

  // const playRecording = () => {
  //   setPlayAudioRecord(!playAudioRecord);
  // };

  const onStartRecord = async () => {
    const result = await audioRecorderPlayer.startRecorder();
    audioRecorderPlayer.addRecordBackListener((e) => {
      setRecordSecs(e.currentPosition);
      setRecordTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
      setIsRecorderStates("inProgressRecorder");
      setStart(true);

      return;
    });
    console.log(result);
  };

  const onStopRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    setRecordSecs(0);
    setStart(!start);
    console.log(result);
  };

  const onPauseRecorde = async () => {
    try {
      const r = await audioRecorderPlayer.pauseRecorder();
      console.log("reeee", r);
      setStart(false);
    } catch (err) {
      console.log("pauseRecord", err);
    }
  };

  const onResumeRecord = async () => {
    await audioRecorderPlayer.resumeRecorder();
    setStart(true);
    console.log("resume Record");
  };

  return (
    <SafeAreaView style={styles.container}>
      <CHeader onPress={() => navigation.goBack()} />
      <View style={styles.mainBody}>
        <Text style={styles.audioTexts}>{text}</Text>
        <Text style={styles.timer}>
          {/* {minutes === 0 && seconds === 0
            ? "00 : 00"
            : `${minutes < 10 ? `0${minutes}` : minutes} : ${
                seconds < 10 ? `0${seconds}` : seconds
              }`} */}
          {recordTime ? recordTime : "00 : 00"}
        </Text>
        {isRecorderStates == "isRecorder" ? (
          <TouchableOpacity onPress={onStartRecord}>
            <Image
              source={recordAudio}
              style={styles.actionButtons}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : isRecorderStates == "inProgressRecorder" ? (
          <View style={styles.inProgressButtonActions}>
            <TouchableOpacity
              onPress={start ? onPauseRecorde : onResumeRecord}
              activeOpacity={1}
            >
              <Image
                source={start ? pauseAudio : playAudio}
                style={styles.actionButtons}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={onStopRecord}>
              <Image
                source={stopAudio}
                style={styles.actionButtons}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        ) : isRecorderStates == "isAudioPlay" ? (
          <>
            <TouchableOpacity onPress={playRecording}>
              <Image
                source={playAudio}
                style={styles.actionButtons}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <CButton
              ButtonText={Strings.editViewButtonText}
              ButtonStyle={styles.viewEditRecordingButton}
              ButtonTextStyle={styles.btnText}
              onPress={() => navigation.navigate("EditViewJournal")}
            />
          </>
        ) : null}
        <Text style={styles.maxTimeStyle}>{Strings.maxAudioTime}</Text>
      </View>
    </SafeAreaView>
  );
};

export default RecordingEntry;
