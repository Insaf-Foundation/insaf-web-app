
import React from 'react';

import before from '../../../../assets/images/slide01.jpg';
import after from '../../../../assets/images/slide02.jpg';
import ReactCompareImage from 'react-compare-image';

const ClippingPathImage = () => {
    return (
         <ReactCompareImage hover="true" 
         leftImageLabel='Before'
         rightImageLabel='After'
         leftImage={before} rightImage={after}
         />
           
        

      
    );
};

export default ClippingPathImage;