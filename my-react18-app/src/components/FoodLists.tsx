import React, {useState} from "react";

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

const filterFoodList = (text:string, genre:string):Food[] => {
  if(text === '' && genre === '') return foodList

  if(text === '' && genre !== ''){
    return foodList.filter((food) => food.genre === genre)
  }else if(text !== '' && genre === ''){
    return foodList.filter((food) => food.name.includes(text))
  }else{
    return foodList.filter((food) => food.name.includes(text) && food.genre === genre)
  }
}

export const FoodLists = () => {
  const [filteredFoodList, setFilteredFoodList] = useState<Food[]>(foodList)
  const [searchText, setSearchText] = useState<string>('')
  const [selectedGenre, setSelectedGenre] = useState<string>('')
  const onInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
    setFilteredFoodList(filterFoodList(event.target.value,selectedGenre))
  }
  const onSelectChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(event.target.value)
    setFilteredFoodList(filterFoodList(searchText,event.target.value))
  }
  return (
    <div>
      <p>FoodList</p>
      <div>
        <input onChange={onInputChange} value={searchText}/>
        <select value={selectedGenre} onChange={onSelectChange}>
          <option value={''}></option>
          <option value={genreList.japanese}>
            {genreList.japanese}
          </option>
          <option value={genreList.italian}>
            {genreList.italian}
          </option>
          <option value={genreList.curry}>
            {genreList.curry}
          </option>
          <option value={genreList.chinese}>
            {genreList.chinese}
          </option>
        </select>
      </div>
      {filteredFoodList.map((food)=>{
        return (
          <div key={food.id} style={{width:'500px',background:food.color}}>
            <p>{food.name}</p>
            <p>ジャンル：{food.genre}</p>
          </div>
        )
      })}
    </div>
  )
}