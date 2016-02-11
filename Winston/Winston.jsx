import React, {Component, PropTypes} from "react";
require("../normalize.css");
import commonStyles from "../common.css";
import styles from "./Winston.css";

export default class Winston extends Component {
	static propTypes = {
		image: PropTypes.string,
		children: PropTypes.node
	};
	render() {
		const {image, children} = this.props;
		var content;
		var hoverContent;
		var clickBox;
		var background;
		if (children && Array === children.constructor) {
			content = children.filter(node => node.type.ref === "TileContent")[0];
			hoverContent = children.filter(node => node.type.ref === "TileHoverContent")[0];
			clickBox = children.filter(node => node.type.ref === "TileClickbox")[0];
			background = children.filter(node => node.type.ref === "TileBackground")[0];
		}
		else {
			content = children;
		}
		return (<div className={commonStyles.grid}>
				<figure className={styles.winston}>
					{image? <img className={styles.background} src={image} />
								: <div className={styles.background}>{background}</div>}
					<figcaption>
							<div className={styles.content}>{content}</div>
							<div className={styles.hoverContent}>{hoverContent}</div>
							{clickBox}
					</figcaption>
				</figure>
			</div>);
	}
}
