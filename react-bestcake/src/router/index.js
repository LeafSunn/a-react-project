import React from "react"
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import App from "../components/App";
import Home from "../components/Home";
import Cart from "../components/Cart";
import List from "../components/List";
import Detail from "../components/Detail";
import Search from "../components/Search";
import {Provider}  from "react-redux";
import store  from "../Redux/Store";
/*
	Vue:
	mode :history    /home 
	mode : hash      #/home

	React :

	BrowserRouter   /home
	HashRouter     #/home
 */

const router = (
	<Provider store={store}>
	<Router>		
		<App>
			 <Switch>
			 	{
			 		//switch 只加载匹配路径的第一个孩子
			 	}
				<Route path="/home" component={Home}/>
				<Route path="/list" component={List}/>
				<Route path="/cart" component={Cart}/>
				<Route path="/search" component={Search}/>

				<Route path="/detail" component= {Detail}/>
				<Redirect from="*" to="/home"/>
			</Switch>
		</App>
	</Router>
	</Provider>
)


export default router;
