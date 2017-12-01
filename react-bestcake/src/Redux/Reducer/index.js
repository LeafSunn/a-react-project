//主页接口数据调用
const indexlist = (state=[],info)=>{
	let {type,payload} =info;
	var data=state;
	switch(type){
		case "indexlist":

			return [...data,...payload];
		default :
			return state; 
	}

}
//列表页数据调用
const listlist = (state=[],info)=>{
	let {type,payload} =info;
	//console.log(payload)
	var data=state;
	switch(type){
		case "listlist":

			return [...data,...payload];
		default :
			return state; 
	}

}
//详情页数据调用
const detaillist = (state=[],info)=>{
	let {type,payload} =info;
	//console.log(payload)
	var data=state;
	switch(type){
		case "detaillist":

			return payload;
		default :
			return state; 
	}

}
//添加商品
const cartlist = (state=[],info)=>{
	let {type,payload} =info;
	var data=state;
	

	switch(type){
		case "cartlist":
			var arr=[...data]
			arr.push(payload)
			return arr
		case "numberup":
			var arr=[...data]
			arr.push(...payload);

			return arr
		case "numberrdc":
			var arr=[...data]
			arr.push(...payload);

			return arr
		default :
			return state; 
	}

}




export  {indexlist,listlist,detaillist,cartlist};

// reducer 的设计必须是一个纯函数
// 
// 只要每次给定相同的输入值，就一定会得到相同的输出值: 例如传入1与2，就一定会得到3
// 不会改变原始输入参数，或是外部的环境，所以没有副作用
// 不依頼其他外部的状态，变量或常量

