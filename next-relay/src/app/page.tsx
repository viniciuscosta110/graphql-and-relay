import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Hello Dash</h1>
      Link to <Link href="/dashboard">Dashboard</Link>
    </div>
  )
}
