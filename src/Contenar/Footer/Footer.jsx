import './Footer.css'

const Footer = () => {
    return (
        <div >
            <div className="backround">
<h1 style={{'marginRight':'150px','paddingTop':'100px'}} className="navbar-brand marjin  text-center " href="#"><span className='text-light'>Tech</span><span className='textColor'>Wave</span></h1>


<div className='d-flex  justify-content-center ' style={{'gap':'15px','alignItems':'center' ,'marginTop':'30px','color':'white'}} >
    <div style={{'display':'flex','alignItems':'center' ,'gap':'10px'}}>
        <img style={{'marginTop':'-9px'}} src=" public/footer3.png" alt="" />
        <h1 style={{'fontSize':'16px','opacity':'60%'}}>Spotify</h1>
    </div>

    <div style={{'display':'flex','alignItems':'center' ,'gap':'10px'}}>
        <img style={{'marginTop':'-9px'}} src=" public/cib_apple-podcasts.png" alt="" />
         <h1 style={{'fontSize':'16px','opacity':'60%'}}>Spotify</h1>
        
    </div>

    <div style={{'display':'flex','alignItems':'center' ,'gap':'10px'}}>
        <img style={{'marginTop':'-9px'}} src=" public/footer5.png" alt="" />
        <h1 style={{'fontSize':'16px','opacity':'60%'}}>YouTube</h1>
    </div>

    <div style={{'display':'flex','alignItems':'center' ,'gap':'10px'}}>
        <img style={{'marginTop':'-9px'}} src=" public/footer6.png" alt="" />
        <h1 style={{'fontSize':'16px','opacity':'60%'}}>Twitter</h1>
    </div>

</div>
<div>
    <h1 style={{'fontSize':'16px','opacity':'60%','marginTop':'30px' , 'color':'white'}} className='text-center'>© 2026 TechWave Podcast. All rights reserved.</h1>
</div>

            </div>
        </div>
    );
};

export default Footer;