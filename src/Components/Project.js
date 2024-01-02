import React from 'react'
import Card  from './Card.jsx'
import Portfolio from "../Image/Portfolio.png"
import Stoman from "../Image/Stoman.png"


const Project = () => {
  return (
    <div>
        <div style={{marginBottom: 200}}>
            <h1 style={{ color: "#ccd6f6" }} className='project'>Projects</h1>

            <div className="flex flex-col">
              <div className="grid md:grid-cols-3 gap-9   grid-cols-1 py-6">
              <Card
                 img={Portfolio}
                 title="Portfolio"
                 terminologies="React, css"
              />
              <Card
                 img={Stoman}
                 title="Stoman"
                 terminologies="React, css"
              />
              <Card
                 img={Stoman}
                 title="Portfolio"
                 terminologies="React, css"
              />
              </div>

               <div className="grid md:grid-cols-3 gap-9   grid-cols-1 py-6">
              <Card
                 img={Portfolio}
                 title="Portfolio"
                 terminologies="React, css"
              />
              <Card
                 img={Stoman}
                 title="Stoman"
                 terminologies="React, css"
              />
              <Card
                 img={Stoman}
                 title="Portfolio"
                 terminologies="React, css"
              />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Project