import React, {Component, Fragment} from "react";
import ReactDOM from "react-dom";
// import {Card, Icon, Image, Button} from 'semantic-ui-react'
// import styled from 'styled-components'
import axios from 'axios'
import MediaCard from './../Card'
import Grid from '@material-ui/core/Grid';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            subReddit: 'frontpage',
        };
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData = () => {
        const baseUrl = 'https://www.reddit.com/r/';
        const extJson = '/.json?raw_json=1';
        const postLimit = '&limit=20';
        axios.get(baseUrl + this.state.subReddit + extJson + postLimit)
            .then((response) => {
                this.setState({
                    posts: response.data.data.children,
                });
            })
            .catch((error) => {
                console.log('Error fetching data:', error);
            });
    }
    handleChange = (e) => {
        this.setState({subReddit: e.target.value.replace(/ /g, '')});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.fetchData();
    }
    toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    render() {
        const masonryOptions = {
            // transitionDuration: 100,
            fitWidth: true,
            transitionDuration: '0.5s',
            gutter: 10
        };
        const style = {
            margin: '0 auto',
        };
        return (
            <Grid container>
                <Grid item sm>
                    <MediaCard/>
                </Grid>
                <Grid item sm>
                    <MediaCard/>
                </Grid>
                <Grid item sm>
                    <MediaCard/>
                </Grid>
                <Grid item sm>
                    <MediaCard/>
                </Grid>
                <Grid item sm>
                    <MediaCard/>
                </Grid>
                <Grid item sm>
                    <MediaCard/>
                </Grid>
            </Grid>
        )
    }
}
