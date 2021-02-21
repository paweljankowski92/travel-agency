import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate correct link', () => {
    const expectedLinkId = 'abc';
    const expectedLink = '/trip/abc';
    const component = shallow(<TripSummary
      id={expectedLinkId}
      days={1}
      name='name'
      image='image.jpg'
      cost='dolar'
      tags={[]}
    />);

    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });

  it('img has correct src and alt', () => {
    const expectedSrc = 'image.jpg';
    const expectedAlt = 'name';
    const component = shallow(<TripSummary
      image={expectedSrc}
      id='abc'
      days={1}
      name={expectedAlt}
      cost='dolar'
      tags={[]}
    />);

    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('renders correct props name,cost,days', () => {
    const expectedNameProp = 'Togo';
    const expectedCostProp = 'dolar';
    const expectedDaysProp = 1;

    const component = shallow(<TripSummary
      id="id"
      image="image.jpg"
      name={expectedNameProp}
      cost={expectedCostProp}
      days={expectedDaysProp}
      tags={[]}
    />);
    expect(component.find('.title').text()).toEqual(expectedNameProp);
    expect(component.find('.details').childAt(1).text()).toEqual(`from ${expectedCostProp}`);
    expect(component.find('.details').childAt(0).text()).toEqual(`${expectedDaysProp} days`);
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('tags in right order on array', () => {
    const expectedTags = ['jeden', 'dwa', 'trzy'];
    const component = shallow(
      <TripSummary
        id="id"
        image="image.jpg"
        name="name"
        cost="dolar"
        tags={expectedTags}
        days= {1}
      />
    );
    expect(component.find('.tags span').at(0).text()).toEqual(expectedTags[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(expectedTags[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(expectedTags[2]);
  });

  it('should not render span if tags is falsy', () => {
    const component = shallow(
      <TripSummary
        id="id"
        image="image.jpg"
        name="name"
        cost="dolar"
        days={1}
      />
    );
    expect(component.hasClass('tags')).toBe(false);
  });

});
