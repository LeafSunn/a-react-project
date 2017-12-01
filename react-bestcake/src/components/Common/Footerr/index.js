import React from "react";
import "./index.scss";
import "@/assets/iconfont/iconfont.css"; //引入iconfont css
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";


class Footerr extends React.Component{
	constructor(){
		super();
		this.state={

		}
	}

	render(){

		return <footer>
			<NavLink to="/home">
				<i className="iconfont icon-store"></i>
				<span>主页</span>
			</NavLink>
			<NavLink to="/list">
				<i className="iconfont icon-viewgallery"></i>
				<span>分类</span>
			</NavLink>
			<NavLink to="/cart">
				<i className="iconfont icon-cart"></i>
				<span>购物车</span>
			</NavLink>	
			
		</footer>
	}


	

}

export default Footerr;