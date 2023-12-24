import './showimage.css'
import { motion } from "framer-motion";
import images from "../../images";
import Marquee from "react-fast-marquee";
const ShowImage = () => {
    return (
        <div className='mt-24'>
            <h2 className='text-bold text-5xl text-center  border-b-8'>Our Users</h2>
            <div className='mt-4'>
                <Marquee>
                    <h2 className='border-2 border-primary p-3 mx-2 rounded-lg bg-blue-300'>Developers</h2>
                    <h2 className='border-2 border-primary p-3 mx-2 rounded-lg bg-blue-300'>Corporate professionals</h2>
                    <h2 className='border-2 border-primary p-3 mx-2 rounded-lg bg-blue-300'>Bankers</h2>
                    <h2 className='border-2 border-primary p-3 mx-2 rounded-lg bg-blue-300'>Students</h2>
                    <h2 className='border-2 border-primary p-3 mx-2 rounded-lg bg-blue-300'>Doctors</h2>
                    <h2 className='border-2 border-primary p-3 mx-2 rounded-lg bg-blue-300'>Engineers</h2>
                    <h2 className='border-2 border-primary p-3 mx-2 rounded-lg bg-blue-300'>Astronaute</h2>
                    <h2 className='border-2 border-primary p-3 mx-2 rounded-lg bg-blue-300'>Teachers</h2>
                    <h2 className='border-2 border-primary p-3 mx-2 rounded-lg bg-blue-300'>Worker</h2>
                    <h2 className='border-2 border-primary p-3 mx-2 rounded-lg bg-blue-300'>Nurse</h2>
                    <h2 className='border-2 border-primary p-3 mx-2 rounded-lg bg-blue-300'>Driver</h2>
                </Marquee>
            </div>
            <div className='mt-5'>
                <motion.div className="carousel">
                    <motion.div>
                        <div className='grid grid-cols-4 gap-4  '>
                            {images.map((image) => {
                                console.log(image)
                                return (
                                    <motion.div
                                        whileHover={{ scale: 1.2 }}
                                        // whileTap={{ scale: 2 }}
                                        key={image}
                                    >
                                        <img className='w-[400px] rounded-xl' src={image} alt="image" />
                                    </motion.div>

                                );

                            })}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default ShowImage;