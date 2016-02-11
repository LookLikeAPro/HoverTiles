import React, {Component, PropTypes} from "react";

export default class HoverContent extends Component {
	static propTypes = {
		children: PropTypes.node
	};
	static ref = "TileHoverContent";
	render() {
		return (<div>{this.props.children}</div>);
	}
}
