import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {addCategory} from './CategoriesSlice'

function AddCategoryForm() {
    const [categoryName, setCategoryName] = useState('')

    const dispatch = useDispatch()

    function handleInput(e) {
        setCategoryName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(addCategory(categoryName))
        setCategoryName('')
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="categoryName"></label>
                <input 
                    name='categoryName' 
                    type='text'
                    onChange={handleInput}
                    value={categoryName}
                />
                <button type='submit'>Create category</button>
            </form>
        </>
    )
}

export default AddCategoryForm;