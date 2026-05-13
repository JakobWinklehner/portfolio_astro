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

		// Determine the map style based on system color scheme
		const isDarkMode = window.matchMedia(
			"(prefers-color-scheme: dark)",
		).matches;
		const mapStyle = isDarkMode
			? `https://api.maptiler.com/maps/basic-v2-dark/style.json?key=${apiKey}`
			: `https://api.maptiler.com/maps/basic-v2-light/style.json?key=${apiKey}`;

		const map = new maplibregl.Map({
			container: mapContainer.current,
			style: mapStyle,
			center: [14.6088, 48.2266],
			zoom: 4, // Start zoomed out
			attributionControl: false,
			dragPan: false,
			touchZoomRotate: false,
			scrollZoom: false,
		});

		// Handle scroll zoom to always zoom to map center
		mapContainer.current.addEventListener("wheel", (e) => {
			e.preventDefault();
			const zoomDelta = e.deltaY > 0 ? -0.5 : 0.5;
			const currentZoom = map.getZoom();
			map.easeTo({
				zoom: currentZoom + zoomDelta,
				duration: 300,
			});
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
			markerEl.className = "relative flex items-center justify-center cursor-pointer";

			// Add the hover tooltip above the marker
			const tooltip = document.createElement("div");
			tooltip.className =
				"pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap rounded-full px-3 py-1 text-xs shadow-lg opacity-0 transition-opacity duration-200 z-20";
			tooltip.style.backgroundColor = "var(--color-background)";
			tooltip.style.color = "var(--color-foreground)";
			tooltip.textContent = "Hey, you found me!";

			const tooltipArrow = document.createElement("div");
			tooltipArrow.className =
				"pointer-events-none absolute left-1/2 top-full -translate-x-1/2 h-2 w-2 rotate-45";
			tooltipArrow.style.backgroundColor = "var(--color-background)";

			tooltip.appendChild(tooltipArrow);
			markerEl.appendChild(tooltip);

			markerEl.addEventListener("mouseenter", () => {
				tooltip.classList.remove("opacity-0");
				tooltip.classList.add("opacity-100");
			});

			markerEl.addEventListener("mouseleave", () => {
				tooltip.classList.remove("opacity-100");
				tooltip.classList.add("opacity-0");
			});

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
				.setLngLat([14.6078, 48.2285])
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
