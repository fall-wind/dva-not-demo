import React from 'react';
import styles from './Test.css';
import { Button, Input } from 'antd';

function Test(props) {
  // console.log(props)
  const { name, dispatch, inputValue } = props
  function handleInputChange(e) {
    console.log(e.target.value, 'change')
    dispatch({
      type: 'test/changeInputValue',
      value: e.target.value
    })
  }
  function handleButtonSubmit(e) {
    dispatch({
      type: 'test/handleButtonSubmit',
      name: inputValue,
    })
  }
  return (
    <div className={styles.normal}>
      {`name:   ${name}`}
      <div>
        <Input
          style={{
            width: 150,
          }}
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Button onClick={handleButtonSubmit} >点我改名字</Button>
      </div>
    </div>
  );
}

export default Test;
