import React, { Component } from 'react';
import GenresTable from './genresTable.jsx';
import GenreEditDialog from './genreEditDialog.jsx';

class Genre extends React.Component {
    constructor(props) {
        super(props);
        this.editGenre = this.editGenre.bind(this);
    };
    componentWillMount() {
        this.props.loadGenres();
    };
    editGenre(editedGenre) {
        if (editedGenre) {
            var genres = this.props.genreState.genres;
            this.props.editGenre(genres, editedGenre);
        }
    }
    render() {
        return (
            <div>
                <GenresTable
                    genres={this.props.genreState.genres}
                    openEditDialog={this.props.openEditDialog} />
                <GenreEditDialog isOpen={this.props.genreState.isOpenEditDialog}
                    close={this.props.closeEditDialog}
                    selectedGenre={this.props.genreState.selectedGenre}
                    editGenre={this.editGenre} />
            </div>
        );
    };
};

export default Genre;