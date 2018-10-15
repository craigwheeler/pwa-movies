import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        paddingTop: 60,
        paddingBottom: 5,
    },
    container: {
        padding: 2,
    },
    image: {
        width: '100%',
    },
    titleBar: {
        background:
        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'white',
    },
});
function ImageGridList(props) {
    const {classes, posts} = props;
    console.log("posts: ", posts)
    return (
        <div className={classes.root}>
            <Grid container>
                {posts.map((post, i) => (
                    <Grid item xs={6} md={3} lg={2} className={classes.container}>
                        <img src={'https://image.tmdb.org/t/p/w500/' + post.poster_path} className={classes.image}/>
                    </Grid>
                ))}
            </Grid>

            {/*<GridList cellHeight={250} cols={2} container>*/}
            {/*{posts.map((post, i) => (*/}
            {/*<GridListTile key={i}>*/}
            {/*<img src={'https://image.tmdb.org/t/p/w500/' + post.poster_path}/>*/}
            {/*<GridListTileBar*/}
            {/*title={post.name || post.title}*/}
            {/*// subtitle={<span>First Aired: {(post.first_air_date).substring(0, 4)}</span>}*/}
            {/*// actionIcon={*/}
            {/*//     <IconButton className={classes.icon}>*/}
            {/*//         <InfoIcon/>*/}
            {/*//     </IconButton>*/}
            {/*// }*/}
            {/*/>*/}
            {/*</GridListTile>*/}
            {/*))}*/}
            {/*</GridList>*/}

        </div>
    );
}
ImageGridList.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ImageGridList);
