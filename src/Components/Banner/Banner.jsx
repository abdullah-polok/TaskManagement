import { Link } from "react-router-dom"
import LazyLoad from 'react-lazyload';
import ban1 from '../../assets/Banner/airfocus-f2C59x5uvn8-unsplash.jpg'
import ban2 from '../../assets/Banner/airfocus-IoINVPQe738-unsplash.jpg'
import ban3 from '../../assets/Banner/airfocus-Zu2JOWDXAt4-unsplash (2).jpg'
import './styles.css'
const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="container carousel-item relative w-full">
                <LazyLoad>
                    <img src={ban1} className="image rounded-md w-full" />
                </LazyLoad>

                <div className="overlay absolute inset-0 bottom-10 flex-col  justify-center items-center">
                    <h2 className='lg:text-4xl font-bold uppercase'>Planning</h2>
                    <p className='lg:text-xl text-center px-7'>Let our advance worrying become advance thinking and planning.Those who plan do better than those who do not plan even though they rarely stick to their plan.A good plan can help with risk analyses but it will never guarantee the smooth running of the project</p>
                    <div>
                        <Link className='btn btn-md btn-primary btn-primary mt-60' to={'/createtask'}>Let’s Explore</Link>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="container carousel-item relative w-full">
                <LazyLoad>
                    <img src={ban2} className="image rounded-md w-full" />
                </LazyLoad>

                <div className="overlay absolute top-1/2 flex-col text-center justify-center items-center">
                    <h2 className='lg:text-4xl font-bold uppercase'>Leadership</h2>
                    <p className='lg:text-xl text-center px-7'>Management is doing things right; leadership is doing the right things.Effective leaders help others to understand the necessity of change and to accept a common vision of the desired outcome</p>
                    <div>
                        <Link className='btn btn-md btn-primary btn-primary mt-60' to={'/createtask'}>Let’s Explore</Link>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className=" container carousel-item relative w-full">
                <LazyLoad>
                    <img src={ban3} className="image rounded-md w-full" />
                </LazyLoad>
                <div className="overlay absolute inset-0 bottom-10 flex-col justify-center items-center">
                    <h2 className='lg:text-4xl font-bold uppercase'>Management</h2>
                    <p className='lg:text-xl text-center px-7'>Get the right people. Then no matter what all else you might do wrong after that, the people will save you. That’s what management is all about.Management is, above all, a practice where art, science, and craft meet.</p>
                    <div>
                        <Link className='btn btn-md btn-primary btn-primary mt-60' to={'/createtask'}>Let’s Explore</Link>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;