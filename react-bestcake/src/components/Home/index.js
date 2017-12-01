import React from "react";
import "./index.scss";
import "@/assets/iconfont/iconfont.css"; //引入iconfont css
import {connect} from "react-redux";
import ReactSwipe from "react-swipe";//轮播图插件


class Home extends React.Component{
	constructor(){
		super();
		this.state={

		}
	}
	componentWillMount(){
		this.props.datalist1()
	}
	render(){

		
		return <nav>
			<div className="header">
				<div className="left">
					<i className="iconfont icon-map"></i>
					<span>杭州</span>				
				</div>
				<div className="right">
					<span>贝思客蛋糕房</span>				
				</div>
			</div>
			
			<div className="swipelist">
				<ReactSwipe className="swipe-container" onSwipeLeft={this.handleLeftSwipe} swipeOptions={{continuous:true,auto:2000}}>
					<img src="https://res.bestcake.com/m-images/banner/wap-banner-jzh.jpg"/>
					<img src="https://res.bestcake.com/m-images/banner/wap-tx-banner.jpg"/>			
				</ReactSwipe>
			</div>
			<div className="clplrs">
				<img src="https://res.bestcake.com/m-images/thanksgiving/wap2_01.jpg" className="am-img-responsive am-u-sm-12 clplr"/>
		       	<img src="https://res.bestcake.com/m-images/thanksgiving/wap2_02.jpg" className="am-img-responsive am-u-sm-12 clplr1"/>
		       	<img src="https://res.bestcake.com/m-images/thanksgiving/wap2_03.jpg" className="am-img-responsive am-u-sm-12 clplr"/>
		       	<img src="https://res.bestcake.com/m-images/thanksgiving/wap2_04.jpg" className="am-img-responsive am-u-sm-12 clplr"/>
			</div>
			{
				this.props.list1?
				<div className="indexlist">
					<ul>
						{this.props.list1.map((item,index)=>
							<li key={index}  >
								<img src={"https://res.bestcake.com/m-images/ww/ns/"+item.Name+".jpg?v=1"} />
								<p>{item.Name}</p>
								<p>{item.Ename}</p>
								<p>{item.CurrentPrice}/{item.Size}</p>
								<p>
									<button onClick={this.godetail.bind(this,item)}>立即前往</button>
								</p>
							</li>
							)}
					</ul>
					
				</div>:null

			}
			<div className="clplrs">
				<img src="https://res.bestcake.com/m-images/thanksgiving/wap2_17.jpg" className="am-img-responsive am-u-sm-12 clplr"/>
		       	<img src="https://res.bestcake.com/m-images/thanksgiving/wap2_18.jpg" className="am-img-responsive am-u-sm-12 clplr"/>
		       	<img src="https://res.bestcake.com/m-images/thanksgiving/wap2_19.jpg" className="am-img-responsive am-u-sm-12 clplr"/>
		       	<img src="https://res.bestcake.com/m-images/thanksgiving/wap2_20.jpg" className="am-img-responsive am-u-sm-12 clplr"/>
		       	<img src="https://res.bestcake.com/m-images/thanksgiving/wap2_21.jpg" className="am-img-responsive am-u-sm-12 clplr"/>
			</div>
			

		</nav>
	}
	
	godetail(item){
		this.props.history.push("/detail?name="+item.Name)
	}

	



	



}

export default connect(
			(state)=>{
				//console.log(state.list1)
				
				state.list1.splice(0,1)
				//console.log(state.list1)
				return {
					list1:state.list1
				}
			}

			,{
				datalist1:()=>{
					return axios.get('/json.ashx?City=%E6%9D%AD%E5%B7%9E&c=NsCakeCenter&m=getNsList').then(res=>{
						return {
							type:"indexlist",
							payload:res.data.Tag.cakelist
						}
					})
				}


			}
	)(Home);



