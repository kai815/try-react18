import {useState} from "react";

type Food  = {
  id:number,
  name:string,
  genre:string,
  color:string
}

const genreList = {
  japanese: '和食',
  italian: 'イタリアン',
  curry: 'カレー',
  chinese: '中華'
}


const generateFoods = ():Food[] => {
  return Array(10000).fill('').map((_,index)=>{
    const indexPlus = index + 1
    let name;
    let genre;
    let color
    if(indexPlus % 5 === 0 ){
      name = `ペペロンチーノ${indexPlus}`
      genre = genreList.italian
      color = 'green'
    }else if(indexPlus % 4 === 0){
      name = `カレーライス${indexPlus}`
      genre = genreList.curry
      color = 'brown'
    }else if(indexPlus % 3 === 0){
      name = `麻婆豆腐${indexPlus}`
      genre = genreList.chinese
      color = 'red'
    }else{
      name = `鯖の塩焼き${indexPlus}`
      genre = genreList.japanese
      color = 'grey'
    }
    return {
      id:indexPlus,
      name,
      genre,
      color
    }
  })
}
const foodList = generateFoods()

export const FoodLists = () => {
  const [filteredFoodList,setFilteredFoodList] = useState<Food[]>(foodList)
  return (
    <div>
      <p>FoodList</p>
      {filteredFoodList.map((food)=>{
        return (
          <div key={food.id} style={{width:'500px',background:food.color}}>
            <p>タイトル:{food.name}</p>
            <p>担当:{food.genre}</p>
          </div>
        )
      })}
    </div>
  )
}