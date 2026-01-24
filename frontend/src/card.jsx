import profilePic from './assets/profile.png';

function Card(){
    return(
        <div className="card">
            <img src={profilePic} alt="Profile pic" className="profile-pic"></img>
            <h1 className='name'>Sudhakar</h1>
            <p className='text'>Good at nothing</p>
        </div>
    );
}

export default Card;