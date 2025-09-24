import React from 'react'
import { FaStar , FaBookOpen , FaChevronRight  } from "react-icons/fa";
import { IoMdAlarm } from "react-icons/io";

export default function Course({img, title, department, description, rating, sales, price, 
  discount, duration, lessons }) {
  return (
    <div className="course">
        <span className="sale">sale</span>
        <img src={img} alt={title} />
        <div className="content">
          <div className="course-field">
            <p className="department">{department}</p>
            <p className="rating">
                <FaStar />{rating}</p>
          </div>
          <h3>{title}</h3>
          <p className="description">{description}</p>
          <p className="sales">{sales} Sales</p>
          <p className="price">
            <del>{price}</del>
            <span className="text-secondary">{discount}</span>
          </p>
          <div className="course-info">
            <p>
              <IoMdAlarm />
              {duration}
            </p>
            <p>
              <FaBookOpen />
              {lessons}
            </p>
          </div>
          <a href="#" className="btn-learn">Learn More <FaChevronRight />
            </a>          
        </div>
    </div>
  )
}