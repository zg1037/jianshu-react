import React, {Component} from "react"
import style from "./Recomend.module.css"

class Writer extends Component {

    render() {
        return (
            <div>
                <div className={style.recommend}>
                    <div>推荐作者</div>
                    <div>换一批</div>
                </div>

                {getAuthor()}
            </div>
        )
    }

}

const getAuthor=()=>{
    let list=[1,2,3,4,5,];
    return(
        <div>
            {list.map((value, index)=>{
                return(
                    <div className={style.content} key={index}>
                        <div className={style.first}>
                            <img className={style.first_image}
                                 src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589026269167&di=2af8d485fd5d2e170d9d9a3f67b95440&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1209%2F30%2Fc1%2F14211946_14211946_1348947643640.jpg"
                                 alt=""/>
                        </div>
                        <div className={style.second}>
                            <div>董克平日记</div>
                            <div className={style.second_love}>写了951.3k字 · 3.7k喜欢</div>
                        </div>
                        <div className={style.three}>+ 关注</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Writer
