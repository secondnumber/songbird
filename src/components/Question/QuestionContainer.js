import React from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import {chooseHidden} from '../../../redux/scpReducer';

const mapStateToProps = (state) => ({
    who: state.scp.who,
});

const QuestionContainer = connect(mapStateToProps, {chooseHidden})(Question);

export default QuestionContainer;