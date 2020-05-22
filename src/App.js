import React from 'react';
import { NavBar, SlideView } from './components'; 
import styles from './App.module.css';
import { Typography, Button } from '@material-ui/core';
import { title, author, forSlides, againstSlides } from './api/should_college_be_free_store.js'


class App extends React.Component {
    
    state = {
        title,
        forSlides,
        againstSlides,
        isFirstView: true,
    }

    handleClick() {
        this.setState(state => ({
            isFirstView: !state.isFirstView
          }));
    }

    render() {

        return (
        <div>
            <div className={styles.navbar}>
                <NavBar />
            </div>

            <div className={styles.container}>
                <Typography variant="h4">{title}</Typography>
                <Typography variant="body2">{author}</Typography>
                <br /><br />
                <Button onClick={() => this.handleClick()}>
                    Change my view
                </Button>
            </div>


            <div>
                <SlideView 
                    slides={this.state.isFirstView ? forSlides : againstSlides} 
                />
            </div>

        </div>
        );
    }
}

export default App; 