import React, { Component } from 'react';
import { Flex, WingBlank, WhiteSpace, Toast } from 'antd-mobile';

import { Link } from 'react-router-dom';

import NavHeader from '../../components/NavHeader';
import { API } from '../../utils';

import styles from './index.module.css';

// 验证规则：
// const REG_UNAME = /^[a-zA-Z_\d]{5,8}$/
// const REG_PWD = /^[a-zA-Z_\d]{3,12}$/

class Registe extends Component {
    state = {
        username: '',
        password: '',
    };
    // 表单的提交事件
    handleSubmit = async () => {
        // 获取账号和密码
        const { username, password } = this.state;

        console.log('表单提交了', username, password);
        // 发送请求
        const res = await API.post('/user/registered', {
            username,
            password,
        });

        const { status, body, description } = res.data;

        if (status === 200) {
            // 注册成功直接跳转回登陆界面
            this.props.history.push('/login');
        } else {
            // 登录失败
            Toast.info(description, 2, null, false);
        }
    };

    render() {
        return (
            <div className={styles.root}>
                {/* 顶部导航 */}
                <NavHeader className={styles.navHeader}>注册</NavHeader>
                <WhiteSpace size="xl" />
                <WingBlank>
                    <div>
                        <div className={styles.formItem}>
                            <label className={styles.label}>用户名</label>
                            <input
                                className={styles.input}
                                placeholder="请输入账号"
                                value={this.state.username}
                                onChange={e => {
                                    this.setState({
                                        username: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className={styles.formItem}>
                            <label className={styles.label}>密码</label>
                            <input
                                className={styles.input}
                                type="password"
                                placeholder="请输入密码"
                                value={this.state.password}
                                onChange={e => {
                                    this.setState({
                                        password: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className={styles.formItem}>
                            <label className={styles.label}>重复密码</label>
                            <input
                                className={styles.input}
                                type="password"
                                placeholder="请重新输入密码"
                            />
                        </div>
                        <div className={styles.formSubmit}>
                            <button
                                className={styles.submit}
                                type="submit"
                                onClick={this.handleSubmit}
                            >
                                注册
                            </button>
                        </div>
                    </div>
                    <Flex className={styles.backHome} justify="between">
                        <Link to="/home">点我回首页</Link>
                        <Link to="/login">已有账号，去登录</Link>
                    </Flex>
                </WingBlank>
            </div>
        );
    }
}
// Registe = withFormik({
//     // 提供状态：
//     mapPropsToValues: () => ({ username: '', password: '' }),
//     // 添加表单校验规则
//     validationSchema: Yup.object().shape({
//         username: Yup.string()
//             .required('账号为必填项')
//             .matches(REG_UNAME, '长度为5到8位，只能出现数字、字母、下划线'),
//         password: Yup.string()
//             .required('密码为必填项')
//             .matches(REG_PWD, '长度为5到12位，只能出现数字、字母、下划线'),
//     }),
// })(Registe);
export default Registe;
