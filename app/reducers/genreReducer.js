import GenreActions from '../constants/genreActions.js';
import Genre from '../models/genreModel.js';

var genreState = {
    lastUpdate: '1',
    isOpenEditDialog: false,
    genres: [],
    selectedGenre: new Genre()
};

function GenreReducer(state = genreState, action) {
    switch (action.type) {
        case GenreActions.GENRE_PAGE_LOAD:
            return Object.assign({}, state, {
                genres: action.genres
            });
        case GenreActions.GENRE_PAGE_ADD:
            return Object.assign({}, state, {
                genre: action.genre
            });
        case GenreActions.GENRE_PAGE_OPEN_EDIT_DIALOG:
        case GenreActions.GENRE_PAGE_CLOSE_EDIT_DIALOG:
            return Object.assign({}, state, {
                selectedGenre: action.selectedGenre,
                isOpenEditDialog: action.isOpenEditDialog
            });
        case GenreActions.GENRE_PAGE_EDIT:
            return Object.assign({}, state, {
                genres: action.listGenres,
                isOpenEditDialog: action.isOpenEditDialog
            });
        default: return state;
    }
};

export default GenreReducer;