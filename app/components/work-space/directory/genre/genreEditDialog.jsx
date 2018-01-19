import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import FlatButton from 'material-ui/FlatButton';
import Genre from '../../../../models/genreModel.js';
import './genreEditDialog.less';

const texts = {
    edittitle: 'Редактирование жанра',
    cancelButton: 'Отмена',
    saveButton: 'Сохранить',
    inputNameGenre: 'Название',
    inputBeautifulUrl: 'Url',
    labelForCheckBox: 'Отображать для пользователя'
};

const styles = {
    toggle: {
        marginTop: 14
    }
};

class GenreEditDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            beautifulUrl: '',
            visible: false
        };
        this.updateName = this.updateName.bind(this);
        this.updateUrl = this.updateUrl.bind(this);
        this.updateVisible = this.updateVisible.bind(this);
        this.editGenre = this.editGenre.bind(this);
    };
    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedGenre.name && nextProps.selectedGenre.beautifulUrl) {
            this.setState({
                name: nextProps.selectedGenre.name,
                beautifulUrl: nextProps.selectedGenre.beautifulUrl,
                visible: nextProps.selectedGenre.visible
            });
        }
    };
    updateName(event) {
        this.setState({
            name: event.target.value
        });
    };
    updateUrl(event) {
        this.setState({
            beautifulUrl: event.target.value
        });
    };
    updateVisible(event, isInputChecked) {
        this.setState({
            visible: isInputChecked
        })
    };
    editGenre() {
        var genre = new Genre();
        genre.id = this.props.selectedGenre.id;
        genre.name = this.state.name;
        genre.beautifulUrl = this.state.beautifulUrl;
        genre.visible = this.state.visible;

        this.props.editGenre(genre);
    };
    render() {
        return (
            <Dialog
                className='genre-dialog'
                title={texts.edittitle}
                modal={false}
                open={this.props.isOpen}>
                <div>
                    <TextField
                        hintText={texts.inputNameGenre}
                        name='name'
                        value={this.state.name}
                        onChange={this.updateName}
                        floatingLabelText={texts.inputNameGenre}
                        fullWidth={true}/>
                </div>
                <div>
                    <TextField
                        hintText={texts.inputNameGenre}
                        name='name'
                        value={this.state.beautifulUrl}
                        onChange={this.updateUrl}
                        floatingLabelText={texts.inputNameGenre}
                        fullWidth={true}/>
                </div>
                <div>
                    <Toggle
                        label={texts.labelForCheckBox}
                        labelPosition='right'
                        onToggle={this.updateVisible}
                        toggled={this.state.visible}
                        style={styles.toggle}/>
                </div>
                <div className='genre-dialog__footer'>
                    <FlatButton
                        label={texts.cancelButton}
                        secondary={true}
                        onClick={this.props.close}/>
                    <FlatButton
                        label={texts.saveButton}
                        secondary={true}
                        onClick={this.editGenre}/>
                </div>
            </Dialog>
        );
    };
};

export default GenreEditDialog;