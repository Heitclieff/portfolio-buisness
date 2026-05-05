import React from 'react'

import MainLayout from '@/components/layout/main/MainLayout';
import PostsView from '@/features/posts';


const Posts = () => {
  return (
    <>   
      <PostsView/>
    </>
  )
}

export default Posts;

Posts.getLayout = function getLayout(page :any) {
     return ( 
          <MainLayout title = "Posts">
            {page}
          </MainLayout>
     )
}
