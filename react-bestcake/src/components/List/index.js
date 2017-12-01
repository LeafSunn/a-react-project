import React from "react";
import "./index.scss";
import {NavLink} from "react-router-dom";
import { connect } from "react-redux";

class List extends React.Component{
	constructor(){
		super();
		this.state={
			datalist:[],
			isShow:true
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
				<span className="golist" onClick={this.golist.bind(this)}>返回</span>
			</div>
			{
				this.state.datalist.length?
			<div className="four">
				{this.state.datalist.map((item,index)=>
					<NavLink to={"/detail?name="+item.Name+""} key={index}>
						<img src={"https://res.bestcake.com/m-images/ww/jd/"+item.Name+".png?v=20170607"} />
						<p>{item.Name}</p>
						<p>{item.Ename}</p>
						<p>188.00/1.2磅</p>
					</NavLink>
				)}
			</div>:<div className="four">
				{this.props.list2.slice(0,4).map((item,index)=>
					<NavLink to={"/detail?name="+item.Name+""} key={index}>
						<img src={"https://res.bestcake.com/m-images/ww/jd/"+item.Name+".png?v=20170607"} />
						<p>{item.Name}</p>
						<p>{item.Ename}</p>
						<p>188.00/1.2磅</p>
					</NavLink>
				)}
			</div>

			}
			
				
				<ul className="page" id={this.state.isShow?"show":"hidden"}>
					{this.props.length.map((item,index)=>
						<li key={index} onClick={this.clicka.bind(this,item)} >
							<NavLink to={"/list?page="+item+""}>{item}</NavLink>
						</li>
					)}

				</ul>

			
			
			
		</div>
	}
	clicka(item){

		item=item?item:1
		console.log(item)
		var index = (item-1)*4
		var arr = this.props.list2.slice(index,index+4)
		this.setState({
			datalist:arr
		})
	}
	clickSearch(){
		console.log(this.refs.searchTxt.value);
		var regStr = eval("/(^(?=.*("+this.refs.searchTxt.value+")))/");
		var NewArr=[]
		for(var n=0;n<this.props.list2.length;n++){
			if(regStr.test(this.props.list2[n].Name)){
				//console.log(this.props.list2[n].Name)
				
				NewArr.push(this.props.list2[n])
				
				
			}
		}
		if(NewArr.length==0){
			alert("搜索不到结果，请重新输入")

		}else{
			this.setState({
				datalist:NewArr,
				isShow:false
			})
		}
		
		//console.log(this.state.isShow)

		
	}
	golist(){
		this.clicka(1)
		this.setState({
			isShow:true
		})
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
  			//分页按钮
  			for(var j=0;j<Math.ceil(newlist.length/4);j++){
  				length.push(j+1)
  			}
  			console.log(newlist)
  			//console.log(length)
			return {
				list2:newlist,
				length:length
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
	)(List);

/*

	connect(第一个参数,第二个参数)(要被包装的组件)

	第一个参数-- map state  to props
	
	第二个参数-- map methods to props
 */


