import React from 'react'

const Menu = () => {
    const posts = [
        {
          id: 1,
          title: "Lorem ipsum",
          desc: 'Lorem ipsum dolor sit amet',
          img: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          id: 2,
          title: "Lorem ipsum",
          desc: 'Lorem ipsum dolor sit amet',
          img: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          id: 3,
          title: "Lorem ipsum",
          desc: 'Lorem ipsum dolor sit amet',
          img: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          id: 4,
          title: "Lorem ipsum",
          desc: 'Lorem ipsum dolor sit amet',
          img: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
      ]
    return (
        <div className='menu'>
          <h1>Other posts you may like</h1>
          {posts.map(post => (
            <div className="post" key={post.id}>
                <img src={post.img} alt="" />
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
          ))}
        </div>
    )
}

export default Menu
