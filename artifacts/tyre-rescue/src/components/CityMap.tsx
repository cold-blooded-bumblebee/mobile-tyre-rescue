import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface CityMapProps {
  city: string;
  center: [number, number];
  zoom?: number;
  height?: string;
}

export function CityMap({ city, center, zoom = 12, height = "320px" }: CityMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center,
      zoom,
      zoomControl: true,
      scrollWheelZoom: false,
    });

    mapRef.current = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);

    fetch(
      `https://nominatim.openstreetmap.org/search.php?q=${encodeURIComponent(city + ", UK")}&format=geojson&polygon_geojson=1&limit=1`,
      { headers: { "Accept-Language": "en" } }
    )
      .then((r) => r.json())
      .then((data) => {
        if (data.features && data.features.length > 0) {
          const layer = L.geoJSON(data as GeoJSON.FeatureCollection, {
            style: {
              color: "#0A1F44",
              weight: 3,
              fillColor: "#FFD700",
              fillOpacity: 0.25,
              dashArray: undefined,
            },
          }).addTo(map);
          map.fitBounds(layer.getBounds(), { padding: [20, 20] });
        }
      })
      .catch(() => {});

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [city, center, zoom]);

  return (
    <div
      ref={containerRef}
      style={{ height, width: "100%", borderRadius: "0.75rem", overflow: "hidden", zIndex: 0 }}
    />
  );
}
