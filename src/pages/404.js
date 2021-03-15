import React from "react"


const NotFoundPage = () => {

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist...</p>
      <img src="https://media1.giphy.com/media/K9Xy6osm73DbxIa8f2/source.gif" style={{width: "20rem"}}/>
    </div>
  )
}

export default NotFoundPage