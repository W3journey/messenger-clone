"use client"

import useActiveList from "@/app/hooks/useActiveList"
import { User } from "@prisma/client"
import Image from "next/image"

interface MobileSettingsAvatarProps {
  user?: User
}

const MobileSettingsAvatar: React.FC<MobileSettingsAvatarProps> = ({
  user,
}) => {
  const { members } = useActiveList()
  const isActive = members.indexOf(user?.email!) !== -1

  return (
    <div className="relative">
      <div className="relative inline-block w-6 h-6 overflow-hidden rounded-full">
        <Image
          alt="Avatar"
          src={user?.image || "/images/placeholder.jpg"}
          fill
        />
      </div>
      {isActive && (
        <span className="absolute top-0 right-0 block w-2 h-2 bg-green-500 rounded-full ring-2 ring-white md:h-3 md:w-3" />
      )}
    </div>
  )
}

export default MobileSettingsAvatar
