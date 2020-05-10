import React, {Component} from "react"
import style from "./Recomend.module.css"
import QRCode from 'qrcode.react';
class Recomend extends Component {
    constructor(props) {
        super(props);
        this.state={
            Content:'https://www.baidu.com/',
            show:false
        }
    }

    downloadCode=()=>{
        var Qr=document.getElementById('qrid');
        let image = new Image();
        image.src = Qr.toDataURL("image/png");
        var a_link=document.getElementById('aId');
        a_link.href=image.src;
    }

    render() {
        return (
            <div>
                <div>
                    <ul className={style.tags}>
                        <li>越狱</li>
                        <li>绝命毒师</li>
                        <li>僵尸道士</li>
                        <li>我的欢乐时光</li>
                    </ul>
                </div>
                <div className={style.qrode} onMouseEnter={()=>{this.handleEnter()}} onMouseLeave={()=>{
                    this.handleLeave()
                }}>
                    <a download id='aId' title="点我下载！">
                        <QRCode id='qrid' value={this.state.Content} onClick={this.downloadCode} size={60} />
                    </a>

                    <div className={style.qrode_title}>
                        <div >下载官方app ></div>
                        <div className={style.download}>随时发现新事物</div>
                    </div>

                    {this.getQRShow(this.state.show)}
                </div>


            </div>
        )
    }


    handleEnter(){
    this.setState({
        show:true
    })
    }

    handleLeave(){
        this.setState({
            show:false
        })
    }

    getQRShow=(show)=>{
        if (show) {
            return(
                <div className={style.qrShow}>
                    <QRCode id='qrid' value={this.state.Content} size={150} />
                </div>
            )
        }
    }
}

export default Recomend
