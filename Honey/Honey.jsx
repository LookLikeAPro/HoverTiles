import React, {Component, PropTypes} from "react";
require("../normalize.css");
import commonStyles from "../common.css";
import styles from "./Honey.css";

export default class Honey extends Component {
	static propTypes = {
		content: PropTypes.node,
		hoverContent: PropTypes.node,
		image: PropTypes.string
	};
	render() {
		const {content, hoverContent, image} = this.props;
		return (<div className={commonStyles.grid}>
				<figure className={styles.honey}>
					<img className={styles.background} src={image}/>
					<figcaption>
						<div>
							<div className={styles.content}>{content}<i>{hoverContent}</i></div>
						</div>
					</figcaption>
				</figure>
			</div>);
	}
}
