import React from 'react'
import {connect} from 'react-redux'
import JPlayer, {initializeOptions, actions, Gui, SeekBar, BufferBar,
  Audio, Title, Play, PlayBar,
  Duration, CurrentTime, BrowserUnsupported
} from 'react-jplayer'

const defaultOptions = {
  id: 'AudioPlayer',
  smoothPlayBar: true
}
initializeOptions(defaultOptions)

class Player extends React.Component {
  constructor () {
    super()
    this.skipBack = this.skipBack.bind(this)
    this.skipAhead = this.skipAhead.bind(this)
  }
  skipBack () {
    const rwd15 = this.props.currentTime - 15
    this.props.dispatch(actions.play('AudioPlayer', rwd15))
  }
  skipAhead () {
    const ffw15 = this.props.currentTime + 15
    this.props.dispatch(actions.play('AudioPlayer', ffw15))
  }

  render () {
    return (
      <JPlayer id={defaultOptions.id} className="jp-sleek">
        <Audio />
        <Gui>
          <div className="jp-controls jp-icon-controls">
            <button type='button' onClick={this.skipBack}>
              <i className="fa fa-fast-backward"></i>
            </button>
            <Play>{this.props.paused ? <i className="fa fa-play"></i>
              : <i className="fa fa-pause"></i>}</Play>
            <button type='button' onClick={this.skipAhead}>
              <i className="fa fa-fast-forward"></i>
            </button>
            <div className="jp-progress">
              <div className="jp-progress">
                <SeekBar>
                  <PlayBar />
                  <BufferBar />
                  <CurrentTime />
                  <div className="duration">
                    <Duration />
                  </div>
                </SeekBar>
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
    currentTime: state.jPlayers.AudioPlayer.currentTime,
    paused: state.jPlayers.AudioPlayer.paused
  }
}

export default connect(mapStateToProps)(Player)
