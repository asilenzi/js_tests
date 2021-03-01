import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './Courses.css';


const CourseDetail = (props) => {
    const pars = new URLSearchParams(props.location.search);
    const title = pars.has("title")? pars.get("title") : "N/A";
    return (
    <div>
        <h3>Course: {title}</h3>
        CourseId: {props.match.params.id}
    </div>
    );
}

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    onCourseClicked = (id, title) => {

        this.props.history.push({
            pathname: this.props.match.path + '/' + id,
            search: '?title=' + title});
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return <article
                                className="Course"
                                id={course.id}
                                key={course.id}
                                onClick={() => this.onCourseClicked(course.id, course.title)}>{course.title}
                            </article>;
                        })
                    }
                </section>
                <Route path={this.props.match.path + '/:id'} exact component={CourseDetail} />
            </div>
        );
    }
}

export default Courses;