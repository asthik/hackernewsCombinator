import React from 'react';
import Storypage from './components/Storypage';
import Storyitem from './components/Storyitem';
import Enzyme, {shallow, mount} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter : new EnzymeAdapter() });

const findByTest = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`);
}

describe('<Storypage />', () => {
    it('renders storypage component without error', ()=> {
        const wrapper = shallow(<Storypage />);
        // const appComp = wrapper.find('[data-test="storypagecomponent"]');
        const appComp = findByTest(wrapper, 'storypagecomponent');
        expect(appComp.length).toBe(1);
    });
    
    it('renders an `.tabledata`', () => {
        const wrapper = mount(<Storypage />);
        expect(wrapper.find('.tabledata')).toHaveLength(1);
    });
    it('renders an `.btngroup` button group class', () => {
        const wrapper = mount(<Storypage />);
        expect(wrapper.find('.btngroup')).toHaveLength(1);
    });

    // it('renders Storyitem component', () => {
    //     const wrapper = mount(<Storypage />);
    //     expect(wrapper.find(Storyitem)).toHaveLength(1);
    //   });
});
