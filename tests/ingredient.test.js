import React from 'react';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Ingredient from '../src/components/Ingredient/Ingredient';

enzyme.configure({ adapter: new Adapter() });

describe('Ingredient', () => {
  let props;
  let mountedIngredient;
  const ingr = () => {
    if (!mountedIngredient) {
      mountedIngredient = enzyme.mount(
        <Ingredient {...props} />,
      );
    }
    return mountedIngredient;
  };

  beforeEach(() => {
    props = {
      isSelected: undefined,
      ingredient: {
        id: 8,
        quantity: '3-4 шт.',
        name: 'Картофель',
      },
    };
    mountedIngredient = undefined;
  });

  it('div render', () => {
    const divs = ingr().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });

  it('label render', () => {
    const labels = ingr().find('label');
    expect(labels.length).toBeGreaterThan(0);
  });
});
