import React, { Component } from 'react'
import withStyles from 'react-jss'


const styles = {
  Header: {
    color: 'green'
  }
}

class App extends Component {

  handleMouseOver = (e) => {
    console.log('Class properties works!')
  }

  render() {

    const { classes } = this.props
    return <h1 className={classes.Header}>Hello World</h1>
  }
}

export default withStyles(styles)(App)
