"use client";

import * as L from "leaflet";
import { useId, useRef } from "react";

import { useMounted } from "@/hooks/useMounted";
import type { MapMarker, Position } from "@/types/map";

import { default as locations } from "./locations";

import "leaflet/dist/leaflet.css";

type Props = {
  title: string;
  markers: MapMarker[];
  initialCenter?: Position;
  width?: number;
  height?: number;
  className?: string;
};

export function TrackerMap({
  title,
  markers,
  initialCenter = locations.AMSTERDAM,
  width = 600,
  height = 400,
  className = "tracker-map__container",
}: Props) {
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map>(undefined);

  useMounted(() => {
    if (ref.current && !mapRef.current) {
      mapRef.current = L.map(ref.current, {
        center: initialCenter,
        zoom: 13,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
        mapRef.current,
      );

      const icon = L.icon({
        iconUrl: `${process.env.NEXT_PUBLIC_APP_URL}/marker-icon.png`,
        iconSize: [40, 64],
        iconAnchor: [20, 64],
      });

      for (const m of markers) {
        const marker = L.marker(m.position, { icon });

        marker.bindPopup(m.text);
        marker.addTo(mapRef.current);
      }
    }
  });

  return (
    <section
      aria-labelledby={id}
      className={className}
      style={{ width, height }}
    >
      <h2 id={id}>{title}</h2>
      <div ref={ref} style={{ width: "100%", height: "100%" }} />
    </section>
  );
}
