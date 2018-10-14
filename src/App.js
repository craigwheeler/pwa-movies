import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {mailFolderListItems, otherMailFolderListItems} from './tileData';
import Grid from '@material-ui/core/Grid'
import SearchBar from './components/TopDrawer'
import axios from 'axios'
import GridList from './components/GridList'
import GridGallery from './components/GridGallery'
import Logo from './components/Avatar'
import MenuIcon from '@material-ui/icons/Menu';
import ViewList from '@material-ui/icons/ViewList';
import ViewModule from '@material-ui/icons/ViewModule';
import BottomNavigation from './components/BottomNavigation'

const drawerWidth = 240;
const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    appTitle: {
        display: 'flex',
        alignItems: 'center',
    },
    searchIcon: {
        display: 'flex',
        alignItems: 'center',
    },
    appFrame: {
        zIndex: 1,
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    appBar: {
        position: 'fixed',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    'appBarShift-left': {
        marginLeft: drawerWidth,
    },
    'appBarShift-right': {
        marginRight: drawerWidth,
    },
    menuButton: {
        marginLeft: 30,
    },
    hide: {
        display: 'none',
    },
    drawerPaper: {
        position: 'fixed',
        width: drawerWidth,
        overflow: "auto",
        height: "100vh",
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        // paddingTop: 25,
        paddingBottom: 20,
        backgroundColor: theme.palette.background.default,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    'content-right': {
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    'contentShift-left': {
        marginLeft: 0,
    },
    'contentShift-right': {
        marginRight: 0,
    },
});
class PersistentDrawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            subReddit: 'funny',
            open: false,
            anchor: 'left',
            cardView: true,
            galleryView: false,
        };
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData = () => {
        const baseUrl = 'https://api.themoviedb.org/3/tv/popular?api_key=d06212a1c793be8e5b14092f02da816c';
        const extJson = '/.json?raw_json=1';
        const postLimit = '&limit=50';
        const {subReddit} = this.state;
        axios.get(baseUrl)
            .then((response) => {
                this.setState({
                    posts: response.data.results,
                });
            })
            .catch((error) => {
                console.log('Error fetching data:', error);
            });
    }
    handleDrawerOpen = () => {
        this.setState({open: true});
    };
    handleDrawerClose = () => {
        this.setState({open: false});
    };
    handleChangeAnchor = event => {
        this.setState({
            anchor: event.target.value,
        });
    };
    handleCardView = () => {
        this.setState({
            cardView: true,
            galleryView: false,
        });
    }
    handleGalleryView = () => {
        this.setState({
            cardView: false,
            galleryView: true,
        });
    }
    render() {
        const {classes, theme} = this.props;
        const {anchor, open, posts} = this.state;

        console.log("posts: ", posts)

        const drawer = (
            <Drawer
                variant="persistent"
                anchor={anchor}
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={this.handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </IconButton>
                </div>
                <Divider/>
                <List>{mailFolderListItems}</List>
                <Divider/>
                <List>{otherMailFolderListItems}</List>
            </Drawer>
        );
        let before = null;
        let after = null;
        if (anchor === 'left') {
            before = drawer;
        } else {
            after = drawer;
        }
        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBar
                        className={classNames(classes.appBar, {
                            [classes.appBarShift]: open,
                            [classes[`appBarShift-${anchor}`]]: open,
                        })}
                    >
                        <Toolbar disableGutters={!open}>
                            <Grid container>
                                <Grid item xs={3}>
                                    <IconButton
                                        color="inherit"
                                        aria-label="Open drawer"
                                        onClick={this.handleDrawerOpen}
                                        className={classNames(classes.menuButton, open && classes.hide)}
                                    >
                                        <MenuIcon/>
                                    </IconButton>
                                </Grid>
                                <Grid item xs={3}>
                                    <IconButton
                                        color="inherit"
                                        aria-label="Open drawer"
                                        onClick={this.handleCardView}
                                        className={classNames(classes.menuButton, open && classes.hide)}
                                    >
                                        <ViewList/>
                                    </IconButton>
                                </Grid>
                                <Grid item xs={3}>
                                    <IconButton
                                        color="inherit"
                                        aria-label="Open drawer"
                                        onClick={this.handleGalleryView}
                                        className={classNames(classes.menuButton, open && classes.hide)}
                                    >
                                        <ViewModule/>
                                    </IconButton>
                                </Grid>
                                {/*<Grid item xs={6} className={classes.appTitle}>*/}
                                {/*<Typography variant="h6" color="inherit" noWrap>*/}
                                {/*Browse Reddit*/}
                                {/*</Typography>*/}
                                {/*</Grid>*/}
                                <Grid item xs={3} className={classes.searchIcon}>
                                    <SearchBar/>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                    {before}
                    <main
                        className={classNames(classes.content, classes[`content-${anchor}`], {
                            [classes.contentShift]: open,
                            [classes[`contentShift-${anchor}`]]: open,
                        })}
                    >
                        {/*<div className={classes.drawerHeader}/>*/}


                        {(this.state.cardView) && <GridList posts={posts}/>}
                        {(this.state.galleryView) && <GridGallery posts={posts}/>}


                    </main>
                    {after}
                    {/*<BottomNavigation/>*/}
                </div>
            </div>
        );
    }
}
PersistentDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};
export default withStyles(styles, {withTheme: true})(PersistentDrawer);
