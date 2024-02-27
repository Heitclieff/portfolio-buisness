import RootLayout from "@/components/layout/roots/rootlayout";
import Homefeature from "@/features/home";
type pageProps = {}
const Home : React.FC <pageProps> = () => {
  return (
    <Homefeature/>
  );
}

Home.getLayout =  function getLayout (page) {
  return ( 
    <RootLayout>
      {page}
    </RootLayout>
  )
}

export default Home;