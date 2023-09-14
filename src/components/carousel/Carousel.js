import React from 'react';

function Carousel() {
    const [active, setActive] = React.useState(0)

    React.useEffect(() => {
        const interval = setInterval(() => {
            setActive(active === 0 ? 1 : active === 1 ? 2 : 0)
        }, 5000)
        return () => {
            clearInterval(interval)
        }

    }, [active])


    return (
        <div id="carouselExampleIndicators" className="carousel slide h-50" data-ride="carousel" data-interval="2000"> {/* Set data-interval to the desired time in milliseconds */}
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" ></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className={`carousel-item ${active === 0 ? "active" : ""}`}>
                    <img height="500px" width="100%" className="d-block w-100 rounded" src="https://apts.gov.in/media/images/carousels/Carousel-1.jpg" alt="First slide" />
                </div>
                <div className={`carousel-item ${active === 1 ? "active" : ""}`}>
                    <img height="500px" width="100%" className="d-block w-100 rounded" src="https://www.forbes.com/advisor/wp-content/uploads/2022/09/Image_-_MSP_.jpeg.jpg" alt="Second slide" />
                </div>
                <div className={`carousel-item ${active === 2 ? "active" : ""}`}>
                    <img height="500px" width="100%" className="d-block w-100 rounded" src="https://images.pexels.com/photos/7606074/pexels-photo-7606074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Third slide" />
                </div>
            </div>
        </div>
    );
}

export default Carousel;
