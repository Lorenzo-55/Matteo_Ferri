import {
  MapContainer,
  TileLayer,
  Polyline,
  CircleMarker,
  Popup,
  useMap,
} from 'react-leaflet';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import type { Adventure } from '../types/content';
import 'leaflet/dist/leaflet.css';
function Bounds({ points }: { points: [number, number][] }) {
  const map = useMap();
  useEffect(() => {
    map.fitBounds(points, { padding: [35, 35] });
  }, [map, points]);
  return null;
}
export default function RouteExplorer({ adventure }: { adventure: Adventure }) {
  const { t } = useTranslation();
  const points: [number, number][] = [
    [adventure.center[0] - 0.016, adventure.center[1] - 0.025],
    [adventure.center[0] - 0.009, adventure.center[1] - 0.016],
    [adventure.center[0] + 0.003, adventure.center[1] - 0.012],
    [adventure.center[0] + 0.009, adventure.center[1] + 0.001],
    [adventure.center[0] + 0.006, adventure.center[1] + 0.014],
    [adventure.center[0] - 0.006, adventure.center[1] + 0.021],
    [adventure.center[0] - 0.016, adventure.center[1] - 0.025],
  ];
  const elevations = [0.05, 0.23, 0.42, 0.72, 1, 0.65, 0.05].map((factor, i) => ({
    distance: Number(((adventure.distance * i) / 6).toFixed(1)),
    elevation: Math.round(
      adventure.altitude - adventure.gain / 2 + (factor * adventure.gain) / 2,
    ),
  }));
  return (
    <>
      <p className="notice">{t('routeNote')}</p>
      <div className="map" aria-label={`${adventure.title} illustrative route`}>
        <MapContainer
          center={adventure.center}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Polyline positions={points} pathOptions={{ color: '#bd693d', weight: 4 }} />
          <CircleMarker
            center={points[0]}
            radius={7}
            pathOptions={{ color: '#23382e', fillOpacity: 1 }}
          >
            <Popup>Start / Finish · {adventure.title}</Popup>
          </CircleMarker>
          <CircleMarker center={points[3]} radius={6}>
            <Popup>
              {t('overview')} · {adventure.altitude} m
            </Popup>
          </CircleMarker>
          <Bounds points={points} />
        </MapContainer>
      </div>
      <div
        className="elevation"
        role="img"
        aria-label={`${adventure.distance} km; ${adventure.gain} m illustrative elevation gain`}
      >
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart
            data={elevations}
            margin={{ left: 12, right: 20, top: 20, bottom: 10 }}
          >
            <XAxis dataKey="distance" unit=" km" />
            <YAxis domain={['dataMin - 50', 'dataMax + 50']} unit=" m" width={75} />
            <Tooltip
              formatter={(v) => [`${v} m`, t('route')]}
              labelFormatter={(v) => `${v} km`}
            />
            <Area
              type="monotone"
              dataKey="elevation"
              stroke="#bd693d"
              fill="#bd693d"
              fillOpacity={0.15}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <p className="muted">
        {adventure.distance} km · +{adventure.gain} m ·{' '}
        {Math.min(...elevations.map((p) => p.elevation))}–{adventure.altitude} m
      </p>
    </>
  );
}
