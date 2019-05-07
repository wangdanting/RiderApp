import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { MapView, Marker } from 'react-native-amap3d';
import { Flex } from '@ant-design/react-native';
import styles from './style';

const Map = ({ lng, lat, fromLat, fromLng, destLat, destLng }) => {
  const latDelta = Math.abs(Math.max(fromLat, lat, destLat) - Math.min(fromLat, lat, destLat));
  const lngDelta = Math.abs(Math.max(fromLng, lng, destLng) - Math.min(fromLng, lng, destLng));

  return (
    <View style={styles.map}>
      <MapView
        style={styles.mapInner}
        showsZoomControls={false}
        showsLocationButton={false}
        showsTraffic
        zoomEnabled
        scrollEnabled
        coordinate={{
          latitude: lat,
          longitude: lng
        }}
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: (latDelta > lngDelta ? latDelta : lngDelta) || 0.04,
          longitudeDelta: (latDelta > lngDelta ? latDelta : lngDelta) || 0.04
        }}
      >
        <Marker
          active
          image='position_rider_map'
          coordinate={{
            latitude: lat,
            longitude: lng
          }}
        >
          <Flex justify='around' style={styles.info_box}>
            <View style={styles.triangle} />
            <View style={styles.divider} />
            <Text>距商家</Text>
            <Text>1.2km</Text>
          </Flex>
        </Marker>
        {fromLng && fromLat ? (
          <Marker
            image='position_qu'
            coordinate={{
              latitude: Number(fromLat),
              longitude: Number(fromLng)
            }}
          />
        ) : null}
        {destLat && destLng ? (
          <Marker
            image='position_song'
            coordinate={{
              latitude: destLat,
              longitude: destLng
            }}
          />
        ) : null}
      </MapView>
    </View>
  );
};

Map.propTypes = {
  lng: PropTypes.number,
  lat: PropTypes.number,
  fromLat: PropTypes.number,
  fromLng: PropTypes.number,
  destLat: PropTypes.number,
  destLng: PropTypes.number
};

Map.defaultProps = {
  lng: 106.534892,
  lat: 29.551891,
  fromLat: 0,
  fromLng: 0,
  destLat: 0,
  destLng: 0
};

export default Map;
