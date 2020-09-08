import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = "images/websites/" + projects.image;
        return (
          <div key={projects.title} className='columns portfolio-item'>
            <div className='item-wrap'>
              <a href={projects.url} title={projects.title}>
                <img alt={projects.title} src={projectImage} />
                <div className='overlay'>
                  <div className='portfolio-item-meta'>
                    <h4 className='white'>{projects.title}</h4>
                    <p className='white'>{projects.category}</p>
                  </div>
                </div>
                <div className='link-icon'>
                  <i className='fa fa-link'> Live Demo</i>
                </div>
              </a>
            </div>
          </div>
        );
      });
    }

    return (
      <section id='portfolio'>
        <div className='row'>
          <div className='twelve columns collapsed'>
            <h1>Check Out Some of My Works.</h1>

            <div
              id='portfolio-wrapper'
              className='bgrid-halves s-bgrid-thirds cf columns'
            >
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
