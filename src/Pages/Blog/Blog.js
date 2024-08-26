import React from 'react';
import useTitle from '../../hooks/useTitle';
import Constraction from '../../component/Constraction/Constraction';
const Blog = () => {
    useTitle("Blog");
    return (
        <div className='mt-20'>
           <Constraction></Constraction>
        </div>
    );
};

export default Blog;