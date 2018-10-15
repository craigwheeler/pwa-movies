import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LiveTv from '@material-ui/icons/LiveTv';
import SettingsIcon from '@material-ui/icons/Settings';
import MovieCreation from '@material-ui/icons/MovieCreation';

export const sidebarItemsOne = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <LiveTv/>
            </ListItemIcon>
            <ListItemText primary="TV Shows"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <MovieCreation/>
            </ListItemIcon>
            <ListItemText primary="Movies"/>
        </ListItem>
    </div>
);
export const sidebarItemsTwo = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <SettingsIcon/>
            </ListItemIcon>
            <ListItemText primary="Settings"/>
        </ListItem>
    </div>
);
