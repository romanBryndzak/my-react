import React from 'react';
import { render } from '@testing-library/react';
import SocialNetworkApp from "./App";
import ReactDOM from 'react-dom';


test('render without crashing', () => {
    const div = document.createElement('div');
  ReactDOM.render(<SocialNetworkApp/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

// test('renders learn react link', () => {
//   const { getByText } = render(<SocialNetworkApp/>);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });