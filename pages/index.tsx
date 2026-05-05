import MainLayout, { SidebarLayout } from "@/layouts/main/MainLayout";
import HomeView from "@/features/home";

const Home = () => {
  return <HomeView />;
}

Home.getLayout = function getLayout(page: any) {
  return (
    <MainLayout title="Kittituch Pulprasert">
      <SidebarLayout>
        {page}
      </SidebarLayout>
    </MainLayout>
  )
}

export default Home;