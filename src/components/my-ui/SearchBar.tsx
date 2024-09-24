import { useState } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function Component() {
  const [search, setSearch] = useState("")

  const handleClear = () => {
    setSearch("")
  }

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="pl-10 pr-10  bg-slate-100 rounded-lg flex-grow focus:border-gray-200 focus:outline-none"

      />
      {search && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
          aria-label="Clear search"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}