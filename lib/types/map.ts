type Lat = number;
type Lng = number;

export type Position = [Lat, Lng];

export type MapMarker = {
  id: string;
  position: Position;
  timestamp: string;
  text: string;
};
