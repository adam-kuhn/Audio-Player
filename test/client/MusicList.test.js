import React from 'react'
import {render} from 'enzyme'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'

import MusicList from '../../client/components/MusicList'

afterEach(jest.resetModules)

test('<MusicList /> renders header', () => {
  const mockStore = configureStore()({
    music: {
      tite: 'song title',
      description: 'song description',
      file: 'song file'
    }
  })
  const wrapper = render(
    <Provider store={mockStore}>
      <MusicList />
    </Provider>)
  expect(wrapper.find('h2').length).toBe(1)
})
