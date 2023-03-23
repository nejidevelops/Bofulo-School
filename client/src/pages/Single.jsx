import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'
import Edit from '../images/edit.png'
import Delete from '../images/delete.png'


const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <div className="info">
            <span>Phoebe</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt='' />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti inventore adipisci odit ducimus perferendis, obcaecati cumque amet rerum labore tempore eligendi expedita earum. Quas fuga praesentium optio consequatur ipsa molestiae. <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla ex facilis harum praesentium dolorum qui. Blanditiis alias voluptates debitis ab accusantium doloremque labore atque eaque, reprehenderit quidem! Numquam, officiis.
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla ex facilis harum praesentium dolorum qui. Blanditiis alias voluptates debitis ab accusantium doloremque labore atque eaque, reprehenderit quidem! Numquam, officiis.
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla ex facilis harum praesentium dolorum qui. Blanditiis alias voluptates debitis ab accusantium doloremque labore atque eaque, reprehenderit quidem! Numquam, officiis.
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla ex facilis harum praesentium dolorum qui. Blanditiis alias voluptates debitis ab accusantium doloremque labore atque eaque, reprehenderit quidem! Numquam, officiis.
        </p>
      </div>
      <Menu />
    </div>
  )
}

export default Single
