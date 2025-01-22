import { Button } from "@/components/ui/button"
import { logout } from "./actions"
import { requireUser } from "./lib/hooks"

export default async function Home() {
  const user = await requireUser()

  return (
    <form action={async () => {
      "use server"
      await logout()
    }}>
      <Button type="submit">Log-out</Button>
    </form>
  )
}
