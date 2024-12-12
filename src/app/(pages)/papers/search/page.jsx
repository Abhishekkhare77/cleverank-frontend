import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

const Page = () => {
    return (
        <div>
            <div className="text-xl font-semibold">Search</div>
            <div className="text-gray-500 text-sm pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia modi soluta nam.</div>
            <div className='relative'>
                <Input placeholder="Search" className="pl-8" />
                <Search className='size-4 absolute left-2 top-2.5' />
            </div>
        </div>
    )
}

export default Page
