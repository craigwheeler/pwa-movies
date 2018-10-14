import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import {mailFolderListItems, otherMailFolderListItems} from './../../tileData'
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    textField: {
        marginLeft: 15,
        width: '90%',
    },
};
class TemporaryDrawer extends React.Component {
    state = {
        top: false,
        left: false,
        bottom: false,
        right: false,
    };
    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };
    render() {
        const {classes} = this.props;
        const fullList = (
            <div className={classes.fullList}>
                <List>{mailFolderListItems}</List>
                <Divider/>
                {/*<List>{otherMailFolderListItems}</List>*/}
                {/*<Divider/>*/}
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="standard-search"
                        label="Search a Subreddit"
                        type="search"
                        className={classes.textField}
                        margin="normal"
                    />
                </form>
            </div>
        );
        return (
            <div>
                <Button
                    color="inherit"
                    onClick={this.toggleDrawer('top', true)}>
                    <SearchIcon/>
                </Button>

                <Drawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        // onClick={this.toggleDrawer('top', false)}
                        // onKeyDown={this.toggleDrawer('top', false)}
                    >
                        {fullList}
                    </div>
                </Drawer>
            </div>
        );
    }
}
TemporaryDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(TemporaryDrawer);
