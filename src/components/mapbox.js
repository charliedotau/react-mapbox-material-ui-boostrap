import React, { Component } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

export default class Mapbox extends Component {
	
	constructor(props) {
		super(props)
		this.map={}
	        
	}

	componentDidMount() {

		// token from https://www.mapbox.com/mapbox-gl-js/examples/
		mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN; 

        this.map = new mapboxgl.Map({
            container: 'map', // container id
    		style: process.env.REACT_APP_MAPBOX_STYLE, //stylesheet location
    		center: [144.946, -37.736], // starting position
    		zoom: 11 // starting zoom
        });

        var innerThis = this;
        

        innerThis.map.on('load', function () {

           console.log('map loaded')
        }) 
	}

	componentDidUpdate() {
		
	}

	render() {
		return (
		 	<div />
		);
	}
}