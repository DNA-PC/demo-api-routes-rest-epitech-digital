import type {User} from '../interfaces'
import useSwr from 'swr'
import Link from 'next/link'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Index() {
  const {data, error} = useSwr<User[]>('/api/users', fetcher)

  if (error) return <div>Failed to load users</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <h1 style={{color:"red"}}>Hello Epitech 👋</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <Link href="/user/[id]" as={`/user/${user.id}`} legacyBehavior>
              {`User ${user.id}`}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
