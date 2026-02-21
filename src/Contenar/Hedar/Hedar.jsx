
import './Hedar.css'
import img from ' public/Spotify.png'
import img1 from '/public/clarity_email-line.png'
const Hedar = () => {
    return (
        <div>
          
        <div className="position-relative t backroundimges ">
        <div>
            <h1 className="position-absolute    round  "></h1>
        </div>
  <img
    className="position-absolute img translate-middle   ml-23 "
    src="/Hedar2.png"
    alt="Header"
  />
  <div className='text11 text-center '>
    <h1 className='text-center marjin2'>TechWave</h1>
    <p>Your daily dose of tech insights, productivity hacks, and personal growth</p>
    <div className='d-flex contain'>
        <button className='btn button d-flex gap-3'><span><img src={img} alt="" /></span>Listen on Spotify</button>
        <button className='btn button1  btn-outline-success'><span><img src={img1} alt="" /></span>Subscribe</button>
    </div>
  </div>

</div>


<div className='backroundColor1 my-auto '>
    <div className='text-light'>
        <h1 className='hedartext '>About the Podcast</h1>
        <p className='hedarperagirap'>techWave is your go-to podcast for staying ahead in the fast-paced world of technology.
We break down complex topics into digestible insights, explore productivity strategies that actually work,
and share stories of personal growth from industry leaders</p>

<p className='hedarperagirap ' >Join thousands of young professionals and tech enthusiasts who start their day with TechWave</p>
    </div>
  <div className='bodar'></div>
    <div className='viwes'>
        <div>
            <h1 className='viwesnambar'>150K+</h1>
            <p className='viweslist'> Monthly Listeners</p>
        </div>
        <div>
            <h1 className='viwesnambar'>200+</h1>
            <p className='viweslist'>Episodes Published</p>
        </div>
        <div>
            <h1 className='viwesnambar'>4.9★</h1>
            <p className='viweslist'>Average Rating</p>
        </div>
        <div>
            <h1 className='viwesnambar'>50+</h1>
            <p className='viweslist'>Industry Experts</p>
        </div>
    </div>
</div>



        </div>
    );
};

export default Hedar;