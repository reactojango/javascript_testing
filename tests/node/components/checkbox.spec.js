import React from 'react';
import { Simulate } from 'react-dom/test-utils';
import Checkbox from '../../../src/components/checkbox.jsx';
import toggleableTests from './toggleable-contract.js';
import { describe, it, expect, $render } from '../suite';


describe('Checkbox', function() {
  toggleableTests(
    props => $render(<Checkbox {...props} />),
    $component => Simulate.change($component[0])
  );

  function renderCheckbox(props) {
    return $render(<Checkbox onToggle={() => { }} {...props} />);
  }

  it('should mark the checkbox when checked', function() {
    const $checkbox = renderCheckbox({ checked: true });

    expect($checkbox.is(':checked')).to.be.true;
  });

  it('should not mark the checkbox when unchecked', function() {
    const $checkbox = renderCheckbox({ checked: false });

    expect($checkbox.is(':checked')).to.be.false;
  });
});
