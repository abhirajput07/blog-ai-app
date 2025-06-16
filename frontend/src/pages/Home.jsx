import Navbar from "../components/Navbar";
import Header from "../components/Header";
import BlogList from "../components/BlogList";
import BlogCard from "../components/BlogCard";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <BlogList />
      <BlogCard />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
