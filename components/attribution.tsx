import { Twitter_URL } from "@/lib/constants"
import Link from "next/link"
import { Icons } from "./icons"

function Attribution() {
  return (
    <div className="fixed text-sm text-right bottom-4 right-4">
      <p>next.js / vercel&apos;s AI SDK, tailwind & typescript</p>
      <p className="text-sm">built by <Link href={Twitter_URL} className="inline-flex justify-end gap-2 underline text-amethyst-500 underline-offset-2 item-center">@ricobuilds <Icons.twitter/> </Link></p>
    </div>
  )
}

export {Attribution}