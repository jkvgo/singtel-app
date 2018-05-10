import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount, render} from 'enzyme';
import App from './../../App';

describe('App Component', () => {
	it('renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<App />, div);
	  ReactDOM.unmountComponentAtNode(div);
	});

	it('should render without throwing an error', () => {
		expect(shallow(<App/>).exists(<div className="App"></div>)).toBe(true)
	});

});


	
