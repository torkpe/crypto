import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ConnectedApp, {App} from './App';
import configureStore from './store/store';
const store = configureStore();
configure({ adapter: new Adapter() });

describe('Cryptos component', () => {
  const props = {
    getCryptos: jest.fn(),
    cryptosData: [
      {
        id: 1,
        symbol: "BTC",
        name: "Bitcoin",
        quote: {
          USD: {
            price: 8233.90931035
          }
        },
        num_market_pairs: 7937
      },
      {
        id: 2,
        symbol: "ETH",
        name: "Ethereum",
        quote: {
          USD: {
            price: 500.90931035
          }
        },
        num_market_pairs: 39
      },
    ],
  }


  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <ConnectedApp />
      </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('calls `getCryptos`', () => {
    const component = shallow(
        <App {...props}/>).instance()
    const spy = jest.spyOn(component.props, 'getCryptos');
    component.componentDidMount();
    expect(spy).toHaveBeenCalled();
  });

  it('does not render data when fetching is true', () => {
    const component = mount(
        <App {...{fetching: true, getCryptos: jest.fn(),}}/>)
    const loading = 'Please wait, fetching data...';
    expect(component.contains(loading)).toEqual(true);
  });
})

