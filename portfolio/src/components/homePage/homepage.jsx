import portfolioPic from '../../assets/portfoliopic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'

const Homepage = () => {
    return (
        <div className='card fixed-bottom mb-5 w-50 offset-3 p-4 center'>
            <img className='backgroundpic w-100 h-100 position-static p-3'
                src={portfolioPic}
                alt='Portfolio'
            />
            <div className='d-flex justify-content-evenly' >
                <a href='mailto:adeav97@gmail.com' target="blank" > <FaEnvelope className='cursor-pointer text-black-50' size={50} />
                    {/* <i className="medium material-icons">local_post_office</i> */}
                </a>
                <a href='https://github.com/alliedeaver' target='blank' >
                    <FaGithub className='cursor-pointer text-black-50 ' size={50} />
                </a>
                <a href='https://www.linkedin.com/in/alexandria-deaver-8437b5264/' target='blank' >
                    <FaLinkedin className='cursor-pointer text-black-50 ' size={50} />
                </a>
               
            </div>
        </div>
    );
};
export default Homepage;

//have an icon for linked, github, and email  
// email local_post_office