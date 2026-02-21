import './Featured.css'

const Featured = () => {
  return (
    <div className="backroundcolor ">
      <div className="marji ">
        <h1 style={{'paddingTop':'50px'}} className="text-center hedarText ">Featured Episodes</h1>
        <div className='pending'>

      <div className="row g-4 gap-5 ">
          <div className='col-12 col-md-6 col-lg-3 '>
              <img style={{"width": "18rem"}}  className=" img1 " src=" public/img.png" alt="" />
          <div className="card rounde " style={{"width": "18rem" ,'height':'200px'}}>
            <div className="card-body  ">
              <h5 className="card-title">Building Better Habits for Remote Work</h5>
              <p className="card-text ">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
            <p className=' imges' > <span><img src=" public/coke.png" alt="" />
            </span >58 min</p>
            </div>
          </div>
        </div>

        <div className=' col-12 col-md-6 col-lg-3 '>
            <img style={{"width": "18rem"}}  className=" img1 " src=" public/img1.png" alt="" />
            <div className="card rounde" style={{'height':'200px',"width": "18rem" ,}} >
            <div className="card-body">
              <h5 className="card-title">Career Growth in Tech: A Roadmap</h5>
              <p className="card-text ">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
              <p className=' imges' > <span><img src=" public/coke.png" alt="" />
            </span >58 min</p>
            </div>
          </div>
        </div>

        <div className='col-13 col-md-6 col-lg-4 '>
           <img style={{"width": "18rem"}}  className=" img1 " src=" public/img2.png" alt="" />
              <div className="card rounde" style={{'height':'200px',"width": "18rem" ,}} >
            <div className="card-body">
              <h5 className="card-title">The Future of AI in Everyday Life</h5>
              <p className="card-text ">
                  Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
               <p className=' imges' > <span><img src=" public/coke.png" alt="" />
            </span >58 min</p>
            </div>
          </div>
        </div>

      </div>
          
         

        </div>
      </div>
    </div>
  );
};

export default Featured;
