import React from 'react'

import RootLayout from '@/components/layout/roots/rootlayout';
import Postsfeature from '@/features/posts';

type PageProps = {}
const Posts: React.FC <PageProps> = () => {
  return (
    <>   
      <Postsfeature/>
    </>

  )
}

export default Posts;

Posts.getLayout = function getLayout(page) {
     return ( 
          <RootLayout title = "Posts">
            {page}
          </RootLayout>
     )
}
