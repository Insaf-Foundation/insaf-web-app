import React from 'react';
import ClippingPathImage from '../ServiceItem/ClippingPathImage/ClippingPathImage';
import serviceitemimg from '../../../assets/images/greenbg.png';
import { Link } from 'react-router-dom';
const ServiceItem = () => {
    return (
        <div className='mt-20'>
            <h2 className='text-4xl pb-10 font-bold text-green-600 '>Our Services</h2>
           
           <div className=''>

            {/* clipping path */}
           <div className="card lg:card-side container mx-auto grid lg:grid-cols-2 grid-cols-1 " data-aos="fade-down-right">
  <figure>
     <ClippingPathImage></ClippingPathImage>
    </figure>
  <div className="card-body">
    <h2 className="card-title text-3xl  text-green-600">Clipping Path</h2>
    <p className=''>A clipping path is a graphic design technique used to cut out a 2D image using a closed vector path. The path essentially acts as a mask, allowing the designer to isolate the desired part of the image and remove the rest.

Clipping paths are commonly used in image editing software such as Adobe Photoshop and Illustrator. They are especially useful for removing backgrounds from images, allowing the image to be placed on a different background or to be used in a variety of graphic design projects.

To create a clipping path, the designer draws a closed vector path around the object or area that they want to keep in the image. They then apply the clipping path to the image layer, which hides or removes the parts of the image that fall outside the path.

Clipping paths can be used to create a variety of effects, such as creating cutouts of objects, creating silhouettes, or creating composite images by combining multiple images together.</p>
    <div className="card-actions justify-end">
    <Link  className="btn bg-green-600 border-green-600 hover:bg-white hover:text-green-600 hover:border-green-600 border-2" to='/clipping-path'>Read More</Link>
 
    </div>
  </div>
</div>

            {/* Background Removal */}
            <div className="mt-20" style={{ background: `url(${serviceitemimg}) `,   backgroundRepeat: 'no-repeat' ,   
  backgroundSize: 'cover'
}}>
  <div className='container mx-auto card lg:card-side  grid lg:grid-cols-2 grid-cols-1 pb-20 ' data-aos="fade-down-left">
  <div className="card-body ">
    <h2 className="card-title text-3xl  text-green-600">Background Removal</h2>
    <p className=''>A clipping path is a graphic design technique used to cut out a 2D image using a closed vector path. The path essentially acts as a mask, allowing the designer to isolate the desired part of the image and remove the rest.

Clipping paths are commonly used in image editing software such as Adobe Photoshop and Illustrator. They are especially useful for removing backgrounds from images, allowing the image to be placed on a different background or to be used in a variety of graphic design projects.

To create a clipping path, the designer draws a closed vector path around the object or area that they want to keep in the image. They then apply the clipping path to the image layer, which hides or removes the parts of the image that fall outside the path.

Clipping paths can be used to create a variety of effects, such as creating cutouts of objects, creating silhouettes, or creating composite images by combining multiple images together.</p>
    <div className="card-actions justify-end">
    <Link  className="btn bg-green-600 border-green-600 hover:bg-white hover:text-green-600 hover:border-green-600 border-2" to='/background-removal'>Read More</Link>
    </div>
  </div>

  <figure>
     <ClippingPathImage></ClippingPathImage>
    </figure>
  </div>

{/* Image Masking */}
<div className=" container mx-auto  card lg:card-side  grid lg:grid-cols-2 grid-cols-1 mt-20 " data-aos="fade-down-right">
  <figure>
     <ClippingPathImage></ClippingPathImage>
    </figure>
  <div className="card-body">
    <h2 className="card-title text-3xl  text-green-600">Image Masking</h2>
    <p className=''>A clipping path is a graphic design technique used to cut out a 2D image using a closed vector path. The path essentially acts as a mask, allowing the designer to isolate the desired part of the image and remove the rest.

Clipping paths are commonly used in image editing software such as Adobe Photoshop and Illustrator. They are especially useful for removing backgrounds from images, allowing the image to be placed on a different background or to be used in a variety of graphic design projects.

To create a clipping path, the designer draws a closed vector path around the object or area that they want to keep in the image. They then apply the clipping path to the image layer, which hides or removes the parts of the image that fall outside the path.

Clipping paths can be used to create a variety of effects, such as creating cutouts of objects, creating silhouettes, or creating composite images by combining multiple images together.</p>
    <div className="card-actions justify-end">
    <Link  className="btn bg-green-600 border-green-600 hover:bg-white hover:text-green-600 hover:border-green-600 border-2" to='/image-masking'>Read More</Link>
    </div>
  </div>
</div>
</div>

            

            {/* Shadow*/}
            <div className="card container mx-auto lg:card-side  grid lg:grid-cols-2 grid-cols-1 mt-20" data-aos="fade-down-left">

  <div className="card-body">
    <h2 className="card-title text-3xl  text-green-600">Shadow</h2>
    <p className=''>A clipping path is a graphic design technique used to cut out a 2D image using a closed vector path. The path essentially acts as a mask, allowing the designer to isolate the desired part of the image and remove the rest.

Clipping paths are commonly used in image editing software such as Adobe Photoshop and Illustrator. They are especially useful for removing backgrounds from images, allowing the image to be placed on a different background or to be used in a variety of graphic design projects.

To create a clipping path, the designer draws a closed vector path around the object or area that they want to keep in the image. They then apply the clipping path to the image layer, which hides or removes the parts of the image that fall outside the path.

Clipping paths can be used to create a variety of effects, such as creating cutouts of objects, creating silhouettes, or creating composite images by combining multiple images together.</p>
    <div className="card-actions justify-end">
    <Link  className="btn bg-green-600 border-green-600 hover:bg-white hover:text-green-600 hover:border-green-600 border-2" to='/shadow'>Read More</Link>
    </div>
  </div>

  <figure >
     <ClippingPathImage></ClippingPathImage>
    </figure>
</div>

            {/* clipping path */}
            <div className="card container mx-auto lg:card-side  grid lg:grid-cols-2 grid-cols-1 mt-20" data-aos="fade-down-right">
            <figure>
     <ClippingPathImage></ClippingPathImage>
    </figure>
  <div className="card-body">
    <h2 className="card-title text-3xl  text-green-600">Ghost Mannequin</h2>
    <p className=''>A clipping path is a graphic design technique used to cut out a 2D image using a closed vector path. The path essentially acts as a mask, allowing the designer to isolate the desired part of the image and remove the rest.

Clipping paths are commonly used in image editing software such as Adobe Photoshop and Illustrator. They are especially useful for removing backgrounds from images, allowing the image to be placed on a different background or to be used in a variety of graphic design projects.

To create a clipping path, the designer draws a closed vector path around the object or area that they want to keep in the image. They then apply the clipping path to the image layer, which hides or removes the parts of the image that fall outside the path.

Clipping paths can be used to create a variety of effects, such as creating cutouts of objects, creating silhouettes, or creating composite images by combining multiple images together.</p>
    <div className="card-actions justify-end">
    <Link  className="btn bg-green-600 border-green-600 hover:bg-white hover:text-green-600 hover:border-green-600 border-2" to='/ghost-mannequin'>Read More</Link>
    </div>
  </div>

 
</div>
    <div           className="mt-20" style={{ background: `url(${serviceitemimg}) `,   backgroundRepeat: 'no-repeat' ,   
  backgroundSize: 'cover'
}}>
      {/* clipping path */}
      <div className="card container mx-auto lg:card-side  grid lg:grid-cols-2 grid-cols-1 mt-20" data-aos="fade-down-left">
 
 <div className="card-body">
   <h2 className="card-title text-3xl  text-green-600">Photo Retouching</h2>
   <p className=''>A clipping path is a graphic design technique used to cut out a 2D image using a closed vector path. The path essentially acts as a mask, allowing the designer to isolate the desired part of the image and remove the rest.

Clipping paths are commonly used in image editing software such as Adobe Photoshop and Illustrator. They are especially useful for removing backgrounds from images, allowing the image to be placed on a different background or to be used in a variety of graphic design projects.

To create a clipping path, the designer draws a closed vector path around the object or area that they want to keep in the image. They then apply the clipping path to the image layer, which hides or removes the parts of the image that fall outside the path.

Clipping paths can be used to create a variety of effects, such as creating cutouts of objects, creating silhouettes, or creating composite images by combining multiple images together.</p>
   <div className="card-actions justify-end">
   <Link  className="btn bg-green-600 border-green-600 hover:bg-white hover:text-green-600 hover:border-green-600 border-2" to='/photo-retouching'>Read More</Link>
   </div>
 </div>
 <figure>
    <ClippingPathImage></ClippingPathImage>
   </figure>
</div>

           {/* Clolor Changes */}
           <div className="card container mx-auto lg:card-side  grid lg:grid-cols-2 grid-cols-1 mt-20" data-aos="fade-down-right">
 <figure>
    <ClippingPathImage></ClippingPathImage>
   </figure>
 <div className="card-body">
   <h2 className="card-title text-3xl  text-green-600">Clolor Changes</h2>
   <p className=''>A clipping path is a graphic design technique used to cut out a 2D image using a closed vector path. The path essentially acts as a mask, allowing the designer to isolate the desired part of the image and remove the rest.

Clipping paths are commonly used in image editing software such as Adobe Photoshop and Illustrator. They are especially useful for removing backgrounds from images, allowing the image to be placed on a different background or to be used in a variety of graphic design projects.

To create a clipping path, the designer draws a closed vector path around the object or area that they want to keep in the image. They then apply the clipping path to the image layer, which hides or removes the parts of the image that fall outside the path.

Clipping paths can be used to create a variety of effects, such as creating cutouts of objects, creating silhouettes, or creating composite images by combining multiple images together.</p>
   <div className="card-actions justify-end">
   <Link  className="btn bg-green-600 border-green-600 hover:bg-white hover:text-green-600 hover:border-green-600 border-2" to='/color-changes'>Read More</Link>
   </div>
 </div>
</div>

    </div>
           

            {/* Vector Services */}
            <div className="card lg:card-side container mx-auto grid lg:grid-cols-2 grid-cols-1 mt-20"data-aos="fade-down-left">

  <div className="card-body">
    <h2 className="card-title text-3xl  text-green-600">Vector Services</h2>
    <p className=''>A clipping path is a graphic design technique used to cut out a 2D image using a closed vector path. The path essentially acts as a mask, allowing the designer to isolate the desired part of the image and remove the rest.

Clipping paths are commonly used in image editing software such as Adobe Photoshop and Illustrator. They are especially useful for removing backgrounds from images, allowing the image to be placed on a different background or to be used in a variety of graphic design projects.

To create a clipping path, the designer draws a closed vector path around the object or area that they want to keep in the image. They then apply the clipping path to the image layer, which hides or removes the parts of the image that fall outside the path.

Clipping paths can be used to create a variety of effects, such as creating cutouts of objects, creating silhouettes, or creating composite images by combining multiple images together.</p>
    <div className="card-actions justify-end">
    <Link  className="btn bg-green-600 border-green-600 hover:bg-white hover:text-green-600 hover:border-green-600 border-2" to='/vector-services'>Read More</Link>
    </div>
  </div>

  <figure>
     <ClippingPathImage></ClippingPathImage>
    </figure>
</div>

            {/* Multi Clipping Path */}
            <div className="card lg:card-side container mx-auto grid lg:grid-cols-2 grid-cols-1 mt-20 mb-20" data-aos="fade-down-right">
            <figure>
     <ClippingPathImage></ClippingPathImage>
    </figure>
  <div className="card-body">
    <h2 className="card-title text-3xl  text-green-600">Multi Clipping Path</h2>
    <p className=''>A clipping path is a graphic design technique used to cut out a 2D image using a closed vector path. The path essentially acts as a mask, allowing the designer to isolate the desired part of the image and remove the rest.

Clipping paths are commonly used in image editing software such as Adobe Photoshop and Illustrator. They are especially useful for removing backgrounds from images, allowing the image to be placed on a different background or to be used in a variety of graphic design projects.

To create a clipping path, the designer draws a closed vector path around the object or area that they want to keep in the image. They then apply the clipping path to the image layer, which hides or removes the parts of the image that fall outside the path.

Clipping paths can be used to create a variety of effects, such as creating cutouts of objects, creating silhouettes, or creating composite images by combining multiple images together.</p>
    <div className="card-actions justify-end">
    <Link  className="btn bg-green-600 border-green-600 hover:bg-white hover:text-green-600 hover:border-green-600 border-2" to='/multi-clipping-path'>Read More</Link>
    </div>
  </div>


</div>
           </div>

        </div>
    );
};

export default ServiceItem;