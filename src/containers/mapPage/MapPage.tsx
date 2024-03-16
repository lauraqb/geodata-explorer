import axios from 'axios'
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps'
import jsonData from './mockData.json'
import {useEffect, useState} from 'react'

import FormInput from '../../components/formInput/FormInput'
import styles from './MapPage.module.scss'

function MapPage() {
  const apiKey = import.meta.env.VITE_API_KEY
  const baseUrl = 'https://app.ticketmaster.com/discovery/v2'
  const [country, setCountry] = useState('US')
  const [events, setEvents] = useState(jsonData._embedded.events)
  const [error, setError] = useState('')
  const [mapPosition, setMapPosition] = useState<null | any>(null)
  const getLocation = (event: any) => {
    const location = event._embedded.venues[0].location
    const pos = {
      lat: Number(location.latitude),
      lng: Number(location.longitude),
    }
    return pos
  }

  const fetchEvents = () => {
    const getEvents = `${baseUrl}/events.json?countryCode=${country}&apikey=${apiKey}`

    axios
      .get(getEvents)
      .then((response) => {
        setMapPosition(getLocation(response.data._embedded.events[0]))
        setEvents(response.data._embedded.events)
      })
      .catch((error) => {
        setError('An error has occurred.')
        console.log(error)
      })
  }
  useEffect(() => {
    fetchEvents()
  }, [])

  useEffect(() => {
    console.log('rerender')
  }, [mapPosition])

  return (
    <div className={styles.base}>
      <div className={styles.countryInput}>
        <FormInput
          label='Country code'
          name='country'
          value={country}
          onChange={(event: any) => setCountry(event.target.value)}
        />
        <button onClick={() => fetchEvents()}>Search</button>
      </div>
      <h3>Events:</h3>
      <div className={styles.eventsList}>
        {events.map((event) => (
          <div className={styles.event}>{event.name}</div>
        ))}
      </div>

      {error && <div>{error}</div>}

      <div style={{height: '90vh', width: '100%'}}>
        <APIProvider apiKey={''}>
          {mapPosition && (
            <Map defaultCenter={mapPosition} defaultZoom={5}>
              {events.map((event) => {
                const pos = getLocation(event)
                return (
                  <>
                    <Marker position={pos} />
                  </>
                )
              })}
            </Map>
          )}
        </APIProvider>
      </div>
    </div>
  )
}

export default MapPage
