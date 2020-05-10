import React, {Component} from "react"
import style from "./list.module.css"
import "../../../static/iconfont/iconfont.css"
import  {Link} from "react-router-dom";

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            menu: "",
            page: 1
        }
    }

    componentDidMount() {
        this.request()
    }

    params = {
        page: 1
    }

    request = () => {
        let data=[1,3,5]
        const s = this.dataList(data);
        this.setState({
            menu: s,
            page: this.params.page
        })
    }

    loadingMore = () => {
        let data=[6,7,8]
        const s2 = this.dataList(data);
        const menu = this.state.menu.concat(s2);
        this.setState({
            menu: menu,
            page: this.params.page++
        })

    }

    dataList = (list) => {
        return list.map((item, index) => {
            return (
                <div className={style.list} key={item}>
                    <div className={style.left}>
                        <Link to={{ pathname:'/detail', state: { name : 'sunny' }}} className={style.title}>希望有一个人，能听懂你的弦外之音</Link>

                        <div className={style.content}>1 有有天晚上有天晚上有天晚上有天晚上有天晚上天晚上，一个哥们来找我喝酒，在夜市摊两杯白酒下肚，他就开始诉苦。
                            首先他说了他的经济问题，
                            工资一年多没涨了，还房贷越来越紧张，老婆脾气越来
                        </div>

                        <div className={style.dianzan}>
                            <span><i className={`${style.iconsize} ${"iconfont icondiamond"}`}></i>49.3</span>
                            <span className={style.span_author}>作者</span>
                            <span className={style.span_middle}><i
                                className={`${style.iconsize} ${"iconfont iconmessage"}`}></i>49.3</span>
                            <span><i className={`${style.iconsize} ${"iconfont iconaixin"}`}></i>49.3</span>
                        </div>
                    </div>

                    <div className={style.right}>
                        <img className={style.right_img}
                             src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589026269167&di=2af8d485fd5d2e170d9d9a3f67b95440&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1209%2F30%2Fc1%2F14211946_14211946_1348947643640.jpg"
                             alt=""/>
                    </div>
                </div>
            )
        })
    }



    render() {
        return (
            <div>
                {this.state.menu}
                <div className={style.more} onClick={this.loadingMore}>加载更多</div>
            </div>
        )
    }
}









export default List
