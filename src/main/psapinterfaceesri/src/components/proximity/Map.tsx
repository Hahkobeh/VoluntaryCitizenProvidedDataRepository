import esriConfig from '@arcgis/core/config';
import Circle from '@arcgis/core/geometry/Circle';
import Point from '@arcgis/core/geometry/Point';
import Graphic from '@arcgis/core/Graphic';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
import SimpleLineSymbol from '@arcgis/core/symbols/SimpleLineSymbol';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
import MapView from '@arcgis/core/views/MapView';
import WebMap from '@arcgis/core/WebMap';
import BaseMapToggle from '@arcgis/core/widgets/BasemapToggle';
import Bookmarks from '@arcgis/core/widgets/Bookmarks';
import Legend from '@arcgis/core/widgets/Legend';
import ScaleBar from '@arcgis/core/widgets/ScaleBar';
import Search from '@arcgis/core/widgets/Search';
import Zoom from '@arcgis/core/widgets/Zoom';

import React, { useEffect, useRef, useState } from 'react';
import { cameraData } from '../../cameras';
import { PropertyInfo } from '../../interfaces';

import '../../styles/proximity.scss';

esriConfig.apiKey = process.env.ESRI_API_KEY ?? '';

type Props = {
	properties: PropertyInfo[];
	selected: number;
	setSelected: React.Dispatch<React.SetStateAction<number>>;
	location: Point | undefined;
	setLocation: React.Dispatch<React.SetStateAction<Point | undefined>>;
	radius: number;
	setRadius: React.Dispatch<React.SetStateAction<number>>;
	view: MapView | undefined;
	setView: React.Dispatch<React.SetStateAction<MapView | undefined>>;
};

const Map = ({
	properties,
	selected,
	setSelected,
	location,
	setLocation,
	radius,
	setRadius,
	view,
	setView,
}: Props) => {
	const mapDiv = useRef<any>(null);
	const [map, setMap] = useState<WebMap>();
	const [showCameras, setShowCameras] = useState(false);
	let cameraFL = new FeatureLayer({
		title: 'cameras',
		source: cameraData,
		renderer: new SimpleRenderer({
			label: 'Camera',
			symbol: new SimpleMarkerSymbol({
				color: '#0000ff',
				style: 'diamond',
				outline: new SimpleLineSymbol({
					color: '#598DD8',
					width: 2,
				}),
			}),
		}),
		objectIdField: 'ObjectID', // This must be defined when creating a layer from `Graphic` objects
		fields: [
			{
				name: 'ObjectID',
				alias: 'ObjectID',
				type: 'oid',
			},
		],
	});

	const [circleGraphic, setCircleGraphic] = useState<Graphic>();

	useEffect(() => {
		if (!map) return;
		if (showCameras) {
			console.log('showing');
			map?.add(cameraFL);
		} else {
			console.log(map?.layers.find((lay) => lay.title === 'cameras'));
			map?.layers.remove(
				map?.layers.find((lay) => lay.title === 'cameras')
			);
		}
	}, [showCameras, map]);

	useEffect(() => {
		if (!location) return;
		if (!view) return;

		if (circleGraphic) {
			console.log(view.graphics);
			view.graphics.remove(circleGraphic);
		}

		let circle = new Circle({
			center: location,
			radius: radius,
		});

		console.log(circle);

		let graphic = new Graphic({
			geometry: circle,

			symbol: new SimpleFillSymbol({
				style: 'solid',
				outline: {
					width: 3,
					color: 'red',
				},
			}),
		});

		view.graphics.add(graphic);
		setCircleGraphic(graphic);
	}, [radius, location]);

	useEffect(() => {
		if (mapDiv.current) {
			const webmap = new WebMap({
				portalItem: {
					id: 'c5d11500d2794aceb6fb7de219e8be43',
				},
			});

			const view = new MapView({
				container: mapDiv.current,
				map: webmap,
			});

			view.ui.remove('zoom');

			view.on('click', (e: any) => {
				let screenPoint = {
					x: e.x,
					y: e.y,
				};

				view.hitTest(screenPoint).then((response) => {
					var graphicHits = response.results?.filter(
						(result) =>
							// check if the graphic belongs to the layer of interest
							result.layer &&
							(result.layer.title === 'Properties' ||
								result.layer.title ===
									'Houses With Hazardous Materials')
					);
					if (graphicHits.length >= 1) {
						setSelected(
							(graphicHits.at(0) as any).graphic.attributes
								.ObjectID
						);
					} else {
						setLocation(e.mapPoint);
					}
				});
			});

			const bookmarks = new Bookmarks({
				view,
				editingEnabled: false,
			});

			const zoom = new Zoom({
				view: view,
			});

			view.ui.add(zoom, 'bottom-left');

			const search = new Search({
				view: view,
				locationEnabled: false,
			});

			view.ui.add(search, 'top-left');

			search.on('search-complete', (result) => {
				setLocation(
					search.results.at(0).results.at(0).target.geometry.centroid
				);
			});

			const bmt = new BaseMapToggle({
				view: view,
				nextBasemap: 'satellite',
			});

			view.ui.add(bmt, 'bottom-right');



			const scalebar = new ScaleBar({
				view: view,
				unit: 'dual',
			});

			view.ui.add(scalebar, 'bottom-left');
			setMap(webmap);
			console.log('setting view');
			setView(view);
		}
	}, []);

	useEffect(() => {
		if (!map) return;
		if (properties.length === 0) return;

		const houseLayer = new FeatureLayer({
			title: 'Properties',
			source: [
				...properties
					.filter((prop) => prop.hazardousMaterials.length === 0)
					.map((prop) => ({
						geometry: new Point({
							x: prop.property.lng,
							y: prop.property.lat,
						}),
						attributes: {
							ObjectID: prop.property.propertyId,
						},
					})),
			],

			renderer: new SimpleRenderer({
				label: 'House',
				symbol: new SimpleMarkerSymbol({
					color: '#102A44',
					style: 'circle',
					outline: new SimpleLineSymbol({
						color: '#598DD8',
						width: 2,
					}),
				}),
			}),
			objectIdField: 'ObjectID', // This must be defined when creating a layer from `Graphic` objects
			fields: [
				{
					name: 'ObjectID',
					alias: 'ObjectID',
					type: 'oid',
				},
			],
		});

		if (properties.find((prop) => prop.hazardousMaterials.length !== 0)) {
			const houseHazardLayer = new FeatureLayer({
				title: 'Houses With Hazardous Materials',
				source: [
					...properties
						.filter((prop) => prop.hazardousMaterials.length > 0)
						.map((prop) => ({
							geometry: new Point({
								x: prop.property.lng,
								y: prop.property.lat,
							}),
							attributes: {
								ObjectID: prop.property.propertyId,
							},
						})),
				],

				renderer: new SimpleRenderer({
					label: 'Hazardous Material',
					symbol: new SimpleMarkerSymbol({
						color: '#102A44',
						style: 'triangle',
						outline: new SimpleLineSymbol({
							color: '#ff0000',
							width: 2,
						}),
					}),
				}),
				objectIdField: 'ObjectID', // This must be defined when creating a layer from `Graphic` objects
				fields: [
					{
						name: 'ObjectID',
						alias: 'ObjectID',
						type: 'oid',
					},
				],
			});
			map.add(houseHazardLayer);
		}
		map.add(houseLayer);
	}, [properties, map]);

	let selectedProp: PropertyInfo | undefined;
	if (selected) {
		selectedProp = properties.find(
			(prop) => prop.property.propertyId === selected
		);
	}

	return (
		<>
			<select
				value={radius}
				onChange={(e) => setRadius(parseInt(e.target.value))}
				className='radius'
			>
				<option value={50}>50 m</option>
				<option value={100}>100 m</option>
				<option value={500}>500 m</option>
				<option value={1000}>1 km</option>
				<option value={5000}>5 km</option>
				<option value={10000}>10 km</option>
			</select>
			<label className='p-option'>
				Cameras
				<input
					type='checkbox'
					checked={showCameras}
					onChange={() => setShowCameras(!showCameras)}
				/>
			</label>
			{selectedProp && (
				<div className='p-menu'>
					<ul>
						{selectedProp.hazardousMaterials.length ? (
							selectedProp.hazardousMaterials.map((mat, i) => (
								<li key={i}>
									{(mat as any).commonName +
										', ' +
										(mat as any).substanceCategory +
										', ' +
										(mat as any).substanceContainer}
								</li>
							))
						) : (
							<li>No Hazardous Materials</li>
						)}
					</ul>
				</div>
			)}

			<div className='mapDiv' ref={mapDiv}></div>
		</>
	);
};

export default Map;
