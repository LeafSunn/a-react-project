import React from "react";
import "./index.scss";
import Footerr from "@/components/Common/Footerr"

class App extends React.Component{
	constructor(){
		super();
		this.state={
			show:false
		}
	}

	render(){
		return <div>
			<section>
			{
				this.props.children
			}
			</section>
			<Footerr></Footerr>
		</div>
	}
}

export default App;