import './ContactUs.css'
import {messagesic,twiticon,commentIc} from './svg.js'
function ContactUs(){
    return(
        <div className='contactContainer'>
            <div>
                <h3>Get In Touch With Us.</h3>
                <h4>Telephone: 01030730691</h4>
                <h4>Location: Damanhour, Egypt</h4>
            </div>
            <button>Call Me</button>
            <div>
            {messagesic} {twiticon} {commentIc} <hr />
            <p>ahmed.e.elkharadly@gmail.com</p>
            </div>
        </div>
    )
}
export default ContactUs;