import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../actions';

const AdditionalFeature = props => {

  const addFeatureDispatch = () => {
    props.addFeature(props.feature)
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={addFeatureDispatch}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {}
}

export default connect(
  mapStateToProps,
  { addFeature }
)(AdditionalFeature);
