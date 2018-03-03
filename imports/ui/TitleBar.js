import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
  render() {
    return (
      <div className="title-bar">
        <div className="wrapper">
          <h1>{this.props.title}</h1>
          {this.props.subtitle ? (
            <h2 className="title-bar__subtitle">{this.props.subtitle}</h2>
          ) : null}
        </div>
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

// TitleBar.defaultProps = {
//   title: 'Default Title'
// };
