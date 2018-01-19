import GenreActions from '../constants/genreActions.js';
import Genre from '../models/genreModel.js';
import axios from 'axios';

function loadGenres() {
    return dispatch => {
        // axios.get('url')
        //     .then(function (response) {
        //         var loadedData = [];
        //         if (response && response.data && response.data.data) {
        //             response.data.data.forEach(function (item, index, array) {
        //                 var genre = new Genre(item);
        //                 loadedData.push(genre);
        //             });
        //         }
        //         dispatch({
        //             type: GenreActions.GENRE_PAGE_LOAD,
        //             genres: loadedData
        //         })
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });

        var loadedData = []
        var data = [
            {
                "Name": "MOBA",
                "BeautifulUrl": "moba",
                "Visible": true,
                "Id": "1",
                "CreateDate": "06.13.2016",
                "LastModifyDate": "06.13.2016"
            },
            {
                "Name": "Point-and-Click",
                "BeautifulUrl": "point-and-click",
                "Visible": true,
                "Id": "2",
                "CreateDate": "03.22.2017",
                "LastModifyDate": "03.22.2017"
            }
        ];
        data.forEach(function (item, index, array) {
            var genre = new Genre(item);
            loadedData.push(genre);
        });

        dispatch({
            type: GenreActions.GENRE_PAGE_LOAD,
            genres: loadedData
        })
    }
};

function openEditDialog(listGenres, genreId) {
    var filteredGenres = listGenres.filter(function (genre) {
        return genre.id === genreId;
    });
    var genreForEdit = null;
    if (filteredGenres.length > 0) {
        genreForEdit = filteredGenres[0];
    }

    return dispatch => {
        dispatch({
            type: GenreActions.GENRE_PAGE_OPEN_EDIT_DIALOG,
            selectedGenre: genreForEdit,
            isOpenEditDialog: true
        });
    };
};

function editGenre(listGenres, editedGenre) {
    return dispatch => {
        listGenres.forEach(function (genre) {
            if (genre.id === editedGenre.id) {
                genre.name = editedGenre.name;
                genre.beautifulUrl = editedGenre.beautifulUrl;
                genre.visible = editedGenre.visible;
            }
        });
        dispatch({
            type: GenreActions.GENRE_PAGE_EDIT,
            listGenres: listGenres,
            isOpenEditDialog: false
        });
    };
};

function closeEditDialog() {
    return dispatch => {
        dispatch({
            type: GenreActions.GENRE_PAGE_CLOSE_EDIT_DIALOG,
            selectedGenre: new Genre(),
            isOpenEditDialog: false
        });
    };
};

export { loadGenres, openEditDialog, closeEditDialog, editGenre };