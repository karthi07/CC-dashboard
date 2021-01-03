/* eslint-disable react/no-deprecated */
import React from 'react';
import './App.sass';
import Header from './components/Header';
import Cards from './components/Cards';
import Web3 from 'web3';
import VPF from './abis/VPF.json';
import { ThemeProvider } from 'react-bootstrap';

class App extends React.Component {
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      account: '',
      vpf: null,
      cardData: {},
      loading: true,
    };

    // this.uploadImage = this.uploadImage.bind(this);
    // this.tipImageOwner = this.tipImageOwner.bind(this);
    // this.captureFile = this.captureFile.bind(this);
  }
  async loadBlockchainData() {
    const web3 = window.web3;
    // Load account
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    // Network ID
    const networkId = await web3.eth.net.getId();
    const networkData = VPF.networks[networkId];
    if (networkData) {
      const vpf = new web3.eth.Contract(VPF.abi, networkData.address);
      this.setState({ vpf });
      const t2 = await vpf.methods.vpfs(0).call();
      //this.setState({ cardData });
      console.log('BC data: ', t2);
      this.setState({ loading: false });
    } else {
      window.alert('Decentragram contract not deployed to detected network.');
    }
  }

  render() {
    return (
      <div className="dashboard-ctn">
        <Header />
        <div className="row mx-0">
          <div className="left-bar col-3">
            <img className="mx-3 my-5" src="images/left-panel.svg" />
          </div>
          <Cards data={this.state.cardData} />
        </div>
      </div>
    );
  }
}

export default App;
