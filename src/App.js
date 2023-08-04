
import './App.css';
import NavBar from './components/navbar'
import Card from './components/card'
import Carousel from './components/carousel'

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
        body:"lorem 200 wala emmet abbreviation"
      }}></Card>
      <Card
      prop = {{
        title:`${p[1].title}`,
        body:"lorem 300 wala emmet abbreviation"
      }}></Card>
      <Card
      prop = {{
        title:`${p[2].title}`,
        body:"lorem 400 wala emmet abbreviation"
      }}></Card>
      <Card
      prop = {{
        title:`${p[3].title}`,
        body:"lorem 500 wala emmet abbreviation"
      }}></Card>
      <Card
      prop = {{
        title:`${p[4].title}`,
        body:"lorem 600 wala emmet abbreviation"
      }}></Card>
    </div>
    <div className="sliders">
    <h1 className='title'>{p[0].title}</h1>
    <Carousel product={p[0]}></Carousel>
    <h1 className='title'>{p[1].title}</h1>
    <Carousel product={p[1]}></Carousel>
    <h1 className='title'>{p[2].title}</h1>
    <Carousel product={p[2]}></Carousel>
    <h1 className='title'>{p[3].title}</h1>
    <Carousel product={p[3]}></Carousel>
    <h1 className='title'>{p[4].title}</h1>
    <Carousel product={p[4]}></Carousel>
    </div>
    </>
  );
}

export default App;