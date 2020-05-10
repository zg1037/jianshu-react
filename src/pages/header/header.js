import React, {Component} from "react";
import {connect} from "react-redux";
import {getFocused, getBlur, getList, mouseEnter, mouseLeave} from "./store/actionCreator";
import {CSSTransition} from "react-transition-group";
import style from "./header.module.css"
import '../../static/iconfont/iconfont.css'

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <nav className={style.header_info}>
                    <div className={style.navbar}>
                        <a href="/" className={style.title}>渔夫</a>
                        <div className={style.container}>
                            <ul className={style.left}>
                                <li><a href="#" className={style.iconcolor}> <span> <i
                                    className={`${"iconfont iconshouye"} ${style.iconsize}`}/></span>首页</a></li>
                                <li><a href="#"><span> <i
                                    className={`${"iconfont iconapponly"} ${style.iconsize}`}/></span>下载App</a></li>
                            </ul>
                            <span className={style.spaninput}>
                                <CSSTransition timeout={300} in={this.props.focused} classNames={"slide"}>
                                   <input placeholder="搜索" type="text"
                                          onFocus={() => {
                                              this.props.handleInputFocus(this.props.list)
                                          }}
                                          onBlur={() => {
                                              this.props.handleInputBlur()
                                          }}
                                          className={this.props.focused ? style.focused : style.gb}/>
                                          </CSSTransition>
                                   <i className={this.props.focused ? `${style.iconbackground} ${style.inputSearch} ${"iconfont iconsearch"}` : `${style.inputSearch} ${"iconfont iconsearch"}`}/>

                                {getListArea(this.props.focused, this.props.mouseIn, this.props.list, this.props.hanldeEnter, this.props.handleLeave, this.props.handleChange, this.props.hanldeswitch, this.spinIcon)}
                             </span>


                            <div className={style.right}>
                                <ul>
                                    <li>Aa</li>
                                    <li className={style.iconcolor}><span><i
                                        className={`${style.iconsize} ${"iconfont icondiamond"}`}/></span>beta
                                    </li>
                                    <li>登录</li>
                                </ul>
                            </div>
                        </div>
                        <a className={style.login}>
                            注册
                        </a>

                        <a className={style.writer}>
                            <span><i className={`${style.iconsize} ${"iconfont iconxiezi"}`}></i></span>
                            写文章
                        </a>
                    </div>
                </nav>
        )
    }

}

const getListArea = (show, mouseIn, list, hanldeEnter, handleLeave, handleChange, spinIcon) => {
    if (show || mouseIn) {
        return (
            <div>
                <div className={style.searchInfo} onMouseEnter={() => {
                    hanldeEnter()
                }} onMouseLeave={() => {
                    handleLeave()
                }}>
                    <div className={style.searchTitle}>
                        标题
                        <span onClick={() => {
                            handleChange(spinIcon)
                        }} className={style.switch}><i ref={(icon) => {
                            spinIcon = icon
                        }} className={`${style.iconsize_1} ${"iconfont iconshuaxin"}`}></i>换一换</span>
                    </div>
                    <ul className={style.searchTag}>
                        {list.map((item, index) => {
                            return (
                                <li key={index}>{item}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    } else {
        return null;
    }

}


const mapStateToProps = (state) => {
    return {
        // focused: state.get("header").get("focused"),
        focused: state.getIn(["header", "focused"]),
        list: state.get("header").get("list"),
        mouseIn: state.get("header").get("mouseIn")
    }
}

const mapStateToDispatch = (dispatch) => {
    return {
        handleInputFocus(list) {
            if (list.size < 0) {
            dispatch(getList())
            }

            dispatch(getFocused());
        },
        handleInputBlur() {
            const action = getBlur();
            dispatch(action)
        },
        hanldeEnter() {
            dispatch(mouseEnter())
        },
        handleLeave() {
            dispatch(mouseLeave())
        },
        handleChange(icon) {
            // icon.style.transform="rotate(360deg)";
            let originAngle = icon.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
                console.log(originAngle);
            } else {
                originAngle = 0;
            }
            icon.style.transform =`rotate(${originAngle+360}deg)`;
            dispatch(getList());
        },

    }
}

export default connect(mapStateToProps, mapStateToDispatch)(Header);
