import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import ModeEdit from 'material-ui-icons/ModeEdit';
import './genresTable.less';

const texts = {
    firstColumn: 'Название',
    secondColumn: 'Отображать для пользователя',
    edit: 'Редактировать'
};

const tableSettings = {
    fixedHeader: true,
    height: '70vh',
    selectable: false
};

const tableRowSettings = {
    hoverable: true,
    selectable: false,
    selected: false
}

const tableBodySettings = {
    displayRowCheckbox: false,
};

const tableHeaderSettings = {
    displaySelectAll: false
};

var style = {
    row: {
        height: '30px'
    },
    column: {
        height: '30px',
        verticalAlign: 'middle'
    },
    columnCentre: {
        textAlign: 'center',
        height: '30px',
        verticalAlign: 'middle'
    },
    modeEditBlue: {
        color: 'red',
        height: '50px'
    }
};

const colors = {
    blue: '#00BCD4',
    red: '#D50000'
};

class GenresTable extends React.Component {
    constructor(props) {
        super(props);
        this.openEditDialog = this.openEditDialog.bind(this);
    };
    getStatusIcon(isVisible) {
        return isVisible ? Visibility : VisibilityOff;
    };
    openEditDialog(genreId) {
        this.props.openEditDialog(this.props.genres, genreId)
    };
    render() {
        return (
            <div>
                <Table
                    fixedHeader={tableSettings.fixedHeader}
                    height={tableSettings.height}
                    selectable={tableSettings.selectable}>
                    <TableHeader
                        displaySelectAll={tableHeaderSettings.displaySelectAll}
                        adjustForCheckbox={false}>
                        <TableRow
                            selectable={tableRowSettings.selectable}
                            selected={tableRowSettings.selected}>
                            <TableHeaderColumn>{texts.firstColumn}</TableHeaderColumn>
                            <TableHeaderColumn style={style.columnCentre}>{texts.secondColumn}</TableHeaderColumn>
                            <TableHeaderColumn style={style.columnCentre}></TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={tableBodySettings.displayRowCheckbox}>
                        {this.props.genres.map((genre) => {
                            return (
                                <TableRow
                                    key={genre.id}
                                    hoverable={tableRowSettings.hoverable}
                                    selectable={tableRowSettings.selectable}
                                    selected={tableRowSettings.selected}
                                    style={style.row}>
                                    <TableRowColumn style={style.column}>
                                        {genre.name}
                                    </TableRowColumn>
                                    <TableRowColumn
                                        style={style.columnCentre}>
                                        {
                                            genre.visible ?
                                                <Visibility color={colors.blue} /> :
                                                <VisibilityOff color={colors.colors} />
                                        }
                                    </TableRowColumn>
                                    <TableRowColumn
                                        style={style.columnCentre}>
                                        <IconButton
                                            key = {genre.id}
                                            onClick={() => this.openEditDialog(genre.id)}>
                                            <ModeEdit
                                                color={colors.blue}/>
                                        </IconButton >
                                    </TableRowColumn>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </div>
        );
    };
};

export default GenresTable;