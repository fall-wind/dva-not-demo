import React from 'react';
import styles from './Test.css';
import { Button, Input, Table } from 'antd';

// // stateless组件
// function Test(props) {
//   // console.log(props)
//   const { name, dispatch, inputValue } = props
//   function handleInputChange(e) {
//     console.log(e.target.value, 'change')
//     dispatch({
//       type: 'test/changeInputValue',
//       value: e.target.value
//     })
//   }
//   function handleButtonSubmit(e) {
//     dispatch({
//       type: 'test/handleButtonSubmit',
//       name: inputValue,
//     })
//   }
//   return (
//     <div className={styles.normal}>
//       {`name:   ${name}`}
//       <div>
//         <Input
//           style={{
//             width: 150,
//           }}
//           value={inputValue}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div>
//         <Button onClick={handleButtonSubmit} >点我改名字</Button>
//       </div>
//     </div>
//   );
// }

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="">{text}</a>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Website',
    dataIndex: 'website',
    key: 'website',
  },
]

class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'test/fetch',
    })
  }

  handleInputChange = (e) => {
    this.props.dispatch({
      type: 'test/changeInputValue',
      value: e.target.value,
    })
  }

  handleButtonSubmit = () => {
    this.props.dispatch({
      type: 'test/handleButtonSubmit',
      name: this.props.inputValue,
    })
  }

  render() {
    const { name, inputValue, data } = this.props

    return (
      <div className={styles.normal}>
        {`name:   ${name}`}
        <div>
          <Input
            style={{
              width: 150,
            }}
            value={inputValue}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <Button onClick={this.handleButtonSubmit} >点我改名字</Button>
        </div>
        <div>
          <Table
            columns={columns}
            dataSource={data}
            rowKey={record => record.id}
            pagination={false}
          />
        </div>
      </div>
    );
  }
}

export default Test;
