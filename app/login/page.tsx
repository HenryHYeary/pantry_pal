import { login, signup } from "./actions"


export default function LoginPage() {
  return (
    <form className="border-black flex flex-col">
      <label htmlFor="email" className="bg-black text-white">Email:</label>
      <input id="email" name="email" type="email" required/>
      <label htmlFor="password" className="bg-black text-white">Password:</label>
      <input id="password" name="password" type="password" required/>
      <button formAction={login} className="bg-black text-white border-b-2 border-white">Log in</button>
      <button formAction={signup} className="bg-black text-white gap-y-4">Sign up</button>
    </form>
  )
}