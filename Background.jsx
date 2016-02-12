import React, {Component, PropTypes} from "react";

export default class Background extends Component {
	static propTypes = {
		children: PropTypes.node
	};
	static ref = "TileBackground";
	render() {
		return (<div {...this.props}>{this.props.children}</div>);
	}
}
