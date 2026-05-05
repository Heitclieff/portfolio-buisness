import MainLayout from "@/components/layout/main/MainLayout";
import HomeView from "@/features/home";


const Home  = () => {
  return (
    <HomeView/>
  );
}

Home.getLayout=  function getLayout (page : any) {
  return ( 
    <MainLayout title="Kittituch Pulprasert">
      {page}
    </MainLayout>
  )
}

export default Home;