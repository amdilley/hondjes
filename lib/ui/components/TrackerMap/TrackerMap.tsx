"use client";

import * as L from "leaflet";

import type { MapMarker, Position } from "@/types/map";

import { default as locations } from "./locations";
import { useMounted } from "@/hooks/useMounted";
import { useRef } from "react";

type Props = {
  className?: string;
  initialCenter?: Position;
  markers: MapMarker[];
};

export function TrackerMap({
  className = "tracker-map__container",
  initialCenter = locations.AMSTERDAM,
  markers,
}: Props) {
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

      for (const m of markers) {
        const marker = L.marker(m.position);

        marker.bindPopup(m.text);
        marker.addTo(mapRef.current);
      }
    }
  });

  return <div ref={ref} className={className} />;
}
