import { useSelector, useDispatch } from 'react-redux';
import {deleteCategory, editCategory} from './CategoriesSlice'
import {useState} from 'react'

const CategorySelector = () => {
    const [isClicked, setIsClicked] = useState(false)
    const [newData, setNewData] = useState('')

    const categories = useSelector(state => state.categories.categories);
    const dispatch = useDispatch()

    function handleEditBtn() {
      setIsClicked(true)
    }

    return (
      <div>
        <h2>Category Selector</h2>
        <ul>
          {categories.map(category => (
            <li key={category.id} value={category.id}>
              {category.name}
              <button className='category__delete__btn' onClick={()=> dispatch(deleteCategory({id: category.id}))}>delete</button>
              {isClicked?
                <form onSubmit={(e)=> {
                  e.preventDefault()
                  dispatch(editCategory({id:category.id, name: newData}))
                  setNewData('')
                }}>
                  <label htmlFor="newcategory"></label>
                  <input 
                    name='newcategory' 
                    type='text'
                    
                    onChange={(e)=> setNewData(e.target.value)}
                  />
                  <button type='submit'>Edit</button>
                </form>
              :
                <button className='category__delete__btn' onClick={handleEditBtn}>
                    edit
                </button>
              }
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default CategorySelector;  