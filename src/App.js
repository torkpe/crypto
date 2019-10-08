import React from 'react';
import { connect } from 'react-redux';
import { getCryptos } from './actions/cryptos.action';
import './App.css';
import TableRow from './components/Table';
import Loading from './components/Loading';

export class App extends React.Component {
  componentDidMount() {
    this.props.getCryptos();
  }

  render() {
    return (
      <React.Fragment>
        {
          this.props.fetching ?
          <Loading />
          :
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Symbol</th>
                <th scope="col">Name</th>
                <th scope="col">Price (USD)</th>
                <th scope="col">No. of market pairs</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.cryptosData.map(crypto => 
                  <TableRow
                    key={crypto.id}
                    crypto={crypto}
                  />)
              }
            </tbody>
          </table>
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ cryptos }) => {
  return({
  cryptosData: cryptos.data,
  fetching: cryptos.fetching,
  error: cryptos.error
})};

export default connect(mapStateToProps, {
  getCryptos,
})(App);
