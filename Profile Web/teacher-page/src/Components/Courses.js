import React from 'react';
import '../Styles/Courses.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Environmetal from '../Picture/Envi.jpg';
import Biology from '../Picture/Biology.jpg';
import Physics from '../Picture/Physics.jpg';
import HumAn from '../Picture/HumAn.jpg';
import Chem from '../Picture/Chem.jpg';

const Course = () => {
    const data = [
        {
            name: 'Environmetal Science',
            img: Environmetal,
            instructor: 'Kent Ito'
        },
        {
            name: 'Biology',
            img: Biology,
            instructor: 'Kent Ito'
        },
        {
            name: 'Physics',
            img: Physics,
            instructor: 'Kent Ito'
        },
        {
            name: 'Human Anatomy',
            img: HumAn,
            instructor: 'Kent Ito'
        },
        {
            name: 'Chemistry',
            img: Chem,
            instructor: 'Kent Ito'
        }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    }

    return (
        <div className="courses">
            <h2 className="course-title">COURSE TAUGHT</h2>
            <div className="course-grid">
            <Slider {...settings}>
                {data.map((d) => (
                    <div className="course-item">
                        <div> 
                            <img src={d.img} alt="" className="course-img"/>
                        </div>
                        <p className="course-name">{d.name}</p>
                        <p className="instructor">{d.instructor}</p>
                        <button className="view-course">Edit Course</button>
                    </div>
                ))}
            </Slider>
            </div>
        </div>
    );
};

export default Course;