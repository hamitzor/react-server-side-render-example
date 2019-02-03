import React,{Component} from 'react'
import { hydrate } from 'react-dom'
import App from './Components/App'

class Main extends Component {
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }
  render() {
    return <App />
  }
}

hydrate(
  <Main />,
  document.querySelector('#root'),
)
