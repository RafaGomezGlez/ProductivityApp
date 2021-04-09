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
import {generalData} from '../data/Goals'
import {styles} from '../styles/StatisticsStyles'
import Days from '../components/CarrouselDays'
import Goals from '../components/CarrouselGoals'
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
    generalData.map((goal) =>
      goal.title === this.state.goalChoosen
        ? this.setState({ goal: goal })
        : null
    );
  };

  setFocusDay = () => {
    generalData[0].days.map((day) => {
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
    generalData.map((meta)=>{
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

          <Goals 
            goalChoosen={this.state.goalChoosen} 
            changeGoal={this.changeGoal} 
          />

        </View>

        <View style={styles.headerContainerCarrousel}>
          <Days 
            goal={this.state.goal} 
            dateChoosen={this.state.dateChoosen} 
            changeDate={this.changeDate} 
          /> 
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



export default StatisticsPage;