import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import Genre from '../components/work-space/directory/genre/genre.jsx';
import { loadGenres, openEditDialog, closeEditDialog, editGenre } from '../actions/genreActions.js';

var GenreController = connect(
    (state) => ({
        genreState: state.genreReducer
      }),
      dispatch => bindActionCreators({
        loadGenres,
        openEditDialog,
        closeEditDialog,
        editGenre
      },dispatch)   
)(Genre);

export default GenreController;
