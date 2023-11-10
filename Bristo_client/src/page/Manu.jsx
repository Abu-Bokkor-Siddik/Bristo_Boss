import { Helmet} from 'react-helmet-async';
import Cover from '../sherd/Cover';
import img1 from '../assets/menu/banner3.jpg'
import img2 from '../assets/menu/dessert-bg.jpeg'
import img3 from '../assets/menu/pizza-bg.jpg'
import img4 from '../assets/menu/salad-bg.jpg'
import img5 from '../assets/menu/soup-bg.jpg'
import useMenu from './Hooks/useMenu';
import SectionTitle from './components/SectionTitle';
import MenuCategory from '../sherd/MenuCategory';


const Manu = () => {
    const[Menu]=useMenu()
    const dessert = Menu.filter(items=> items.category === 'dessert')
    const soup = Menu.filter(items=> items.category === 'soup')
    const salad = Menu.filter(items=> items.category === 'salad')
    const pizza = Menu.filter(items=> items.category === 'pizza')
    const drinks = Menu.filter(items=> items.category === 'offered')
  return (
    <div>
    <Helmet>
    <title>BISTRO BOSS | Menu</title>
    
  </Helmet>
  {/** main */}
  <Cover img={img1} title={'OUR MENU'}></Cover>
  
  <SectionTitle heading={"---Dont miss---"} subheading={"TODAY'S OFFER"}></SectionTitle>
   {/**offered */}
  <MenuCategory items={drinks}></MenuCategory>
   {/**dessert */}
   <MenuCategory items={dessert}  coverimg={img2} title={'Dessert'} ></MenuCategory>
    {/**pizza */}
    <MenuCategory items={pizza}  coverimg={img3} title={'Pizza'} ></MenuCategory>
     {/**Salad */}
     <MenuCategory items={salad}  coverimg={img4} title={'Salad'} ></MenuCategory>

     {/**Soup */}
     <MenuCategory items={soup}  coverimg={img5} title={'Soup'} ></MenuCategory>

    </div>
  )
}

export default Manu
