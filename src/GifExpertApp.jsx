import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Totoro'])

    const onAddCategory = (newCategory) => {

        if ( categories.includes(newCategory) ) return 

        setCategories([newCategory, ...categories])

     } 

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory= {onAddCategory}
            />

            

            {
                categories.map( category => {
                    return <GifGrid
                        key={category}
                        category={category}
                    />
                })
            }


            
        </>
    )

}