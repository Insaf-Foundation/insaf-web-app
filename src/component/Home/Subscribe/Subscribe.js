import React from 'react';

const Subscribe = () => {
    return (
        <div>
           < div className='grid grid-cols-1   mb-20' data-aos="fade-down-right">
                
                <div className='py-20 container mx-auto px-5'>
                <h2 className='text-center text-3xl text-green-600'>Subscribe For More Updates</h2>
                <p className='text-center'>Making this the first true value generator on the Internet. It of over 200  <br></br>Latin words, combined with a handful.</p>
                <div className='card place-items-center '>
                      <div className="form-control">
<label className="label">
 <span className="label-text">Your Email</span>
</label>
<label className="input-group">
 <span>Email</span>
 <input type="text" placeholder="Type Your Email" className="input input-bordered" />
 <button className='btn  bg-white border-2 border-green-600 text-green-600 ml-2'>Submit</button>
</label>
</div>
                      </div>
                </div>
              
                 </div>  
        </div>
    );
};

export default Subscribe;