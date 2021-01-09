import React from 'react';
import { Rating, AirbnbRating, Overlay } from 'react-native-elements';
import {View} from 'react-native'

export default class RateUs extends React.Component {
  toggleOverlay = () => {
    this.props.dropPress()
  }
  render() {
    return(
      <View>
        <Overlay
          isVisible = {this.props.activo}
          onBackdropPress={this.toggleOverlay}
        >
          <Rating/>
        </Overlay>
      </View>
    );
  }
}
