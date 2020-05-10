import React,{Component} from "react"
import List from "./components/List"
import Topic from "./components/Topic"
import Writer from "./components/Writer"
import Recommend from "./components/Recomend"

import style from "./home.module.css"
class Home extends Component{

    render() {
        return(
            <div className={style.home}>
                <div className={style.home_left}>
                    <img className={style.banner_img}
                        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589026269167&di=2af8d485fd5d2e170d9d9a3f67b95440&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1209%2F30%2Fc1%2F14211946_14211946_1348947643640.jpg"
                        alt=""/>

                        <Topic/>
                        <List/>
                </div>
                <div className={style.home_right}>
                    <Recommend/>
                    <Writer/>
                </div>
            </div>
        )
    }

}
export default Home
