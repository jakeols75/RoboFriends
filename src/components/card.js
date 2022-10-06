import React from 'react'; //import react in order to use jsx

const Card = ({name, email, id}) => {

  return(
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img src={`https://robohash.org/${id}?200x200`} alt='null'/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  ); //this is jsx ^ //can return a random image by using syntax ${}
}

export default Card;
