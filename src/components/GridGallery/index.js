import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
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
    },
    gridList: {
        // width: 500,
        // height: 'auto',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        // transform: 'translateZ(0)',
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
const tileData = [
    {
        thumbnail: 'http://unsplash.it/640x425',
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        thumbnail: 'http://unsplash.it/640x426',
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        thumbnail: 'http://unsplash.it/640x427',
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        thumbnail: 'http://unsplash.it/640x428',
        title: 'Image',
        author: 'author',
        cols: 3,
    },
    {
        thumbnail: 'http://unsplash.it/640x429',
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        thumbnail: 'http://unsplash.it/640x430',
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        thumbnail: 'http://unsplash.it/640x431',
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        thumbnail: 'http://unsplash.it/640x432',
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        thumbnail: 'http://unsplash.it/640x425',
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        thumbnail: 'http://unsplash.it/640x426',
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        thumbnail: 'http://unsplash.it/640x427',
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        thumbnail: 'http://unsplash.it/640x428',
        title: 'Image',
        author: 'author',
        cols: 3,
    },
    {
        thumbnail: 'http://unsplash.it/640x429',
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        thumbnail: 'http://unsplash.it/640x430',
        title: 'Image',
        author: 'author',
        cols: 2,
    }
];
const numCols = [2, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2]
function ImageGridList(props) {
    const {classes, posts} = props;
    console.log("posts: ", posts)
    return (
        <div className={classes.root}>
            <GridList cellHeight={250} className={classes.gridList} cols={2}>
                {posts.map((post, i) => (
                    <GridListTile key={i} cols={1}>
                        <img src={'https://image.tmdb.org/t/p/w500/' + post.poster_path}/>
                        <GridListTileBar
                            title={post.name || post.title}
                            // subtitle={<span>First Aired: {(post.first_air_date).substring(0, 4)}</span>}
                            // actionIcon={
                            //     <IconButton className={classes.icon}>
                            //         <InfoIcon/>
                            //     </IconButton>
                            // }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
ImageGridList.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ImageGridList);
