import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        borderRadius: 0,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    media: {
        height: 140,
        objectFit: 'cover',
    },
};
function Index(props) {
    const {classes, posts} = props;
    // console.log("posts: ", props.posts)
    return (
        <Grid container>
            {posts.map((post, i) =>
                <Grid item md={3}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={post.data.preview.images[0].source.url}
                                title="Card Title"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="h6">
                                    {post.data.title} ...
                                    {post.data.subreddit_name_prefixed}
                                </Typography>
                                <Typography component="p">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias amet consequatur cum eaque eius, est exercitationem facere iusto minus necessitatibus nisi non officia quia ratione repudiandae sit ut vero.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            )}
        </Grid>
    );
}
Index.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Index);
