import React from 'react'
import MainLayout, { SidebarLayout } from '@/layouts/main/MainLayout';
import PostsView from '@/features/posts';

const Posts = () => {
  return <PostsView />
}

Posts.getLayout = function getLayout(page: any) {
  return (
    <MainLayout title="Posts">
      <SidebarLayout>
        {page}
      </SidebarLayout>
    </MainLayout>
  )
}

export default Posts;
