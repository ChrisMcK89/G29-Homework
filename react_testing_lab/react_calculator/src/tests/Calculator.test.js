import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  // calculator.add() - add 1 to 4 and get 5

  it('should check the calculator can add', () => {
    
    const button1 = container.find('#number1');
    const button4 = container.find('#number4');
    const operatorAdd = container.find('#operator_add');
    const operatorEquals = container.find('#operator-equals');
    button1.simulate('click');
    operatorAdd.simulate('click');
    button4.simulate('click');
    operatorEquals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('5');
  })

  // calculator.subtract() subtract 4 from 7 and get 3
  it('should subtract number', () => {
    const button7 = container.find('#number7');
    const button4 = container.find('#number4');
    const operatorSubtract = container.find('#operator-subtract');
    const operatorEquals = container.find('#operator-equals')
    button7.simulate('click');
    operatorSubtract.simulate('click');
    button4.simulate('click');
    operatorEquals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');

  })

  // calculator.multiply() - multiply 3 by 5 and get 15
  it('should multiply numbers', () => {
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const operatorMultiply = container.find('#operator-multiply');
    const operatorEquals = container.find('#operator-equals')
    button3.simulate('click');
    operatorMultiply.simulate('click');
    button5.simulate('click');
    operatorEquals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('15');
  })
  
  // calculator.divide() - divide 21 by 7 and get 3
  it('should check can divide numbers', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const operatorDivide = container.find('#operator-divide');
    const operatorEquals = container.find('#operator-equals')
    button2.simulate('click');
    button1.simulate('click');
    operatorDivide.simulate('click');
    button7.simulate('click');
    operatorEquals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');
  })

  // calculator.numberClick() - concatenate multiple number button clicks
  it('should check concatenate multiple numbers', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    button2.simulate('click');
    button1.simulate('click');
    button7.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('217');
  })

  // calculator.operatorClick() - chain multiple operations together
  it('should chain multiple operations together', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const operatorAdd = container.find('#operator_add');
    const operatorMultiply = container.find('#operator-multiply');
    const operatorEquals = container.find('#operator-equals')
    button2.simulate('click');
    operatorAdd.simulate('click');
    button1.simulate('click');
    operatorMultiply.simulate('click');
    button7.simulate('click');
    operatorEquals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('21');
  })

  it('clear running total without affecting calculation', () => {
  const button2 = container.find('#number2');
  const add = container.find('#operator_add');
  const button1 = container.find('#number1');
  const clear = container.find('#clear');
  const button8 = container.find('#number8');
  const equals = container.find('#operator-equals');
  const runningTotal = container.find('#running-total');
  button2.simulate('click');
  add.simulate('click');
  button1.simulate('click');
  clear.simulate('click');
  add.simulate('click');
  button8.simulate('click');
  equals.simulate('click');
  expect(runningTotal.text()).toEqual('10');
  })
    
})


