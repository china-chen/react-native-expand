import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
  },
  placeholder: {
    borderColor: '#ccc',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
});

function ExpandActionPanel(props) {
  return props.size > 1
    ?
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.container, props.containerStyle]}
    >
      <Text style={[styles.text, props.textStyle]}>{ props.text }</Text>
    </TouchableOpacity>
    :
    <View style={styles.placeholder} />;
}

ExpandActionPanel.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  containerStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  textStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
};

export default ExpandActionPanel;
