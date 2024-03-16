import axios from 'axios'
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps'
import jsonData from './mockData.json'
import {useEffect, useState} from 'react'
import styles from './MapPage.module.scss'

function MapPage() {
  const apiKey = import.meta.env.VITE_API_KEY
  const baseUrl = 'https://app.ticketmaster.com/discovery/v2'

  const [events, setEvents] = useState(jsonData._embedded.events)
  const [error, setError] = useState('')

  const getLocation = (event: any) => {
    const location = event._embedded.venues[0].location
    const pos = {
      lat: Number(location.latitude),
      lng: Number(location.longitude),
    }
    return pos
  }
  const position = getLocation(jsonData._embedded.events[0])
  useEffect(() => {
    const country = 'US'
    const getEvents = `${baseUrl}/events.json?countryCode=${country}&apikey=${apiKey}`

    axios
      .get(getEvents)
      .then((response) => {
        // handle success
        console.log(response)
        setEvents(response.data._embedded.events)
      })
      .catch((error) => {
        setError('An error has occurred.')
        console.log(error)
      })
  }, [])

  return (
    <div className={styles.base}>
      <h3>Events:</h3>
      <div className={styles.eventsList}>
        {events.map((event) => (
          <div className={styles.event}>{event.name}</div>
        ))}
      </div>

      {error && <div>{error}</div>}
      <div style={{height: '100vh', width: '100%'}}>
        <APIProvider apiKey={''}>
          <Map defaultCenter={position} defaultZoom={5}>
            {events.map((event) => {
              const pos = getLocation(event)
              return (
                <>
                  <Marker position={pos} />
                </>
              )
            })}
          </Map>
        </APIProvider>
      </div>
    </div>
  )
}

export default MapPage
