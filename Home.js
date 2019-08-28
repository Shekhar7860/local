/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import I18n from 'react-native-i18n';
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
import { strings } from './i18n';
import { Actions } from 'react-native-router-flux';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class Home extends Component{
  state = {
      currentLanguage: 'en'
  };

  _changeLanguage = (language) => {
    // alert('hello')
      this.setState({ currentLanguage: language });
  };

  goToList = () => {
    Actions.list()
  }

  render() {
      I18n.locale = this.state.currentLanguage;
      I18n.fallbacks = true;
    

      return (
          <View style={styles.container}>
          <View style={styles.toolbar}>
                    <Text style={styles.toolbarButton}></Text>
                    <Text style={styles.toolbarTitle}>{strings('login.home')}</Text>
                    <TouchableOpacity style={styles.toolbarButton}onPress={() => this.share()}>
                    <Image style={{width:30,marginLeft:5,  height:30}} source={require('./images/share.png')}></Image>
                    </TouchableOpacity>
                </View>
              <Text style={{fontSize:20, margin:20}}>{strings('login.welcome')}
              </Text>
              <TouchableHighlight style={styles.fullWidthButton} onPress={() => this.goToList()}>
            <Text style={styles.fullWidthButtonText}>{strings('login.started')}</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.fullWidthButton} onPress={() => this._changeLanguage('en')}>
            <Text style={styles.fullWidthButtonText}>{strings('login.eng')}</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.fullWidthButton} onPress={() => this._changeLanguage('hi')}>
            <Text style={styles.fullWidthButtonText}>{strings('login.hin')}</Text>
            </TouchableHighlight>
          </View>
      );
  }
}


const styles = StyleSheet.create({
  container : {
    flex :1
  }, 
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
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


