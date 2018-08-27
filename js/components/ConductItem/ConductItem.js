import React, { Component } from "react";
import { Text, TouchableOpacity, Animated, View } from "react-native";
import styles from "./styles";
import Styles from "./../../config/styles.js";
import PropTypes from "prop-types";

// import Icon from "react-native-vector-icons/Ionicons";

class ConductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    };
  }

  _showText = () => {
    Animated.parallel([
      Animated.timing(this.opacity, {
        toValue: 1,
        duration: 500
      })
    ]).start();
    this.setState({ isHidden: false });
  };

  _hideText = () => {
    Animated.timing(this.opacity, {
      toValue: 0,
      duration: 500
    }).start();
    this.setState({ isHidden: true });
  };

  opacity = new Animated.Value(0);
  rotation = new Animated.Value(0);
  render() {
    // //TODO: '+' Rotation after being clicked
    // const spin = this.state.rotation.interpolate({
    //   inputRange: [0.5, 1],
    //   outputRange: ["0deg", "360deg"]
    // });

    return (
      <View key={this.props.conduct.id}>
        <TouchableOpacity
          onPress={() => {
            {
              this.state.isHidden === true
                ? this._showText(this.props.conduct.title)
                : this._hideText(this.props.conduct.title);
            }
          }}
        >
          <View style={styles.conductItem}>
            <Text style={[styles.codeHeader, Styles.font]}>
              {this.state.isHidden === true ? "+ " : "- "}
              {`${this.props.conduct.title}`}
            </Text>
          </View>
        </TouchableOpacity>
        {this.state.isHidden === true ? (
          <Text />
        ) : (
          <Animated.Text
            style={[{ opacity: this.opacity }, styles.codeText, Styles.font]}
          >{` ${this.props.conduct.description}`}</Animated.Text>
        )}
      </View>
    );
  }
}

ConductItem.propTypes = {
  conduct: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

export default ConductItem;
