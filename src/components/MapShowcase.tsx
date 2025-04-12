import type React from "react";
import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

type MapProps = {
	apiKey: string;
};

const MapShowcase: React.FC<MapProps> = ({ apiKey }) => {
	const mapContainer = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!mapContainer.current) return;

		const map = new maplibregl.Map({
			container: mapContainer.current,
			style: `https://api.maptiler.com/maps/basic-v2-dark/style.json?key=${apiKey}`,
			center: [14.6088, 48.2266],
			zoom: 4, // Start zoomed out
			attributionControl: false,
		});

		map.on("load", () => {
			map.flyTo({
				zoom: 9, // Target zoom
				speed: 1.8, // animation speed
				curve: 1.42, // how smooth the zoom is
				easing: (t) => t, // linear easing
			});

			// Create a GPS-like animation
			const markerEl = document.createElement("div");
			markerEl.className = "relative flex items-center justify-center";

			// Add the inner green dot
			const innerDot = document.createElement("div");
			innerDot.className = "w-3 h-3 bg-green-500 rounded-full z-10";

			// Add the outer waves
			const wave = document.createElement("div");
			wave.className =
				"absolute w-4 h-4 bg-green-500 opacity-30 rounded-full animate-ping";

			// Append the inner dot and wave to the marker element
			markerEl.appendChild(innerDot);
			markerEl.appendChild(wave);

			// Add the custom marker to the map
			new maplibregl.Marker({
				element: markerEl, // Use the custom element
				draggable: false, // Ensure the marker is not draggable
			})
				.setLngLat([14.6088, 48.2266])
				.addTo(map);
		});

		return () => map.remove();
	}, [apiKey]);

	return (
		<div className="w-full h-[150px] md:h-[250px] rounded-xl overflow-hidden">
			<div ref={mapContainer} className="w-full h-full" />
		</div>
	);
};

export default MapShowcase;
