import React from 'react'
import {shallow} from 'enzyme'

import App from '../../client/components/App'

test('<App /> uses a HashRouter', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.text()).toBe('<HashRouter />')
})
