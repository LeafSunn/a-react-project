import React from "react";
import "./index.scss";
import { connect } from "react-redux";

class Cart extends React.Component{
	constructor(){
		super();
		this.state={
			cartlist:[]
		}
	}
	componentWillMount(){
		//console.log(this.props.list4)
		
	}


	render(){

		
		var upNum=function(item){
			this.props.UpNum(item)
		}
		var rdcNum=function(num){
			this.props.RdcNum(item)
		}
		console.log(this.state.cartlist)
		if(this.props.list4.length==0){
			var main=<div className="nothing">购物车空空如也......</div>
		}else{

			var main=<div className="production">
				{this.props.list4.map((item,index)=>
					<div key={index}>
						<img src={"https://res.bestcake.com/m-images/ww/jd/"+item.name+".png?v=20170607"} />
						<p>{item.name}</p>
						<p><span className="price" ref="price">188.00</span>/1.2磅</p>
						<p>	
							<button onClick={rdcNum.bind(this,item.num)}>-</button>
							<span ref="number">{item.num}</span>
							<button onClick={upNum.bind(this,item)}>+</button>
						</p>
					</div>
				)}

			</div>

		}
		var givemoney=0;
		for(let i=0;i<this.props.list4.length;i++){
			givemoney+=this.props.list4[i].num*188
		}


		return <div className="cart">
			{main}
			
			<div className="line"></div>
			<div className="cartdown">
				<span className="cart-sum">合计：</span>
				<span>{givemoney}</span>
				<button>立即支付</button>
			</div>
		</div>
	}
}

export default connect(
		(state)=>{
			//console.log(state.list4)
			return {
				list4:state.list4
			}

		},{
			UpNum:(item)=>{
				item.num++
				return{
					type:"numberup",
					payload:item
				}
			},RdcNum:(item)=>{
				item.num--
				return{
					type:"numberrdc",
					payload:item
				}
			}
		}
	)(Cart);


/*

	connect(第一个参数,第二个参数)(要被包装的组件)

	第一个参数-- map state  to props
	
	第二个参数-- map methods to props
 */


