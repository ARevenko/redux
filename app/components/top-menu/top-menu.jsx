import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';

import './style.less';

const title= 'Let\'s Play';

class TopMenu extends React.Component {
    render() {
        return (
            <Toolbar>
                <ToolbarGroup>
                    <ToolbarTitle text = {title} />
                </ToolbarGroup>
            </Toolbar>
        );
    };
};

export default TopMenu;