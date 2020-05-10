import {FOCUSED,BLUR,SAVE_LIST,MOUSE_ENTER,MOUSE_LEAVE} from "./actionType";
import {fromJS} from "immutable";

const defaultStatus=fromJS({
    focused:false,
    mouseIn:false,
    list:[]
})

export default (state=defaultStatus,action)=>{
    if (action.type===FOCUSED){
       //immutable对象的set方法，会结合之前immutable对象的值
        // 和设置的值，返回要给全新的对象
        return state.set("focused",true)
    }
    if (action.type===BLUR){

        // state.merge({
        //     list:[],
        //     focused: true
        // })
        return  state.set("focused",false)
    }

    if (action.type === SAVE_LIST) {
        return state.set("list",action.data)
    }
    if (action.type===MOUSE_ENTER){
        return state.set("mouseIn",true)
    }
    if (action.type===MOUSE_LEAVE){
        return state.set("mouseIn",false)
    }

    return state
}
