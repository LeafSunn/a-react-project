import React from "react";
import "./index.scss";
import {NavLink} from "react-router-dom";
import { connect } from "react-redux";

class Search extends React.Component{
	constructor(){
		super();
		this.state={
			datalist:[]
		}
	}
	componentWillMount(){
		//console.log(this)
		if(this.props.list2.length==0)
		this.props.datalist2()
		//console.log(this.props.history.location.search)dar
	}
	render(){


		return <div className="list">
			<div className="listHeader">
				<span>搜索</span>
				<input type="text" ref="searchTxt" />
				<i className="iconfont icon-search" onClick={this.clickSearch.bind(this)}></i>
			</div>
			{
				this.state.datalist.length?
			<div className="four">
				{this.state.datalist.map((item,index)=>
					<NavLink to="/list" key={index}>
						<img src={"https://res.bestcake.com/m-images/ww/jd/"+item.Name+".png?v=20170607"} />
						<p>{item.Name}</p>
						<p>{item.Ename}</p>
						<p>188.00/1.2磅</p>
					</NavLink>
				)}
			</div>:null

			}
			
			
		</div>
	}


}

export default connect(
		(state)=>{
			//console.log(state.list2)
			//console.log(List.props)
			state.list2?state.list2:null

			//筛选接口数据
			var reg=/^.*(KSK).*$/
  			var newlist=[]
  			var length=[]
  			for(var i=0;i<state.list2.length;i++){
				if(reg.test(state.list2[i].SupplyNo)){
					newlist.push(state.list2[i])

				}
  			}
  			
  			//console.log(another)
  			console.log(newlist)
  			//console.log(length)
			return {
				list2:newlist
			}

		},{
			datalist2:()=>{
				return axios.get("/json.ashx?City=%E6%9D%AD%E5%B7%9E&c=ListCenter&m=GetCakeInfo").then(res=>{
		  			
					return {
						type:"listlist",
						payload:res.data.Tag.IndexCakeInfo
					}
				})
			}
		}
	)(Search);

/*

	connect(第一个参数,第二个参数)(要被包装的组件)

	第一个参数-- map state  to props
	
	第二个参数-- map methods to props
 */


