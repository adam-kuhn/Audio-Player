import React from 'react'
import {connect} from 'react-redux'
import JPlayer, {initializeOptions, Gui, SeekBar, BufferBar,
  Audio, Title, Mute, Play, PlayBar,
  VolumeBar, Duration, CurrentTime, BrowserUnsupported
} from 'react-jplayer'

// import winston from '/music/winston.mp3'

const defaultOptions = {
  id: 'AudioPlayer',
  keyEnabled: true,
  verticalVolume: true,
  media: {
    title: 'Winston Tastes Good Like A Cigarette Should Jingle',
    // artist: 'Miaow',
    sources: {
      mp3: '/music/winston.mp3'
    },
    free: true
  }
}
initializeOptions(defaultOptions)
class Player extends React.Component {
  constructor () {
    super()
  }
  render () {
    return (
      <JPlayer id={defaultOptions.id} className="jp-sleek">
        <Audio />
        <Gui>
          <div className="jp-controls jp-icon-controls">
            <Play><i className="fa">{/* Icon set in css */}Play</i></Play>
            <div className="jp-progress">
              <SeekBar>
                <BufferBar />
                <PlayBar />
                <CurrentTime />
                <Duration />
              </SeekBar>
            </div>
            <div className="jp-volume-container">
              <Mute>
                <i className="fa">{/* Icon set in css */}Mute</i>
              </Mute>
              <div className="jp-volume-slider">
                <div className="jp-volume-bar-container">
                  <VolumeBar />
                </div>
              </div>
            </div>
            <div className="jp-title-container">
              <Title />
            </div>
          </div>
          <BrowserUnsupported />
        </Gui>
      </JPlayer>
    )
  }
}

function mapStateToProps (state) {
  return {
    // showRemainingDuration: state.jPlayers.AudioPlayer.showRemainingDuration
  }
}

export default connect(mapStateToProps)(Player)
