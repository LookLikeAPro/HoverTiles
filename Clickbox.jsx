import React, {Component, PropTypes} from "react";
import commonStyles from "./common.css";

export default class Clickbox extends Component {
	static propTypes = {
		children: PropTypes.node
	};
	static ref = "TileClickbox";
	render() {
		return (<div className={commonStyles.clickbox}>{this.props.children}</div>);
	}
}
