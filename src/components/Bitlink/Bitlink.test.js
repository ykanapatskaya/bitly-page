import React from 'react';
import { shallow } from 'enzyme';
import Bitlink from './Bitlink';

describe('Bitlink', () => {
  let link = {
    title: '',
    long_url: '',
    short_url: '',
    global_count: 0
  }

  it('is a React instance', () => {
    let wrapper = shallow(<Bitlink link={link} />)
    expect(wrapper.instance()).toBeTruthy();
  });

  it('one links', () => {
    link.title = null;
    let wrapper = shallow(<Bitlink link={link} />)
    expect(wrapper.find('.Bitlink__link').length).toBe(1);
  });

  it('two links', () => {
    link.title = 'Title';
    let wrapper = shallow(<Bitlink link={link} />)
    expect(wrapper.find('.Bitlink__link').length).toBe(2);
  });

  it('commas numbers', () => {
    link.global_count = 10000;
    let wrapper = shallow(<Bitlink link={link} />)
    console.log(wrapper.find('.Bitlink__counter').text())
    expect(wrapper.find('.Bitlink__counter').text()).toBe('10,000');
  });

})
