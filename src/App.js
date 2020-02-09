import React from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Logo from './components/logo/logo';
import ImageLinkForm from './components/imagelinkform/imagelinkform';
import FaceRecognition from './components/facerecognition/facerecognition';
import Params from './components/particles';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '584db3fb7d4e46dcac452637f5182bf4'
});


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {}
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace= data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height),
    }
  } 

  displayFaceBox = (box) => {
    this.setState({box: box})
  }

  onInputChange = (event) => {
      this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err));
  };


  render(){
    return(
      <div className='App'>
        <Particles className='particles'
                params={Params} />
        <Logo />
        <ImageLinkForm 
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition 
          box={this.state.box}
          imageUrl={this.state.imageUrl}/>
        
      </div>
    )
  }
}

//<Logo />
//<ImageLinkForm />
//<FaceRecognition />


export default App;
