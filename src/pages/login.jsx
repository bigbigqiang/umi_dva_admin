import React from 'react';
import { Icon } from 'antd-mobile';
import styles from './login.less';


export default class Success extends React.Component {
    state = {
        days: 0
    }

    componentWillMount() {
        // let { days } = this.props.location.query
    }


    render() {

        return (
            <div className={styles.success_prompt}>
                <div className={styles.success}>
                    <Icon type='check' className={styles.iconStyle}/>
                </div>
            </div>
        )
    }

}
