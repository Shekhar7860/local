import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity, Image,
  TouchableHighlight
} from 'react-native';
import React, {Fragment, Component} from 'react';
import { strings } from './i18n';
import AudioPlayer from 'react-native-play-audio';
import SoundPlayer from 'react-native-sound-player'
export default class  List extends Component{
  state = {
      currentLanguage: 'en'
  };

  _changeLanguage = (language) => {
    // alert('hello')
      this.setState({ currentLanguage: language });
  };

  playAudio = () => {
    //   alert("working")
    const url = 'http://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'; 
    AudioPlayer.prepare(url, () => {
      AudioPlayer.play();
        
      AudioPlayer.getDuration((duration) => {
        console.log(duration);
      });
//       setInterval(() => {
//         AudioPlayer.getCurrentTime((currentTime) => {
//           console.log(currentTime);
//         });
//       }, 1000);
//       AudioPlayer.stop();
//   AudioPlayer.pause();
//   AudioPlayer.setCurrentTime(50.5);
})
// try {
//     // play the file tone.mp3
//  //   SoundPlayer.playSoundFile('tone', 'mp3')
//     // or play from url
//     SoundPlayer.playUrl('https://www.android-examples.com/wp-content/uploads/2016/04/Thunder-rumble.mp3')
// } catch (e) {
//     console.log(`cannot play the sound file`, e)
// }
//   
}
  render() {
    
    

      return (
        <View>
       <View style={styles.toolbar}>
                    <Text style={styles.toolbarButton}></Text>
                    <Text style={styles.toolbarTitle}>{strings('login.audios')}</Text>
                    <Text style={styles.toolbarButton}></Text>
                </View>
                <TouchableHighlight style={styles.fullWidthButton} onPress={() => this.playAudio()}>
            <Text style={styles.fullWidthButtonText}>{strings('login.started')}</Text>
            </TouchableHighlight>
                <Text>Here Are Audios</Text></View>
      );
  }
}
const styles = StyleSheet.create({
    container : {
      flex :1
    }, 
    
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
     
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
     
    },
    highlight: {
      fontWeight: '700',
    },
    
    toolbar:{
      backgroundColor:'#81c04d',
      paddingTop:20,
      paddingBottom:10,
      flexDirection:'row'    //Step 1
  },
  toolbarButton:{
      width: 50,            //Step 2
      color:'#fff',
      textAlign:'center'
  },
  toolbarTitle:{
      color:'#fff',
      textAlign:'center',
      fontWeight:'bold',
      flex:1,
      fontSize:20                //Step 3
  },
  fullWidthButton: {
    backgroundColor: 'blue',
    height:50,
    width:'80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems : 'center', 
    marginTop:20
  },
  fullWidthButtonText: {
    fontSize:24,
    color: 'white'
  },
  buttonMargin : {
    marginTop:20
  }
  });
  