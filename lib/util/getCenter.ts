import type { Position } from "@/types/map";

/**
 * Gets the center of a set of positions on a sphere.
 */
export function getCenter(positions: Position[]): Position {
  const numPositions = positions.length;
  let [x, y, z] = [0, 0, 0];

  // convert each point to 3D cartesian coordinates
  // then average over all coordinates and finally
  // convert average coordinate back to lat-lng
  for (const p of positions) {
    const radLat = (p[0] * Math.PI) / 180;
    const radLng = (p[1] * Math.PI) / 180;

    x += Math.cos(radLat) * Math.cos(radLng);
    y += Math.cos(radLat) * Math.sin(radLng);
    z += Math.sin(radLat);
  }

  x /= numPositions;
  y /= numPositions;
  z /= numPositions;

  const hypotenuse = Math.sqrt(x * x + y * y);
  const a = Math.atan2(z, hypotenuse);
  const b = Math.atan2(y, x);

  const lat = (a * 180) / Math.PI;
  const lng = (b * 180) / Math.PI;

  return [lat, lng];
}
