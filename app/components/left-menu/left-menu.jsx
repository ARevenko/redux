import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { List, ListItem } from 'material-ui/List';
import Book from 'material-ui-icons/Book';
import Home from 'material-ui-icons/Home';

import './left-menu.less';

class LeftMenu extends React.Component {
    render() {
        return (
            <div className="left-menu">
                <List>
                    <ListItem
                         leftIcon={<Home/>}
                         primaryText={<Link to="/administrationapi" >Домашняя</Link>}
                         />
                    <ListItem
                        primaryText="Справочник"
                        leftIcon={<Book/>} initiallyOpen={true}
                        initiallyOpen={false}
                        primaryTogglesNestedList={true}
                        nestedItems={[
                            <ListItem key={1}
                                primaryText={
                                    <Link to="/administrationapi/genre">Жанры</Link>
                                }
                            />
                        ]}
                    />
                </List>
            </div>
        );
    };
};

export default LeftMenu;