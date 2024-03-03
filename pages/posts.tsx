import React from 'react'

import RootLayout from '@/components/layout/roots/rootlayout';
import Postsfeature from '@/features/posts';


const Posts = () => {
  return (
    <>   
      <Postsfeature/>
    </>
  )
}

export default Posts;

Posts.getLayout = function getLayout(page :any) {
     return ( 
          <RootLayout title = "Posts">
            {page}
          </RootLayout>
     )
}
