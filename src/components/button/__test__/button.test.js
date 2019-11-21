import React from 'react'
import ReactDOM from 'react-dom'
import Button from '../button'
import {render,cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import renderer from'react-test-renderer';
afterEach(cleanup);
it("renders without crashing",()=>{
const div=document.createElement('div');
ReactDOM.render(<Button></Button>,div)

})

it("renders buttons correctly",()=>{
const {getByTestId}= render(<Button lable="Click me please"></Button>)
expect(getByTestId('button')).toHaveTextContent("Click me please")

})

it("renders buttons correctly",()=>{
    const {getByTestId}= render(<Button lable="save"></Button>)
    expect(getByTestId('button')).toHaveTextContent("save")
    
    })

it("matches snapshot",()=>{
  const tree=  renderer.create(<Button lable="save"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
})
