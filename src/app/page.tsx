import React from 'react'
import UpperHeader from './components/UpperHeader'
import Header from './Header'
import HeroSection from './components/HeroSection'
import FeaturedProducts from './components/FeaturedProducts'
import LatestProducts from './components/LatestProducts'
import ShopexOffer from './components/ShopexOffer'
import Unique from './components/Unique'
import TrendingProducts from './components/TrendingProducts'
import DiscountItems from './components/DiscountItems'
import TopCategories from './components/TopCategories'
import Update from './components/Update'
import BlogSection from './components/BlogSection'
import Footer from './components/Footer'











const Home = () => {
  return (
    <div>
      <UpperHeader/>
      <Header/>
      <HeroSection/>
      <FeaturedProducts/>
      <LatestProducts/>
      <ShopexOffer/>
      <Unique/>
      <TrendingProducts/>
      <DiscountItems/>
      <TopCategories/>
      <Update/>
      <BlogSection/>
      <Footer/>
    </div>
  )
}

export default Home