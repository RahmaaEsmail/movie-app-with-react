import { useState } from "react"
import { searchProvider } from "../data/constant"


// eslint-disable-next-line react/prop-types
function SearchContext({children}) {
    const [query , setQuery] = useState("")
    return (
        <searchProvider.Provider value={{query , setQuery}}>
            {children}
        </searchProvider.Provider>
    )
}

export default SearchContext
