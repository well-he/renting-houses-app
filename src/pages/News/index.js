import { Flex, WingBlank } from 'antd-mobile';
import axios from 'axios';
import React from 'react';
import './index.css';
export default class News extends React.Component {
    state = {
        news: [],
    };
    // 获取最新资讯
    async getNews() {
        const res = await axios.get(
            'http://localhost:8080/home/news?area=AREA%7C88cff55c-aaa4-e2e0'
        );

        this.setState({
            news: res.data.body,
        });
    }
    componentDidMount() {
        this.getNews();
    }

    render() {
        return (
            <div className="news">
                <h3 className="group-title">最新资讯</h3>
                <WingBlank size="md">
                    {this.state.news.map(item => (
                        <div className="news-item" key={item.id}>
                            <div className="imgwrap">
                                <img
                                    className="img"
                                    src={`http://localhost:8080${item.imgSrc}`}
                                    alt=""
                                />
                            </div>
                            <Flex className="content" direction="column" justify="between">
                                <h3 className="title">{item.title}</h3>
                                <Flex className="info" justify="between">
                                    <span>{item.from}</span>
                                    <span>{item.date}</span>
                                </Flex>
                            </Flex>
                        </div>
                    ))}
                </WingBlank>
            </div>
        );
    }
}
