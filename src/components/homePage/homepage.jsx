import portfolioPic from '../../assets/portfoliopic.jpg';
import { FaLinkedin, FaEnvelope, FaGithub, FaFile } from 'react-icons/fa'

const Homepage = () => {
    return (
        <div className='card fixed-bottom mb-4 w-50 offset-3 p-4 center'>
            <div>
                <img className=' backgroundpic w-75 h-75 position-static m-5 p-1'
                    src={portfolioPic}
                    alt='Portfolio' />
            </div>
            <div className='d-flex justify-content-evenly' >
                <a href='mailto:adeav97@gmail.com' target="blank" > <FaEnvelope className='cursor-pointer text-black-50' size={50} />
                </a>
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

