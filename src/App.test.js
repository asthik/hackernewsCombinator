import React from 'react';
// import { render } from '@testing-library/react';
import App from './components/App';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

Enzyme.configure({ adapter : new EnzymeAdapter() });

test('renders without error', ()=> {

});
