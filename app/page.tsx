import { Metadata, NextPage } from "next";
import { HomeContainer, Header } from "@/src/components";

export const metadata: Metadata = {
  title: 'Home',
  description: 'E-commerce home page',
}

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main >
        <HomeContainer />
      </main>
    </>
  )
}

export default Home