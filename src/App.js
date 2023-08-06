
import './App.css';
import NavBar from './components/navbar'
import Card from './components/card'
import Carousel from './components/carousel'
import Accordian from './components/accord'

let p = [];
await fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data =>{
  console.log(data)
  for(let i = 0; i<5; i++)
  {
   p[i] = (data.products[i])
  }
  });


function App() {
  return (
    <>
    <NavBar></NavBar>
    <div className="cards">
      <Card
      prop = {{
        title:`${p[0].title}`,
        body:`${p[0].description}`
      }}></Card>
      <Card
      prop = {{
        title:`${p[1].title}`,
        body:`${p[0].description}`
      }}></Card>
      <Card
      prop = {{
        title:`${p[2].title}`,
        body:`${p[0].description}`
      }}></Card>
      <Card
      prop = {{
        title:`${p[3].title}`,
        body:`${p[0].description}`
      }}></Card>
      <Card
      prop = {{
        title:`${p[4].title}`,
        body:`${p[0].description}`
      }}></Card>
    </div>
    <div className="sliders">
    <Accordian title={p[0].title} body={p[0].description} ></Accordian>
    <Carousel product={p[0]}></Carousel>
    <Accordian title={p[1].title} body={p[1].description} ></Accordian>    
    <Carousel product={p[1]}></Carousel>
    <Accordian title={p[2].title} body={p[2].description} ></Accordian>
    <Carousel product={p[2]}></Carousel>
    <Accordian title={p[3].title} body={p[3].description} ></Accordian>
    <Carousel product={p[3]}></Carousel>
    <Accordian title={p[4].title} body={p[4].description} ></Accordian>
    <Carousel product={p[4]}></Carousel>
    </div>
    </>
  );
}

export default App;