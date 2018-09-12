import React from 'react';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'isomorphic-fetch';
import IngredientInfo from '../src/components/IngredientInfo/IngredientInfo';
import IngredientList from '../src/components/IngredientList/IngredientList';
import IngredientDetails from '../src/components/IngredientDetails/IngredientDetails';


enzyme.configure({ adapter: new Adapter() });

describe('IngredientInfo', () => {
  let props;
  let mountedIngredient;
  const ingr = () => {
    if (!mountedIngredient) {
      mountedIngredient = enzyme.mount(
        <IngredientInfo {...props} />,
      );
    }
    return mountedIngredient;
  };

  beforeEach(() => {
    props = {
      ingredients: [
        {
          id: 1,
          quantity: '2 шт.',
          name: 'Яйцо',
        },
      ],
    };
    mountedIngredient = undefined;
  });

  it('always renders a div', () => {
    const divs = ingr().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });

  it('always renders a `IngredientList`', () => {
    expect(ingr().find(IngredientList).length).toBe(1);
  });

  describe('rendered `IngredientList`', () => {
    it('IngredientList принимает 3 параметра', () => {
      const ingredients = ingr().find(IngredientList);
      expect(Object.keys(ingredients.props()).length).toBe(3);
    });
  });

  it('always renders a `IngredientDetails`', () => {
    expect(ingr().find(IngredientDetails).length).toBe(1);
  });

  describe('rendered `IngredientDetails`', () => {
    it('IngredientDetails принимает 1 параметр', () => {
      const details = ingr().find(IngredientDetails);
      expect(Object.keys(details.props()).length).toBe(1);
    });
  });
});
