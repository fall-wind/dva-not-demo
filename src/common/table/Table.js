import React from 'react'
import styles from './Table.less'

/**
 * columns
 */

class Table extends React.Component {

  render() {
    const { className, columns, data, theadHeight} = this.props
    return (
      <div className={styles['yt-table-container']}>
        <div
          className={styles['yt-table-thead']}
          style={{
          }}
        >
          {
            columns.map(item => {
              const { key, title, width, render } = item
              return (
                <div
                  className={styles['yt-table-thead-cell']}
                  key={key}
                  style={{
                    width : width || 100,
                    theadHeight: theadHeight || 30,
                    display: 'inline-block'
                  }}
                >
                  {title}
                </div>
              )
            })
          }
        </div>
        <div className="yt-table-tbody">

        </div>
      </div>
    )
  }
}

export default Table
