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
      <JPlayer id={defaultOptions.id}>
        <Audio />
        <Gui>
          <div className="jp-controls">
            <div className="controls">
              <button className="skip" type='button' onClick={this.skipBack}>
                <i className="fa fa-fast-backward fa-2x"></i>
              </button>
              <Play> {this.props.paused ? <i className="fa fa-play fa-4x"></i>
                : <i className="fa fa-pause fa-4x"></i>}</Play>
              <button className ="skip" type='button' onClick={this.skipAhead}>
                <i className="fa fa-fast-forward fa-2x"></i>
              </button>
            </div>
            <div className="bar-container">
              <Title />
              <div className="jp-progress">
                <SeekBar>
                  <PlayBar />
                  <BufferBar />
                  <div className="time">
                    <CurrentTime />
                    <Duration />
                  </div>
                </SeekBar>
              </div>
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
