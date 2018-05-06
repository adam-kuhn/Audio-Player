import React from 'react'
import {render} from 'enzyme'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'
import {HashRouter as Router} from 'react-router-dom'

import MusicList from '../../../client/components/MusicList'

afterEach(jest.resetModules)

test('<MusicList /> renders h2', () => {
  const mockStore = configureStore()({
    music: {
      tite: 'song title',
      description: 'song description',
      file: 'song file'
    }
  })
  const wrapper = render(
    <Provider store={mockStore}>
      <Router>
        <MusicList />
      </Router>
    </Provider>)
  expect(wrapper.find('h2').length).toBe(1)
})

test('<MusicList /> renders list of songs', () => {
  const mockStore = configureStore()({
    music: {
      tite: 'song title',
      description: 'song description',
      file: 'song file'
    }
  })
  const wrapper = render(
    <Provider store={mockStore}>
      <Router>
        <MusicList/>
      </Router>
    </Provider>)
  expect(wrapper.find('h3').length).toBe(7)
})
