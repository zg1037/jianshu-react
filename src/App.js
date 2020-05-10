import React, {Component, Fragment} from 'react';
import Header from "./pages/header/header"
import store from "./store/index"
import {Provider} from "react-redux"
import {BrowserRouter, Route} from "react-router-dom"
import Home from "./pages/home"
import Detail from "./pages/detail/loadable"

class App extends Component {

    render() {
        return (

            <Provider store={store}>

                <BrowserRouter>
                    <div style={{height:"56px"}}>
                        <Header/>
                    </div>

                    <div>
                        <Route path="/" exact component={Home}></Route>
                        <Route path = "/detail" component={Detail}></Route>
                    </div>

                </BrowserRouter>


            </Provider>


        )
    }

}

export default App;
