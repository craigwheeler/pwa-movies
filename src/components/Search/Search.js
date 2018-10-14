import React from "react";
import ReactDOM from "react-dom";
import {Card, Icon, Image, Button} from 'semantic-ui-react'
import styled from 'styled-components'
import axios from 'axios'
import Masonry from 'react-masonry-component'

const Container = styled.div`
    margin-top: 100px;
    width: 100%;
    @media (max-width: 767px) {
          margin-top: 170px;
    }
    .masonry-grid {
      top: 0;
      //left: 10%;
    }
`;
const HeroSection = styled.div`
  box-shadow: 0 1px 50px #000;
  padding: 15px 0;
  margin-bottom: 2em;
  width: 100%;
  //position: fixed;
  top: 0;
  z-index: 99;
  background-color: #222;
  @media (max-width: 767px) {
    position: absolute;
    padding: 15px 0 0;
  }
`;
const HeroCaption = styled.div`
    color: #c2c2c2;
    padding: 1em 0;
    text-align: center;
    h1 {
      text-transform: uppercase;
    }
    @media (max-width: 767px) {
      small {
        font-size: 10px;
      }
    }
`;
const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 500px) {
      display: block;
      text-align: center;
  }
`;
const Input = styled.div`
    width: 40%;
    @media (max-width: 767px) {
      width: 75%;
      margin: 0 auto;
    }
    input {
      padding: 16.5px;
      border-radius: 0;
      color: #fff;
      font-size: 1.2em;
      text-align: center;
      border: 1px solid rgba(255,255,255,0.4);
      background-color: #000;
      width: 100%;
        &:focus {
         outline: none;
        }
    }
`;
const SubmitButton = styled.div`
  button {
    background-color: #000;
    color: #fff;
    padding: 1.5em 3em;
    letter-spacing: 2px;
    border: 1px solid rgba(255,255,255,0.4);
    font-weight: 100;
    font-size: 0.9em;
    text-transform: uppercase;
    margin-left: 0.2em;
    &:hover {
        background-color: rgba(255,255,255,0.2);
    }
    &:focus {
        outline: none;
    }
    @media (max-width: 767px) {
      width: 75%;
      margin: 10px auto;
    }
  }
`;
const SemanticUiCard = styled.div`
  justify-content: center;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 10px;
  .card {
    background-color: #111;
    box-shadow: none;
    height: 100%;
    border-radius: 0;
    // @media (max-width: 767px) {
    //   width: calc(100% - 4em)!important;
    //   margin: 1em 2em;
    // }
    //img {
    //    width: 100%;
    //}
    .content {
      .header {
        color: #999;
      }
      .description {
        color: #ccc;
        line-height: 1.3;
        font-size: 1.2em;
        padding-bottom: 1em;
        border-bottom: 1px solid rgba(255,255,255,0.3);
      }
      .meta {
        margin-top: 1em;
        font-size: 0.8em;
        color: #d4d4d5;
      }
    }
    .extra {
        display: flex;
        justify-content: space-between;
        padding: 0 1em 1em 1em;
      a {
        &:not(.ui) {
          color: #ccc;
        }
      }
    }
  
}
`;
const ToTop = styled.div`
  position: fixed;
  bottom: 1em;
  right: 1em;
`;

export default class Search extends React.Component {
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
        const postLimit = '&limit=200';
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
            <Container>
                <form>
                    <HeroSection>
                        <SearchContainer>
                            <Input>
                                <input placeholder="Search..." type="text" value={this.state.subReddit} onChange={this.handleChange}/>
                            </Input>
                            <SubmitButton>
                                <button type="submit" onClick={this.handleSubmit}>Search</button>
                            </SubmitButton>
                        </SearchContainer>
                    </HeroSection>
                </form>
            </Container>
        )
    }
}
