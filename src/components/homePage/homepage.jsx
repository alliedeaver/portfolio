import portfolioPic from '../../assets/portfoliopic.jpg';
import { FaLinkedin, FaEnvelope, FaGithub, FaFile } from 'react-icons/fa'

const Homepage = () => {
    return (
        <div className='card fixed-bottom mb-5 w-50 offset-3 p-2 center'>
            <h2 className='home fst-italic mb-1 mt-3' >
        home
             </h2>
            <div className=" portfolioPic">
                <img className='backgroundpic w-50 m-5 ' 
                    src={portfolioPic}
                    alt='Portfolio' />
            </div>
            <div className='d-flex justify-content-evenly' >
                {/* <button className='hover-button'> */}
                    
                <a href='mailto:adeav97@gmail.com' target="blank" > <FaEnvelope className='cursor-pointer text-black-50' size={50} title= "email" />
                </a>
                {/* </button>  */}
                <a href='https://github.com/alliedeaver' target='blank' >
                    <FaGithub className='cursor-pointer text-black-50 ' size={50} />
                </a>
                <a href='https://www.linkedin.com/in/alexandria-deaver-8437b5264/' target='blank' >
                    <FaLinkedin className='cursor-pointer text-black-50 ' size={50} />
                </a>
                <a href='https://resume.io/r/IUJUxa1AW' target='blank' >
                    <FaFile className='cursor-pointer text-black-50 ' size={50} />
                </a>
            </div>
        </div>
    );
};
export default Homepage;

