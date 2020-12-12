import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      shibe: [],
      // searchfield: ''
    }
  }
  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl = 'http://shibe.online/api/shibes?count=10&urls=true&httpsUrls=true';
    fetch(proxyurl + apiUrl)
      .then((response) => response.json())
      .then((data) => this.setState({shibe:data}, () => {console.log(this.state.shibe)}))
      .catch(() => console.log("Can’t access " + apiUrl + " response. Blocked by browser?"));
  }




  render() {
    const robots = this.state.shibe;
    const cardComponent = robots.map((i) => {
      return ( 
        <div className = 'bg-light-red dib v-top center w-third br3 pa2 mw-100 mh-100 ma2 grow bw2 shadow-5'>
            <img alt = 'robots' src = {i}/>
        </div>
        )
    })

    return (
      <div>
      <div>
        <header className= 'tc ph4 pt4'>
          <h1 className="f3 f2-m f1-l fw2 black-90 mv3">Shibe Online</h1>
          <h2 className="f5 f4-m f3-l fw2 black-50 mt0 lh-copy"> Much Wow, Very Awesome</h2>
        </header>
        <section class="mw5 mw9-ns center bg-light-gray pa3 ph5-ns">


          {cardComponent}

        </section>

      </div>
    </div>

    )
  }
}
export default App;


/* <img alt = 'shibe' src = {`https://robohash.org/${props.id}?200x200`} / > */

/* http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true */