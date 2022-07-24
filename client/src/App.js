import React, { useState, useEffect } from 'react'

const App = () => {
  const [items, setItems] = useState([]);
  
  
  useEffect(() => {
    const url = "http://localhost:5000/api/v1.0/test"
    fetch(url).then(
      res => res.json()
    ).then(
      data => {
        console.log(data)
        setItems(data["items"])
      }
    )
  }, [])

  return (
    <div>
      {(items.length == 0) ?  <p>Loading</p> :
      <ul>
      {items.map(item => (
        <li key={item.name}>
          {item.name} {item.price}
        </li>
      ))}
      </ul>
      }
    </div>
  )
}

export default App