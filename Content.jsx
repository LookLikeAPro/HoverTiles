import React, {Component, PropTypes} from "react";

export default class Content extends Component {
	static propTypes = {
		children: PropTypes.node
	};
	static ref = "TileContent";
	render() {
		return (<div {...this.props}>{this.props.children}</div>);
	}
}
