import React from 'react';

import { connect } from 'react-redux'
import { removeFeature } from '../actions';

const AddedFeature = props => {

  const removeFeatureDispatch = () => {
    props.removeFeature(props.feature)
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={removeFeatureDispatch}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {}
}

export default connect(
  mapStateToProps,
  { removeFeature }
)(AddedFeature);
