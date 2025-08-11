import { Stations } from "@/app/schemas/stations";

export type GroupedStations = {
  category: string;
  stations: Stations[];
};

/**
 * Groups stations by category based on fg_enable flag
 * - fg_enable = 0: Category header
 * - fg_enable = 1: Actual station
 */
export function groupStationsByCategory(
  stations: Stations[] | undefined
): GroupedStations[] {
  if (!stations) return [];

  const groups: GroupedStations[] = [];
  let currentGroup: GroupedStations | null = null;

  stations.forEach((station: Stations) => {
    if (station.fg_enable === 0) {
      if (currentGroup) {
        groups.push(currentGroup);
      }
      currentGroup = {
        category: station.sta_name,
        stations: [],
      };
    } else if (station.fg_enable === 1 && currentGroup) {
      currentGroup.stations.push(station);
    }
  });

  if (currentGroup) {
    groups.push(currentGroup);
  }

  return groups;
}

/**
 * Finds a selected station by ID from the stations list
 * Only returns stations with fg_enable = 1 (actual stations, not categories)
 */
export function findSelectedStation(
  value: string | undefined,
  stations: Stations[] | undefined
): Stations | null {
  if (!value || !stations) return null;

  return (
    stations.find(
      (station: Stations) => station.sta_id === value && station.fg_enable === 1
    ) || null
  );
}

/**
 * Finds a station by name and returns its ID
 * Used to convert display name selection to ID value
 */
export function findStationIdByName(
  stationName: string,
  stations: Stations[] | undefined
): string {
  if (!stationName || !stations) return "";

  const station = stations.find(
    (station: Stations) =>
      station.sta_name === stationName && station.fg_enable === 1
  );

  return station ? station.sta_id : "";
}

/**
 * Gets the display label for a selected station
 */
export function getStationDisplayLabel(
  selectedStation: Stations | null,
  placeholder = "Select station"
): string {
  return selectedStation ? selectedStation.sta_name : placeholder;
}
