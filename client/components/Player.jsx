import React from 'react'
import {connect} from 'react-redux'
import JPlayer, {actions, initializeOptions, Gui, SeekBar, BufferBar,
  Poster, Audio, Title, Mute, Play, PlayBar,
  VolumeBar, Duration, CurrentTime, BrowserUnsupported
} from 'react-jplayer'

const defaultOptions = {
  id: 'AudioPlayer',
  keyEnabled: true,
  verticalVolume: true,
  media: {
    title: 'Bubble',
    artist: 'Miaow',
    sources: {
      m4a: 'http://jplayer.org/audio/m4a/Miaow-07-Bubble.m4a',
      oga: 'http://jplayer.org/audio/ogg/Miaow-07-Bubble.ogg'
    },
    free: true
  }
}
initializeOptions(defaultOptions)
class Player extends React.Component {
  constructor () {
    super()
    this.onClick = this.onClick.bind(this)
  }
  onClick () {
    console.log('setting up')
    this.props.dispatch(actions.setOption('AudioPlayer',
      'showRemainingDuration',
      !this.props.showRemainingDuration))
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
              <Poster />
              <Title />
            </div>
          </div>
          <BrowserUnsupported />
        </Gui>
      </JPlayer>
    // <button type='button' onClick={this.onClick}>Play button</button>
    )
  }
}

function mapStateToProps (state) {
  return {
    // showRemainingDuration: state.jPlayers.AudioPlayer.showRemainingDuration
  }
}

export default connect(mapStateToProps)(Player)
