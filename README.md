# HoverTiles

A port of Mary Lou's hover tiles to React

Uses composable components to allow extensive customization inside components.

## Usage

Hover Tiles is intended for use as a react component. Required environment includes:

	- ES6 (Webpack/Babel)
	- Stlye Loader (Webpack resource loader)

Install:

	npm install hovertile

Use:

	//Import

	import React, {Component, PropTypes} from "react";

	import Apollo from "components/HoverTile/Apollo";

	import TileContent from "components/HoverTile/Content";
	import TileHoverContent from "components/HoverTile/HoverContent";
	import TileClickbox from "components/HoverTile/Clickbox";
	import TileBackground from "components/HoverTile/Background";

	//Use as a normal react component
	class YourComponent extends React {
		render() {
			return (
				<Apollo>
					<TileBackground><img src="/image/source"/></TileBackground>
					<TileContent>Default content</TileContent>
					<TileHoverContent>Content that shows upon hover</TileHoverContent>
					<TileClickbox><a>Clickbox over the whole tile</a></TileClickbox>
				</Apollo>
			);
		}
	}

	//Image shortcut
	class YourComponent extends React {
		render() {
			return (
				<Apollo image="/image/source">
					<TileContent>Default content</TileContent>
					<TileHoverContent>Content that shows upon hover</TileHoverContent>
					<TileClickbox><a>Clickbox over the whole tile</a></TileClickbox>
				</Apollo>
			);
		}
	}


# Example

See example react project at [HoverTiles-Example](https://github.com/LookLikeAPro/HoverTiles-Example)
