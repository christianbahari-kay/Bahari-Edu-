import React from 'react';
import '../Styles/Courses.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Math from '../Picture2/Math.jpg';
import Biology from '../Picture2/Biology.jpg';
import Physics from '../Picture2/Physics.jpg';
import History from '../Picture2/History.jpg';
import Geo from '../Picture2/Geo.jpg';
import Chem from '../Picture2/Chem.jpg';

const Course = () => {
    const data = [
        {
            name: 'Mathematics',
            img: Math,
            instructor: 'Ver Vermillion'
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
            name: 'History',
            img: History,
            instructor: 'Elira Pendora'
        },
        {
            name: 'Geography',
            img: Geo,
            instructor: 'Petra Gurin'
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
            <h2 className="course-title">COURSE TAKEN</h2>
            <div className="course-grid">
            <Slider {...settings}>
                {data.map((d) => (
                    <div className="course-item">
                        <div> 
                            <img src={d.img} alt="" className="course-img"/>
                        </div>
                        <p className="course-name">{d.name}</p>
                        <p className="instructor">{d.instructor}</p>
                        <button className="view-course">View Course</button>
                    </div>
                ))}
            </Slider>
            </div>
        </div>
    );
};

export default Course;