import React, { PureComponent } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import styles from './index.less';

@connect(state => {
    return {
        text: state.global.text,
        a: state.a,
        b: state.b,
    };
})

class App extends PureComponent {
    render() {
        let { text, a, b } = this.props
        return (
            <div className={styles.normal}>
                <h2>
                    {text}
                </h2>
                <div onClick={() => {router.goBack();}}>Back</div>
                <div onClick={() => {this.props.dispatch({
                    type: 'global/setText',
                    payload: 'new text'
                })}}>set text</div>
                <div> test: {a} | {b} </div>
            </div>
        );
    }

}
export default App