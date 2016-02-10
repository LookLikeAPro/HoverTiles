import React, {Component, PropTypes} from "react";
require("../normalize.css");
import commonStyles from "../common.css";
import styles from "./Oscar.css";

export default class Oscar extends Component {
	static propTypes = {
		content: PropTypes.node,
		hoverContent: PropTypes.node,
		image: PropTypes.string
	};
	render() {
		const {content, hoverContent, image} = this.props;
		return (<div className={commonStyles.grid}>
				<figure className={styles.oscar}>
					<img className={styles.background} src={image}/>
					<figcaption>
						<div>
							<div className={styles.content}>{content}</div>
							<div className={styles.hoverContent}>{hoverContent}</div>
						</div>
					</figcaption>
				</figure>
			</div>);
	}
}
