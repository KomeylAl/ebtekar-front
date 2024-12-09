import { commentsData } from "@/actions/comments-data";
import { heroData, mainPageAbout, mainPagePostsData, mainPageProductsData } from "@/actions/main-page-data";
import About from "@/components/About";
import CommentsList from "@/components/CommentsList";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import PostsList from "@/components/PostsList";
import ProductList from "@/components/ProductList";

export default async function Home() {
  
  const about = await mainPageAbout()

  const products = await mainPageProductsData()

  const posts = await mainPagePostsData()

  const hero = await heroData()

  const comments = await commentsData()

  return (
    <div className="w-full h-fit flex flex-col py-8">
      <Hero data={hero} />
      <Features />
      <ProductList data={products} />
      <About data={about} />
      <CommentsList data={comments} />
      <PostsList data={posts} />
    </div>
  );  
}
