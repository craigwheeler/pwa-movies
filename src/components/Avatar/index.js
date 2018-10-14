import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
    row: {
        display: 'flex',
        justifyContent: 'center',
    },
    avatar: {
        // marginLeft: 10,
    },
    bigAvatar: {
        width: 60,
        height: 60,
    },
};
function ImageAvatars(props) {
    const {classes} = props;
    return (
        <div className={classes.row}>
            <Avatar alt="logo" src="https://cdn.freebiesupply.com/logos/large/2x/reddit-2-logo-png-transparent.png" className={classes.avatar}/>
        </div>
    );
}
ImageAvatars.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ImageAvatars);
