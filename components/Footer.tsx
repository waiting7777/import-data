import Link from 'next/link'

function Footer() {
  return (
    <div className="py-4 bg-black text-gray-main">
      <div className="container flex justify-start text-sm mx-auto">
        <div>
          Copyright © 2022 | Design by <Link href="https://twitter.com/waiting7777" target="_blank"><a className='text-white' target="_blank">Waiting7777</a></Link> 
        </div>
      </div>
    </div>
  )
}

export default Footer