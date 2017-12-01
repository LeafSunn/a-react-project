import React from "react";
import "./index.scss";
import {NavLink} from "react-router-dom";
import ReactSwipe from "react-swipe";//轮播图插件
import { connect } from "react-redux";

class Detail extends React.Component{
	constructor(){
		super();
		this.state={
			datalist:[],
			isShow:true
		}
	}
	componentWillMount(){
		this.props.datalist3(this.props.history.location.search.substring(6))

	}
	componentDidMount(){
		console.log(this.props.list3)

	}
	goCart(){
		//console.log(this.props.list3.Name,this.refs.numTxt.innerHTML)
		var pro={
			name:this.props.list3.Name,
			num:this.refs.numTxt.innerHTML
		}
		this.props.product(pro)
	}
	render(){
		//按钮写反了  不想改了
		var addnum=function(){
			//console.log(this.refs.numTxt.innerHTML)
			var sum=parseInt(this.refs.numTxt.innerHTML)
			//console.log(sum)
			if(sum==1){
				sum=1;
				this.refs.numTxt.innerHTML=sum;
			}else{
				sum--;
				this.refs.numTxt.innerHTML=sum;
			}
		}

		var rdcnum =function(){
			var sum=parseInt(this.refs.numTxt.innerHTML)
			//console.log(sum)
			sum++;
			this.refs.numTxt.innerHTML=sum;
		}
		

		return <div className="detail">
			<div className="swipelist">
				<ReactSwipe className="swipe-container" onSwipeLeft={this.handleLeftSwipe} swipeOptions={{continuous:true}}>
					<img src={"https://res.bestcake.com/m-images/jd-detail/"+this.props.list3.Name+"/"+this.props.list3.Name+"-1.jpg?v=20170607"}/>
					<img src={"https://res.bestcake.com/m-images/jd-detail/"+this.props.list3.Name+"/"+this.props.list3.Name+"-2.jpg?v=20170607"}/>
					<img src={"https://res.bestcake.com/m-images/jd-detail/"+this.props.list3.Name+"/"+this.props.list3.Name+"-3.jpg?v=20170607"}/>
					<img src={"https://res.bestcake.com/m-images/jd-detail/"+this.props.list3.Name+"/"+this.props.list3.Name+"-4.jpg?v=20170607"}/>
				</ReactSwipe>
			</div>
			<p className="name">{this.props.list3.Name}</p>
			<div className="line"></div>
			<div className="info">
				<div className="infoleft">
					<span className="sp1">口味</span>
					<span className="sp2">原材料</span>
					<span className="sp3">适合人群</span>
					<span className="sp4">保鲜条件</span>

				</div>
				<div className="inforight">
					<span className="sp1">{this.props.list3.CategoryName}</span>
					<span className="sp2">{this.props.list3.Resourse}</span>
					<span className="sp3">除老人、小孩，和对酒精过敏外的各类人群</span>
					<span className="sp4">最适宜0℃~8℃冷藏保存，离开冷藏请勿超过2小时。5月1日~10月31日建议2天内食用 11月1日~翌年4月30日建议3天内食用。</span>
				</div>
			</div>
			<div className="line"></div>
			<div className="paynum">
				<span className="payword">购买数量</span>
				<div>
					<button onClick={addnum.bind(this)}>-</button>
					<span ref="numTxt">1</span>
					<button onClick={rdcnum.bind(this)}>+</button>
				</div>
			</div>
			<div className="line"></div>
			<div className="money">
				<div>
					<span>188</span>/份
				</div>
				<NavLink to="/cart" onClick={this.goCart.bind(this)}>加入购物车</NavLink>
			</div>
			<div className="line"></div>
		</div>
	}
	
	
	


}

export default connect(
		(state)=>{
			console.log(state.list3)
			return {
				list3:state.list3
			}

		},{
			datalist3:(name)=>{
				return axios.get(`/json.ashx?City=%E6%9D%AD%E5%B7%9E&ProName=${name}&c=Product&m=GetCakeByName`).then(res=>{
		  			
					return {
						type:"detaillist",
						payload:res.data.Tag.infos
					}
				})
			}
			,
			product:(pro)=>{
				console.log(pro)
				return {
						type:"cartlist",
						payload:pro
					}

									
			}
		}
	)(Detail);

/*

	connect(第一个参数,第二个参数)(要被包装的组件)

	第一个参数-- map state  to props
	
	第二个参数-- map methods to props
 */


