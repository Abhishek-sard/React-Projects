import ProfilePic from './assets/profile.jpg'
function Card(){
    return(
        <div className="card">
            <img className="card-image" src="{profilePic}" alt="profile picture" />
            <h2 className="card-tittle">Abhishe sardar</h2>
            <p className="card-text">this is image</p>
        </div>
    );
}
export default Card