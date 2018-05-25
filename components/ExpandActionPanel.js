import React from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, TouchableOpacity, View, Image} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {},
  placeholder: {
    borderColor: '#ccc',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
});

function ExpandActionPanel(props) {
  return props.size > 3
    ?
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.container, props.containerStyle]}
    >
      <Image style={props.textStyle} source={props.text}/>
    </TouchableOpacity>
    :
    <View style={styles.placeholder}/>;
}

ExpandActionPanel.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.any.isRequired,
  size: PropTypes.number.isRequired,
  containerStyle: PropTypes.any,
  textStyle: PropTypes.any,
};

export default ExpandActionPanel;
