import React from 'react'
import Modal from '../components/modal'
import { style } from 'next/css'

// load meta info
import metaInfo from './meta-info.json'

console.info(metaInfo)

export default class extends React.Component {
  static getInitialProps () {
    return {
      // dummy data
      photos: metaInfo
    }
  }

  constructor (props) {
    super(props)
    this.onKeyDown = this.onKeyDown.bind(this)
  }

  componentDidMount () {
    document.addEventListener('keydown', this.onKeyDown)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.onKeyDown)
  }

  onKeyDown (e) {
    if (!this.props.url.query.id) return
    if (e.keyCode === 27) {
      this.props.url.back()
    }
  }

  dismissModal () {
    this.props.url.back()
  }

  showPhoto (e, href) {
    e.preventDefault()
    window.location.href = href
  }

  render () {
    return (
      <div className={style(styles.list)}>
        {
          this.props.url.query.id &&
            <Modal
              id={this.props.url.query.id}
              onDismiss={() => this.dismissModal()}
            />
        }
        {
          Object.keys(this.props.photos).map((keyItem, key) => {
            const metaInfoItem = this.props.photos[keyItem]
            return (
                <div key={key} className={style(styles.photo)}>
                  <a
                      className={style(styles.photoLink)}
                      data-href={metaInfoItem.href}
                      onClick={(e) => this.showPhoto(e, `/${metaInfoItem.href}`)}>
                      {key}
                  </a>
                </div>
            )
          })
        }
      </div>
    )
  }
}

const styles = {
  list: {
    padding: '50px',
    textAlign: 'center'
  },

  photo: {
    display: 'inline-block'
  },

  photoLink: {
    color: '#333',
    verticalAlign: 'middle',
    cursor: 'pointer',
    background: '#eee',
    display: 'inline-block',
    width: '250px',
    height: '250px',
    lineHeight: '250px',
    margin: '10px',
    border: '2px solid transparent',
    ':hover': {
      borderColor: 'blue'
    }
  }
}
