import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableNativeFeedback,
  ImageBackground,
  Image,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Graph from '../components/IndividualGraph';
import {someData} from '../data/Goals'
import FocusAwareStatusBar from '../components/FocusAwareStatusBar'

const screenWidth = Dimensions.get('window').width;

const labels = [
  { title: 'General', percentage: 60 },
  { title: 'Goal 1', percentage: 40 },
  { title: 'Goal 2', percentage: 45 },
  { title: 'Goal 3', percentage: 50 },
  { title: 'History', percentage: 95 },
];

const dicc = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

var today = new Date();

class StatisticsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dateChoosen: '',
      goalChoosen: 'General',
      goal: { days: ['Sun'] },
      day: { percentage: 1 },
      colorHolder: '#0dceda'
    };
  }

  componentDidMount() {
    this.setTime();
    this.setGoal();
    this.setFocusDay();
  }

  setTime = () => {
    this.setState({
      dateChoosen: dicc[today.getDay()] + today.getDate().toString(),
    });
  };

  setGoal = () => {
    someData.map((goal) =>
      goal.title === this.state.goalChoosen
        ? this.setState({ goal: goal })
        : null
    );
  };

  setFocusDay = () => {
    someData[0].days.map((day) => {
      day.day + day.date === dicc[today.getDay()] + today.getDate().toString()
        ? this.setState({ day: day })
        : null;
    });
  };

  changeDate = (day) => {
    this.setState({ dateChoosen: day.day + day.date });
    this.state.goal.days.map((dia)=>{
      dia.day + dia.date === day.day + day.date
      ? this.setState({day:dia})
      : null
    })
  };

  changeGoal = (goal, index) => {
    this.setState({ goalChoosen: goal });
    someData.map((meta)=>{
      meta.title===goal
      ? this.setState({goal:meta,
      day:meta.days[0],
      dateChoosen: meta.days[0].day+meta.days[0].date
      })
      : null;
    })
  };



  onPressCompGraph = () =>{

  var colorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

  this.setState({

    colorHolder : colorCode

  })

  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <FocusAwareStatusBar  barStyle="dark-content" backgroundColor="white"/>
        <View style={styles.headerContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Statistics</Text>
          </View>

          <ScrollView
            style={[styles.carrouselOptions, { backgroundColor: 'gray' }]}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {someData.map((label) => (
              <View>
                <TouchableOpacity
                  style={{
                    backgroundColor:
                      this.state.goalChoosen === label.title
                        ? '#DADADA'
                        : 'white',
                    paddingHorizontal: screenWidth * 0.05,
                    borderRightColor: 'gray',
                    borderRightWidth: 1,
                  }}
                  underlayColor="#ffffff"
                  activeOpacity={0.8}
                  onPress={() => this.changeGoal(label.title)}>
                  <Text
                    style={[
                      styles.carrouselText,
                      {
                        color:
                          this.state.goalChoosen === label.title
                            ? 'black'
                            : '#757575',
                      },
                    ]}>
                    {label.title}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.headerContainerCarrousel}>
          <View
            style={[
              styles.carrouselOptions,
              { justifyContent: 'space-around', alignItems: 'center' },
            ]}>
            {this.state.goal.days.map((day) => (
              <TouchableOpacity onPress={() => this.changeDate(day)}>
                <View
                  style={[
                    styles.carrouselDays,
                    {
                      borderColor: day.color,
                      backgroundColor:
                        day.day + day.date === this.state.dateChoosen
                          ? '#70C5F3'
                          : 'white',
                      height:
                        day.day + day.date === this.state.dateChoosen
                          ? screenWidth * 0.165
                          : screenWidth * 0.13,
                      width:
                        day.day + day.date === this.state.dateChoosen
                          ? screenWidth * 0.165
                          : screenWidth * 0.13,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.carrouselDayText,
                      {
                        color:
                          day.day + day.date === this.state.dateChoosen
                            ? 'white'
                            : 'black',
                      },
                    ]}>
                    {day.day}
                  </Text>
                  <Text
                    style={[
                      styles.carrouselDayText2,
                      {
                        color:
                          day.day + day.date === this.state.dateChoosen
                            ? 'white'
                            : 'black',
                      },
                    ]}>
                    {day.date}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.graphContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.sectionText}>Completion</Text>
          </View>
          <TouchableOpacity style={styles.graph} onPress= {this.onPressCompGraph}>
            <Graph goal={this.state.day} width={screenWidth * 0.7} color={this.state.colorHolder} />
          </TouchableOpacity>
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.sectionText}>Success rate</Text>
          </View>
          <View style={styles.graph2}>
            <Graph goal={this.state.day} width={screenWidth * 0.55} color="green" />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CED0CE',
    marginTop: StatusBar.currentHeight || 0,
  },
  titleContainer: {
    marginVertical: screenWidth * 0.015,
    marginHorizontal: screenWidth * 0.05,
  },
  title: {
    fontSize: screenWidth * 0.09,
    color: '#5D4D4A',
    fontWeight: 'bold',
  },
  carrouselOptions: {
    flexDirection: 'row',
    marginVertical: screenWidth * 0.025,
  },
  carrouselText: {
    fontWeight: 'bold',
    fontSize: screenWidth * 0.05,
  },
  carrouselDays2: {
    borderRadius: 20,
    borderWidth: 0.8,
    borderColor: 'gray',
    height: screenWidth * 0.11,
    width: screenWidth * 0.12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carrouselDays: {
    borderRadius: 18,
    borderWidth: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carrouselDayText: {
    color: 'black',
    fontSize: screenWidth * 0.035,
    textAlign: 'center',
  },
  carrouselDayText2: {
    color: 'black',
    fontSize: screenWidth * 0.05,
    textAlign: 'center',
  },
  graph: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: screenWidth*0.05
  },
  sectionText: {
    fontWeight: 'bold',
    color: '#757575',
    fontSize: screenWidth * 0.06,
  },
  graph2: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    marginLeft: screenWidth * 0.11,
    marginBottom: screenWidth*0.05
  },
  separator: {
    height: screenWidth * 0.015,
    width: screenWidth * 0.015,
    alignSelf: 'center',
    position: 'absolute',
    borderRadius: 10,
  },
  graphContainer: {
    backgroundColor: 'white',
    marginHorizontal: 5,
    borderRadius: 10,
  },
  detailsContainer: {
    backgroundColor: 'white',
    marginTop: screenWidth * 0.025,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  headerContainer: {
    backgroundColor: 'white',
    marginBottom: screenWidth * 0.01,
  },
  headerContainerCarrousel: {
    backgroundColor: 'white',
    marginBottom: screenWidth * 0.01,
    borderRadius: 30,
  },
  tabStyle: {
    marginTop: screenWidth * 0.05,
    height: screenWidth * 0.1,
    width: screenWidth * 0.003,
    backgroundColor: '#CED0CE',
    position: 'absolute',
  },
});

export default StatisticsPage;
