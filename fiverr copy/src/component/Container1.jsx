import React from "react";

const Container1 = () => {
    return (
        <div className="container1">
            <div className="content1">
                <p>Find the right <span className="diffFont">freelance</span> <br /> service, right away</p>
                <input type="text" placeholder="Search for any service..." />
                <button>Search</button>
                <div className="popularTag">
                    <p>Popular:</p>
                    <ul>
                        <button>Website Design</button>
                        <button>Wordpress</button>
                        <button>Logo Design</button>
                        <button>AI Services</button>
                    </ul>
                </div>
            </div>
            <div className="content2">
                <img src="https://media.istockphoto.com/id/1396721868/photo/man-uses-laptop-to-video-conference-with-friends.jpg?s=612x612&w=0&k=20&c=6xJqSayS3EBBoI5kvOPjWqXCqdtGOrEil7RDLfu739Q=" alt="" />
            </div>
        </div>
    )
}

export default Container1