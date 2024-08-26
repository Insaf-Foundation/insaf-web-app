import React from "react";
import useTitle from "../../hooks/useTitle";
import aboutimg from "../../assets/images/abouticon.png";
import aboutuschose from "../../assets/images/greenbg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faThumbsUp,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";

import ashiqe from "../../assets/images/iamashiqe.jpg";
import fahim from "../../assets/images/fahim.jpg";
import mamun from "../../assets/images/Mamun_Shahriar_.jpg";
import { Link } from "react-router-dom";
import ClientSays from "./ClientSays";
import Constraction from "../../component/Constraction/Constraction";
const AboutUs = () => {
  useTitle("About Us");
  return (
    //         <div className='mt-36 lg:px-0 px-5'>
    //             <h2 className='text-center mb-10 text-4xl font-bold text-green-600'>Who We Are..??</h2>

    //             <div className='grid grid-cols-1 lg:grid-cols-2 container mx-auto '>
    //                 {/* about part */}
    //             <div className="card lg:card-side  ">

    //   <div className="card-body" data-aos="fade-right">
    //     <h2 className="card-title text-3xl font-bold text-green-600">About Us</h2>
    //     <p>Insaf Foundation is a professional image editing service provider that offers high-quality clipping path, background removal, image masking, <br></br>  photo retouching, and other image editing services to clients worldwide. <br></br>
    //      The company is based in Bangladesh, but it serves clients from all over the world, including the United States, United Kingdom, Canada, Australia, and many other countries.

    // Insaf Foundation has a team of highly skilled and experienced image editing experts who use the latest image editing software and tools to deliver the best results to clients. The company is committed to providing high-quality image editing services at affordable prices, and it has a proven track record of delivering projects on time.

    // Apart from offering high-quality image editing services, Insaf Foundation also provides excellent customer support. The company has a dedicated customer support team that is available 24/7 to answer clients' queries and provide assistance whenever required.

    // Overall, Insaf Foundation is a reliable and professional image editing service provider that can help clients enhance the quality of their images and make them more visually appealing.</p>

    //   </div>

    // </div>
    //  <div className='mt-10' data-aos="fade-left">
    //  <figure><img src={aboutimg} className="rounded ml-20" alt="Album"/></figure>
    //  </div>

    //  {/* about part end */}

    //             </div >

    //              {/* Our clients */}
    //   <div className='container mx-auto'>
    //       <h2 className='text-center text-green-600 text-4xl font-bold mt-15'>Our Clients</h2>
    //       <p className='text-center pt-5'>"Insaf Foundation has been a game-changer for our business! <br></br> Their image editing services are top-notch, and their team is always responsive and accommodating. <br></br> We highly recommend them to anyone looking for high-quality image editing services."</p>

    //       <div className="carousel carousel-end rounded-box " data-aos="flip-up">
    //   <div className="carousel-item">
    //     <img src="/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Drink" />
    //   </div>
    //   <div className="carousel-item">
    //     <img src="/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Drink" />
    //   </div>
    //   <div className="carousel-item">
    //     <img src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Drink" />
    //   </div>
    //   <div className="carousel-item">
    //     <img src="/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Drink" />
    //   </div>
    //   <div className="carousel-item">
    //     <img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Drink" />
    //   </div>
    //   <div className="carousel-item">
    //     <img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Drink" />
    //   </div>
    //   <div className="carousel-item">
    //     <img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Drink" />
    //   </div>
    // </div>
    //   </div>

    //       {/* why chose us */}

    //       <div className='mt-20 pb-20 ' >

    //          <h2 className='text-center text-green-600 text-4xl font-bold'>
    //             Why Chose Us...?
    //          </h2>

    //           <div className=' ' data-aos="flip-up" style={{ background: `url(${aboutuschose}) `,   backgroundRepeat: 'no-repeat' ,
    //   backgroundSize: 'cover'
    // }}>

    //   <div className='container mx-auto grid lg:grid-cols-3  grid-cols-1  md:grid-cols-2 pt-20 pb-20'>
    //   <div className="card w-96 bg-base-100 shadow-xl">
    //   <figure className="px-10 pt-10">
    //        <FontAwesomeIcon className='text-green-600 text-4xl'  icon={faUserFriends} beat />
    //   </figure>
    //   <div className="card-body items-center text-center">
    //     <h2 className="card-title">Membership</h2>
    //     <p>Joining a group or organization that grants privileges, rights, or access to its members, often requiring payment of a fee</p>

    //   </div>
    // </div>

    // <div className="card w-96 bg-base-100 shadow-xl lg:mt-0 mt-5">
    //   <figure className="px-10 pt-10">
    //   <FontAwesomeIcon className='text-green-600 text-4xl' icon={faHandshake} bounce/>

    //   </figure>
    //   <div className="card-body items-center text-center">
    //     <h2 className="card-title">Trusted</h2>
    //     <p>Having confidence in the reliability, integrity, or ability of someone or something based on past experience or reputation</p>

    //   </div>
    // </div>

    // <div className="card w-96 bg-base-100 shadow-xl lg:mt-0 mt-5">
    //   <figure className="px-10 pt-10">
    //   <FontAwesomeIcon className='text-green-600 text-4xl' icon={faThumbsUp} beat/>
    //   </figure>
    //   <div className="card-body items-center text-center">
    //     <h2 className="card-title">Inspired</h2>
    //     <p>Feeling motivated and driven to perform a task or pursue a goal as a result of being inspired or influenced by Work.</p>

    //   </div>
    // </div>
    //   </div>

    //           </div>
    //       </div>

    //       {/* Our Adviser */}
    //       <div className='mt-20 container mx-auto mb-20' data-aos="flip-up">
    //           <h2 className='text-center pb-10 text-green-600 text-4xl font-bold'>Our Adviser</h2>

    //           <div className='grid lg:grid-cols-3  grid-cols-1 md:grid-cols-2'>
    //           <div className="card w-96 bg-base-100 shadow-xl">
    //   <figure><img src={ashiqe}alt="Ashiqur Rahman" className='w-60' /></figure>
    //   <div className="card-body">
    //     <h2 className="card-title">
    //     Ashiqur Rahman
    //       <div className="badge border-green-600 bg-white text-green-600">Senior Advisor</div>
    //     </h2>
    //     <p>Dhaka , Bangladesh</p>
    //     <div className="card-actions justify-end">
    //     <div className="grid grid-flow-col gap-4">
    //       <Link to='https://twitter.com/imashiqee'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></Link>
    //       <Link to='https://www.youtube.com/@itspeech'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link>
    //       <Link to=''><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>

    //     </div>
    //     </div>
    //   </div>
    // </div>

    // <div className="card w-96 bg-base-100 shadow-xl mt-5 lg:mt-0">
    //   <figure><img src={mamun} className='w-60' alt="Shoes" /></figure>
    //   <div className="card-body">
    //     <h2 className="card-title">
    //       Mamun Shahriar
    //       <div className="badge border-green-600 bg-white text-green-600">Production Officer</div>
    //     </h2>
    //     <p>Sydney, Australia</p>
    //     <div className="card-actions justify-end">
    //     <div className="grid grid-flow-col gap-4">
    //     <Link to='#'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></Link>
    //       <Link to='#'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link>
    //       <Link to='#'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
    //     </div>
    //     </div>
    //   </div>
    // </div>

    // <div className="card w-96 bg-base-100 shadow-xl mt-5 lg:mt-0">
    //   <figure><img src={fahim} className='w-80' alt="Shoes" /></figure>
    //   <div className="card-body">
    //     <h2 className="card-title">
    //      Fahim Chowdhury
    //       <div className="badge border-green-600 bg-white text-green-600"> Finance Officer</div>
    //     </h2>
    //     <p>Neuburger Str. 5, 85057 Ingolstadt, Germany</p>
    //     <div className="card-actions justify-end">
    //     <div className="grid grid-flow-col gap-4">
    //     <Link to='#'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></Link>
    //       <Link to='#'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link>
    //       <Link to='#'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
    //     </div>
    //     </div>
    //   </div>
    // </div>
    //           </div>
    //       </div>
    // {/*
    //       Adviser part ended */}
    //    <ClientSays></ClientSays>
    //         </div>
    <div>
      <Constraction></Constraction>
    </div>
  );
};

export default AboutUs;
