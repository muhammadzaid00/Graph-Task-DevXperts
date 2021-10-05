//imports
import React, {useState, useEffect} from 'react'
import {ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts'

const App = () => {
  const url = 'https://api.coincap.io/v2/assets/?limit=10'
  const [data, setData] = useState()

  useEffect(() => {
    fetch(url).then((response) => {
      if (response.ok) { //response.ok return tru if response is succesfully returned.
       return response.json()
      }
    })
    .then((data) => {
      setData(data.data) //set data coming from fetch api to state.
    })
    .catch((error) => {
      console.log("Error: ", error) 
    })
  }, [])

return (
  <React.Fragment>
  <ResponsiveContainer width="100%" aspect={2}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
          top: 50,
          right: 30,
          left: 20,
          bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="priceUsd" domain={[0, 50000]} tickCount={8}/> {/* Customized Bar*/}
          <Tooltip />
          <Legend />
          <Bar dataKey="priceUsd" fill="#8884d8" />
          <Bar dataKey="names" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
)}
export default App;
