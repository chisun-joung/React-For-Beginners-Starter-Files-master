 import React from 'react';
 import Header from './Header';
 import Order from './Order';
 import Inventory from './Inventory';
 import Fish from './Fish';
 import sampleFishes from '../sample-fishes';


 class App extends React.Component {
     constructor() {
         super();
         this.addFish = this.addFish.bind(this);
         this.loadSamples = this.loadSamples.bind(this);
         this.state = {
             fishes: {},
             order: {}
         };
     }

     addFish(fish){
         const fishes_ = {...this.state.fishes};
         const timestamp = Date.now();
         fishes_['fish-${timestamp}'] = fish;
         this.setState({fishes_});
     }

     loadSamples() {
         this.setState({
             fishes: sampleFishes
         });
     }


     render() {
         return (
             <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood market" />
                    <ul className="list-of-fish">
                        { Object
                            .keys(this.state.fishes)
                            .map(key => <Fish key = {key} details={this.state.fishes[key]}/>)
                        }
                    </ul>
                </div>
                <Order />
                <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
            </div>
         )
     }
 }

 export default App;
