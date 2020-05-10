import {FOCUSED, BLUR, SAVE_LIST,MOUSE_ENTER,MOUSE_LEAVE} from "./actionType";
import {fromJS} from "immutable";
import axios from "axios"

export const getFocused = () => {
    return {
        type: FOCUSED,
        focused: true
    }
};
export const getBlur = () => {
    return {
        type: BLUR,
        focused: false
    }
};
const saveList = (data) => {
    return {
        type: SAVE_LIST,
        data:fromJS(data)
    }
}

export const getList = () => {
    return (dispatch) => {
        axios.get("https://easy-mock.bookset.io/mock/5e1bd22d2958942be1c63d26/api/jianshuList").then((res) => {
            if (res.data.code === 200) {

                let {data} = res.data.data;
                dispatch(saveList(data))
            }

        }).catch(err => {

        })
    }
};
export const mouseEnter = () => {
    return {
        type: MOUSE_ENTER
    }
};
export const mouseLeave = () => {
    return {
        type: MOUSE_LEAVE
    }
};

