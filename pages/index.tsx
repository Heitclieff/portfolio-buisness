import RootLayout from "@/components/layout/roots/rootlayout";
import Homefeature from "@/features/home";


const Home  = () => {
  return (
    <Homefeature/>
  );
}

Home.getLayout=  function getLayout (page : any) {
  return ( 
    <RootLayout title="Kittituch Pulprasert">
      {page}
    </RootLayout>
  )
}

export default Home;