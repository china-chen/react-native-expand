import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import ExpandActionPanel from './ExpandActionPanel';

const styles = StyleSheet.create({
  panel: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
});

export default class ExpandablePanel extends React.Component {
  constructor(props) {
    super(props);
    this.getExpandText = this.getExpandText.bind(this);
    this.handleExpandPress = this.handleExpandPress.bind(this);
    this.state = { isExpanded: false };
  }

  getExpandText() {
    const { expandText, collapseText } = this.props;
    return this.state.isExpanded ? collapseText : expandText;
  }

  handleExpandPress() {
    const { isExpanded } = this.state;
    this.setState({
      isExpanded: !isExpanded,
    });
  }

  renderData() {
    const { dataSource, minRowCount } = this.props;
    const rowsData = this.state.isExpanded ? dataSource : dataSource.slice(0, minRowCount);
    return rowsData.map((row, index) => (this.props.renderRow(row, index)));
  }

  render() {
    const {
      dataSource,
      contentPanelStyle,
      footerPanelStyle,
      footerTextStyle,
      renderHeader,
    } = this.props;
    return (
      <View style={styles.panel}>
        { renderHeader && renderHeader() }
        <View style={contentPanelStyle}>
          { this.renderData() }
        </View>
        <ExpandActionPanel
          onPress={this.handleExpandPress}
          text={this.getExpandText()}
          size={dataSource.length}
          containerStyle={footerPanelStyle}
          textStyle={footerTextStyle}
        />
      </View>
    );
  }
}

ExpandablePanel.propTypes = {
  dataSource: PropTypes.array.isRequired,
  renderRow:PropTypes.func.isRequired,
  renderHeader: PropTypes.func,
  expandText: PropTypes.string,
  collapseText: PropTypes.string,
  contentPanelStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  footerPanelStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  footerTextStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  minRowCount: PropTypes.number,
};

ExpandablePanel.defaultProps = {
  expandText: '↓ Load More',
  collapseText: '↑ Collapse',
  minRowCount: 1,
};
