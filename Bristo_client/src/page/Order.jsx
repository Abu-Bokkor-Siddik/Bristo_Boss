import { useState } from 'react';
import order from '../assets/shop/banner2.jpg'
import Cover from '../sherd/Cover'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from './Hooks/useMenu';
import FoodCard from './components/FoodCard';
import { useParams } from 'react-router-dom';

const Order = () => {
    const categories =['Salad','Pizza','Soup','Dessert','Drinks']
    const {category} =useParams()
    const initialIndex = categories.indexOf(category)
    // /initialIndex

    const [tabindexs,settabindexs]=useState(initialIndex)
 
//  console.log(category)
    const[Menu]=useMenu()
    const dessert = Menu.filter(items=> items.category === 'dessert')
    const soup = Menu.filter(items=> items.category === 'soup')
    const salad = Menu.filter(items=> items.category === 'salad')
    const pizza = Menu.filter(items=> items.category === 'pizza')
    const drinks = Menu.filter(items=> items.category === 'drinks')
  return (
    <div className='text-center'>
    <Cover img={order} title={'OUR FOODS'}></Cover>

    <Tabs defaultIndex={tabindexs} onSelect={(index) => settabindexs(index)}>
  <TabList>
    <Tab>Salads</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soups</Tab>
    <Tab>Desserts</Tab>
    <Tab>Drinks</Tab>
  </TabList>
  <TabPanel>
  {/**sir onno components a korse ami akhanei kori  */}
  <div className='grid grid-cols-3 mx-auto gap-10'>
  {
    salad.map(item => <FoodCard key={item._id}  item={item}></FoodCard>)
  }
  
  </div>
  
  </TabPanel>
  <TabPanel><div className='grid grid-cols-3 mx-auto gap-10'>
  {
    pizza.map(item => <FoodCard key={item._id}  item={item}></FoodCard>)
  }
  
  </div></TabPanel>
  <TabPanel><div className='grid grid-cols-3 mx-auto gap-10'>
  {
    soup.map(item => <FoodCard key={item._id}  item={item}></FoodCard>)
  }
  
  </div></TabPanel>
  <TabPanel><div className='grid grid-cols-3 mx-auto gap-10'>
  {
    dessert.map(item => <FoodCard key={item._id}  item={item}></FoodCard>)
  }
  
  </div></TabPanel>
  <TabPanel><div className='grid grid-cols-3 mx-auto gap-10'>
  {
    drinks.map(item => <FoodCard key={item._id}  item={item}></FoodCard>)
  }
  
  </div></TabPanel>
</Tabs>
    </div>
  )
}

export default Order