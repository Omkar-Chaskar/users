import React from 'react'

function Card() {
  return (
    <div className="col">
        <div className="user">
            <div className="picture">
                <img className="img-fluid" src="https://picsum.photos/130/130?image=1027" alt=''/>
            </div>
            <div className="team-content">
                <h3 className="name">Michele Miller</h3>
                <h4 className="title">michelemiller@gmail.com</h4>
            </div>
        </div>
    </div>
  )
}

export default Card