import React from 'react'

import BlogContent from '../subComponents/Blog/BlogContent';
import PageBanner from './PageBanner';

function Blog() {
    return (

        <div>
            <PageBanner data={'Blog Post'} />
            <BlogContent />
        </div>

    )
}

export default Blog