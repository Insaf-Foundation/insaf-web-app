import React from 'react';
import blogimg from '../../../assets/images/slide05.jpg';
const LatestBlog = () => {
    return (
        <div className='container mx-auto mt-20 mb-20'>
              <h2 className='text-4xl text-green-600'>Letest Update</h2>
             <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-20' data-aos="fade-up">
             <div className="card  bg-base-100 shadow-xl image-full px-5 pb-5">
  <figure><img src={blogimg} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">clipping path service</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn bg-inherit hover:bg-green-600 hover:text-white hover:border-green-600 border-green-600 border-2 text-green-600">Readmore</button>
    </div>
  </div>
</div>

<div className="card bg-base-100 shadow-xl image-full  pb-5 mx-2 px-5">
  <figure><img src={blogimg} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">photoshop clipping path services</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn bg-inherit hover:bg-green-600 hover:text-white hover:border-green-600 border-green-600 border-2 text-green-600">Readmore</button>
    </div>
  </div>
</div>

<div className="card bg-base-100 shadow-xl image-full pb-5 mx-2 px-5">
  <figure><img src={blogimg} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">drop shadow service</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn bg-inherit hover:bg-green-600 hover:text-white hover:border-green-600 border-green-600 border-2 text-green-600">Readmore</button>
    </div>
  </div>
</div>
             </div>
        </div>
    );
};

export default LatestBlog;