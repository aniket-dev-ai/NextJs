import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <h1>Snippets</h1>
        <Link href="/snippets/new">
        <Button variant="default">New</Button>
        </Link>
      </div>
    </div>
  )
}

export default page