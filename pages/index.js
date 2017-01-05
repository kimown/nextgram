import React, { Component } from 'react'
import { style } from 'next/css'

// load meta info
import metaInfo from './meta-info.json'

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

export default class extends Component {
  static propTypes = {
    photos: {
      'react-slick': React.PropTypes.object.isRequired
    }
  }

  static getInitialProps() {
    return {
      // dummy data
      photos: metaInfo
    }
  }

  showPhoto = (e, href) => {
    e.preventDefault()
    window.location.href = href
  }

  render() {
    return (
      <div className={style(styles.list)}>
        {
          Object.keys(this.props.photos).map((keyItem, key) => {
            if (keyItem === 'demo') {
              return null
            }
            const metaInfoItem = this.props.photos[keyItem]
            return (
              <div key={key} className={style(styles.photo)}>
                {/*  use button not link:https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/89#issuecomment-246143158*/}
                <button
                  className={style(styles.photoLink)}
                  onClick={e => this.showPhoto(e, `/${metaInfoItem.href}`)}
                >
                  {keyItem}
                </button>
              </div>
            )
          })
        }
      </div>
    )
  }
}

